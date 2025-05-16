import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Logo from "@/public/images/svgs/logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A2500] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-6 lg:col-span-3">
            <Link
              href="/"
              className="transition-all duration-300 hover:scale-105 cursor-pointer "
            >
              <Image src={Logo} height={24} width={60} alt="cycler studios" />
            </Link>
            <p className="text-sm max-w-xs">
              Transforming agriculture with technology and transparency.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-4">Contact us</h3>
            <p className="text-sm">Lagos, Nigeria</p>
            <p className="text-sm">
              <a
                href="mailto:hello@nutrientchain.com"
                className="hover:underline"
              >
                hello@nutrientchain.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+2348000000000" className="hover:underline">
                +234 800 000 0000
              </a>
            </p>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <p className="text-sm">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-sm">
              <Link href="/terms-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-[#1A3500]">
          <p className="text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Nutrient chain. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-[#8BC34A] transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-[#8BC34A] transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-[#8BC34A] transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-[#8BC34A] transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
