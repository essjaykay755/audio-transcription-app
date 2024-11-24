"use client";

import { useState, useRef, useEffect } from "react";
import { transcribeAudio } from "../actions/transcribeAudio";
import {
  MicrophoneIcon,
  ArrowUpTrayIcon,
  StopIcon,
} from "@heroicons/react/24/solid";
import TranscriptionHistory from "./TranscriptionHistory";
import { RainbowButton } from "./ui/rainbow-button";

interface Transcription {
  id: string;
  text: string;
  timestamp: string;
}

export default function AudioUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const [history, setHistory] = useState<Transcription[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('transcriptionHistory');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('transcriptionHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setTranscript(null);
    setIsTranscribing(true);

    try {
      const result = await transcribeAudio(formData);
      if (result.transcript) {
        setTranscript(result.transcript);
        const newTranscription = {
          id: Date.now().toString(),
          text: result.transcript,
          timestamp: new Date().toISOString(),
        };
        setHistory(prev => [newTranscription, ...prev]);
      } else if (result.error) {
        setError(result.error);
      }
    } catch (error) {
      console.error("Transcription error:", error);
      setError("An error occurred during transcription. Please try again.");
    } finally {
      setIsTranscribing(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioFile = new File([audioBlob], "recorded_audio.wav", {
          type: "audio/wav",
        });
        setFile(audioFile);

        const formData = new FormData();
        formData.append("file", audioFile);
        handleSubmit(formData);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setError("Error accessing microphone. Please check your permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const removeFromHistory = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="mb-6">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2"
          >
            Upload Audio File
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-zinc-700 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ArrowUpTrayIcon className="w-10 h-10 mb-3 text-gray-400 dark:text-zinc-500" />
                <p className="mb-2 text-sm text-gray-500 dark:text-zinc-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-zinc-400">
                  WAV or M4A (MAX. 10MB)
                </p>
              </div>
              <input
                id="file-upload"
                name="file"
                type="file"
                accept="audio/wav,audio/x-m4a"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setFile(selectedFile);
                  if (selectedFile) {
                    const formData = new FormData();
                    formData.append("file", selectedFile);
                    handleSubmit(formData);
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
          {file && (
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              Selected file: {file.name}
            </p>
          )}
        </div>
        <div className="flex justify-center space-x-4">
          <RainbowButton
            onClick={isRecording ? stopRecording : startRecording}
            className="w-auto min-w-[160px]"
          >
            {isRecording ? (
              <>
                <StopIcon className="w-5 h-5" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <MicrophoneIcon className="w-5 h-5" />
                <span>Start Recording</span>
              </>
            )}
          </RainbowButton>
        </div>
      </div>

      {isTranscribing && (
        <div className="mt-4 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mr-2"></div>
          <p className="text-gray-700 dark:text-zinc-300">
            Transcribing your audio... This may take a few moments.
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400">
          <p>{error}</p>
        </div>
      )}

      {transcript && (
        <div className="mt-8 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 dark:border-zinc-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-zinc-200">
            Latest Transcription
          </h2>
          <p className="whitespace-pre-wrap text-gray-800 dark:text-zinc-200 leading-relaxed">
            {transcript}
          </p>
        </div>
      )}

      <TranscriptionHistory 
        history={history}
        onRemove={removeFromHistory}
        onClearAll={clearHistory}
      />
    </div>
  );
}
