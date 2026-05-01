 import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-2 bg-white">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-10">
            <Link href="/">
              <div className="flex mb-2 -top-0">
                <Image
                  src="/nav-logo.png"
                  alt="logo"
                  width={150}
                  height={120}
                  className="object-cover h-auto w-auto  "
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              A modern online platform to explore, borrow, and manage books
              digitally.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/home"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Browse Books
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  My Borrowed
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
             Connect
            </h3>

            <div className="flex space-x-4 text-xl">
              <Link href="https://www.facebook.com/?ref=homescreenpwa" target="_blank"
               className="text-black dark:hover:text-white transition"
              >
                <FaFacebook />
              </Link>

              <Link href="https://github.com/nahidhasan330874" target="_blank"
                   className="text-black dark:hover:text-white transition"
              >
                <FaGithub />
              </Link>

              <Link href="https://www.linkedin.com/in/nahid-hasan-a84589394/" target="_blank"
                   className="text-black dark:hover:text-white transition"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Online Book Borrowing Platform . All
            rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
