import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12">
        {/* Dot pattern background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-900 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-zinc-900/50 dark:to-zinc-800/50" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-zinc-700">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                About VoxScribe
              </h1>
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-600 dark:text-zinc-300">
                  VoxScribe is an open-source audio transcription tool that leverages cutting-edge AI technology 
                  to convert your audio files into accurate text transcriptions. Built with privacy and ease of use in mind, 
                  VoxScribe makes transcription accessible to everyone.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-zinc-200">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-zinc-300">
                  We believe in making advanced transcription technology freely available to everyone. 
                  Whether you're a student, researcher, journalist, or content creator, VoxScribe is here 
                  to help you convert speech to text quickly and accurately.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-zinc-200">
                  Technology
                </h2>
                <p className="text-gray-600 dark:text-zinc-300">
                  Powered by Google's Gemini 1.5 Pro AI model, VoxScribe delivers state-of-the-art 
                  transcription accuracy. Our platform is built using modern web technologies including 
                  Next.js, React, and TailwindCSS, ensuring a smooth and responsive user experience.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-zinc-200">
                  Open Source
                </h2>
                <p className="text-gray-600 dark:text-zinc-300">
                  VoxScribe is completely open source and free to use. We believe in transparency 
                  and community-driven development. You can find our source code on GitHub and 
                  contribute to making VoxScribe even better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 