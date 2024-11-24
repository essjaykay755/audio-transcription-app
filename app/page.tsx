import AudioUploadForm from "./components/AudioUploadForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12">
        {/* Dot pattern background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-900 [background-image:radial-gradient(#c7c7c7_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-zinc-900/50 dark:to-zinc-800/50" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Audio Transcription Made Simple
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400">
              Transform your audio into text with cutting-edge AI technology. Fast, accurate, and secure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-zinc-700">
            <AudioUploadForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
