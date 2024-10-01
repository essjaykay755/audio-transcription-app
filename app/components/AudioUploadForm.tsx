"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { transcribeAudio } from "../actions/transcribeAudio";
import { MicrophoneIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Transcribing...
        </>
      ) : (
        <>
          <MicrophoneIcon className="w-6 h-6 inline-block mr-2" />
          Transcribe
        </>
      )}
    </button>
  );
}

export default function AudioUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await transcribeAudio(formData);
    if (result.transcript) {
      setTranscript(result.transcript);
      setError(null);
    } else if (result.error) {
      setError(result.error);
      setTranscript(null);
    }
  };

  return (
    <div>
      <form action={handleSubmit} className="mb-8">
        <div className="mb-6">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Audio File
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ArrowUpTrayIcon className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  MP3, WAV, or M4A (MAX. 10MB)
                </p>
              </div>
              <input
                id="file-upload"
                name="file"
                type="file"
                accept="audio/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
          </div>
          {file && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {file.name}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
      {error && (
        <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}
      {transcript && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Transcription Result:</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="whitespace-pre-wrap">{transcript}</p>
          </div>
        </div>
      )}
    </div>
  );
}
