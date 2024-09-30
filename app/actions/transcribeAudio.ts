"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function transcribeAudio(
  formData: FormData
): Promise<{ transcript?: string; error?: string }> {
  const file = formData.get("file") as File;
  if (!file) {
    console.error("No file uploaded");
    return { error: "No file uploaded" };
  }

  try {
    console.log("File received:", file.name, file.type, file.size);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const audioBuffer = await file.arrayBuffer();
    const base64Audio = Buffer.from(audioBuffer).toString("base64");

    const prompt =
      "Transcribe the following audio file and provide a detailed transcript:";

    const imageParts = [
      {
        inlineData: {
          data: base64Audio,
          mimeType: file.type,
        },
      },
    ];

    console.log("Sending request to Gemini API...");
    const result = await model.generateContent([prompt, ...imageParts]);
    console.log("Received response from Gemini API");

    const transcript = result.response.text();
    console.log("Transcript:", transcript);

    return { transcript };
  } catch (error) {
    console.error("Transcription error:", error);
    let errorMessage = "Failed to transcribe audio";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    return { error: errorMessage };
  }
}
