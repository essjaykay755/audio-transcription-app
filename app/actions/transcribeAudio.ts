"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function transcribeAudio(
  formData: FormData
): Promise<{ transcript?: string; error?: string }> {
  const file = formData.get("file") as File;
  if (!file) {
    return { error: "No file uploaded" };
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt =
      "Transcribe the following audio file. Do not include any timestamps in the transcription.";
    const audioData = await file.arrayBuffer();
    const base64Audio = Buffer.from(audioData).toString("base64");

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: file.type,
          data: base64Audio,
        },
      },
    ]);
    let transcript = result.response.text();

    // Remove any remaining timestamps (in case the model still includes them)
    transcript = transcript.replace(/\d+:\d+\s*/g, "");

    // Remove extra spaces and trim
    transcript = transcript.replace(/\s+/g, " ").trim();

    console.log("Transcript:", transcript);

    return { transcript };
  } catch (error) {
    console.error("Transcription error:", error);
    return { error: "Failed to transcribe audio" };
  }
}
