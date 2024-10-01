import AudioUploadForm from "./components/AudioUploadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 flex flex-col">
      <div className="container mx-auto p-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Audio Transcription App
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <AudioUploadForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
