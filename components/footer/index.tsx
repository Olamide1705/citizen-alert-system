import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 lg:py-15 px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        <div className="max-w-sm">
          <h4 className="text-white text-lg lg:text-xl font-semibold">
            SafeSignal NG
          </h4>
          <p className="text-sm lg:text-base mt-4 text-white/70">
            AI-powered emergency alerts designed for Nigeria. One tap and your
            community knows you need help.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-lg font-semibold">Product</p>

          <Link
            href="#about"
            className="text-white/70 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="#features"
            className="text-white/70 hover:text-white transition"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-white/70 hover:text-white transition"
          >
            How it Works
          </Link>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg font-semibold">Connect</p>

          <div className="flex gap-4 text-white/70 text-xl">
            <Link href="#" className="hover:text-primary transition">
              <FaWhatsapp />
            </Link>

            <Link href="#" className="hover:text-primary transition">
              <FaLinkedin />
            </Link>

            <Link href="#" className="hover:text-primary transition">
              <FaTwitter />
            </Link>

            <Link href="#" className="hover:text-primary transition">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="pt-12 mt-8 border-t border-white/10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} SafeSignal NG. All rights reserved.
      </div>
    </footer>
  );
}
