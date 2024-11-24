import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
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
                Terms of Service
              </h1>
              
              <div className="prose dark:prose-invert max-w-none">
                <div className="text-sm text-gray-500 dark:text-zinc-400 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      By accessing and using VoxScribe, you accept and agree to be bound by the
                      terms and provision of this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      2. Description of Service
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      VoxScribe provides an AI-powered audio transcription service that converts
                      audio files into text. The service is provided "as is" and "as available"
                      without any warranties.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      3. User Responsibilities
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">You agree to:</p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-zinc-300">
                      <li>Provide accurate information</li>
                      <li>Use the service only for lawful purposes</li>
                      <li>Not upload any malicious content</li>
                      <li>Maintain the confidentiality of your account</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      4. Intellectual Property
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      You retain all rights to your content. By using our service, you grant us
                      a license to process your audio files for transcription purposes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      5. Service Modifications
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      We reserve the right to modify or discontinue the service at any time
                      without notice. We shall not be liable to you or any third party for any
                      modification, suspension, or discontinuance of the service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      6. Contact
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      For any questions regarding these terms, please contact us at:
                      <a href="mailto:legal@voxscribe.com" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 ml-1">
                        legal@voxscribe.com
                      </a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 