"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { transcribeAudio } from "../actions/transcribeAudio";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
    >
      {pending ? "Transcribing..." : "Transcribe"}
    </button>
  );
}

export default function AudioUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{
    transcript?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    if (file) {
      formData.set("file", file);
    }
    const transcriptionResult = await transcribeAudio(formData);
    setResult(transcriptionResult);
  };

  return (
    <div>
      <form action={handleSubmit} className="mb-4">
        <input
          type="file"
          name="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-2"
        />
        <SubmitButton />
      </form>
      {result && (
        <div className="mt-4">
          {result.error ? (
            <p className="text-red-500">{result.error}</p>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-2">Transcription:</h2>
              <p className="whitespace-pre-wrap">{result.transcript}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
