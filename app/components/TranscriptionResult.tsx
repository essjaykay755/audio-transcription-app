'use client'

import { useSearchParams } from 'next/navigation'

export default function TranscriptionResult() {
  const searchParams = useSearchParams()
  const transcript = searchParams.get('transcript')
  const error = searchParams.get('error')

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  if (!transcript) {
    return null
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Transcription Result:</h2>
      <p className="whitespace-pre-wrap">{transcript}</p>
    </div>
  )
}