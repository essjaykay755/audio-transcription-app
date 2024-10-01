"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function TranscriptionResult() {
  const searchParams = useSearchParams();
  const transcript = searchParams.get("transcript");
  const error = searchParams.get("error");

  if (error) {
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md"
        role="alert"
      >
        <div className="flex">
          <XCircleIcon className="h-6 w-6 text-red-500 mr-2" />
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!transcript) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <CheckCircleIcon className="h-8 w-8 text-green-500 mr-2" />
        Transcription Result
      </h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">
          {transcript}
        </p>
      </div>
    </div>
  );
}
