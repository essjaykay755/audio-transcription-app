import AudioUploadForm from "./components/AudioUploadForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Audio Transcription App</h1>
      <AudioUploadForm />
    </main>
  );
}
