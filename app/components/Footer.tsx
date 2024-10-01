import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        Made with ❤️ and ☕️ by{" "}
        <Link
          href="https://github.com/essjaykay755"
          className="text-blue-400 hover:text-blue-300 transition duration-300"
        >
          Subhojit Karmakar
        </Link>
      </div>
    </footer>
  );
}
