"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { ClipboardIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function TranscriptionResult() {
  const searchParams = useSearchParams();
  const transcript = searchParams.get("transcript");
  const error = searchParams.get("error");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (transcript) {
      await navigator.clipboard.writeText(transcript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
      <div className="bg-gray-100 dark:bg-zinc-800/50 p-6 rounded-lg shadow-inner relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/80 dark:bg-zinc-700/80 hover:bg-white dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm"
          aria-label="Copy transcription"
        >
          {copied ? (
            <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-500 dark:text-green-400" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-gray-600 dark:text-zinc-300" />
          )}
        </button>
        <p className="whitespace-pre-wrap text-gray-800 dark:text-zinc-200 leading-relaxed pr-12">
          {transcript}
        </p>
      </div>
    </div>
  );
}
