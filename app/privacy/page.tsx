import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheckIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline";

export default function Privacy() {
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
                Privacy Policy
              </h1>

              <div className="prose dark:prose-invert max-w-none">
                <div className="text-sm text-gray-500 dark:text-zinc-400 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-purple-50 dark:bg-zinc-700/50">
                    <ShieldCheckIcon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">Secure Processing</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-2">
                      Your data is processed with industry-standard security measures
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-pink-50 dark:bg-zinc-700/50">
                    <LockClosedIcon className="w-12 h-12 text-pink-600 dark:text-pink-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">Data Privacy</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-2">
                      We never share your data with third parties
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-purple-50 dark:bg-zinc-700/50">
                    <ServerIcon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">Limited Storage</h3>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 mt-2">
                      Data is automatically deleted after processing
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      1. Information We Collect
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      We collect information that you provide directly to us, including audio files
                      you upload for transcription and any resulting transcripts. This data is
                      processed solely for the purpose of providing our transcription service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      2. How We Use Your Information
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-zinc-300">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process and complete transcription requests</li>
                      <li>Send you technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      3. Data Storage and Security
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      We implement appropriate technical and organizational measures to protect your
                      personal information against unauthorized or unlawful processing, accidental
                      loss, destruction, or damage. All data is encrypted in transit and at rest.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
                      4. Contact Us
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-300 mt-4">
                      If you have any questions about this Privacy Policy, please contact us at:
                      <a href="mailto:privacy@voxscribe.com" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 ml-1">
                        privacy@voxscribe.com
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