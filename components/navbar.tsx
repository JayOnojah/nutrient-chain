"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/svgs/logo.svg";
import { usePathname } from "next/navigation";

interface NavProps {
  theme?: string;
}

const Navbar = ({ theme = "dark" }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleMobileButton = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", y: "-100%", opacity: 0 },
        { x: "0%", y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.to(menuRef.current, {
            x: "-100%",
            y: "-100%",
            opacity: 0,
            duration: 0.2,
            ease: "power3.in",
          });
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // theme === "dark" ? `${scrolled && "bg-black"}` : "bg-cyclers-primary"
  return (
    <div
      className={`md:px-5 ${
        theme === "dark" ? `${scrolled && "bg-[#0D2200]"}` : "bg-white"
      } fixed w-full top-0 z-30`}
    >
      <nav className="app-width mx-auto bg-transparent w-full py-6 flex justify-between items-center relative">
        <div className="md:w-[20%]">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 cursor-pointer "
          >
            <Image src={Logo} height={24} width={60} alt="cycler studios" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-8 font-semibold ${
            theme === "dark" ? "text-white" : `text-[#656565]`
          }`}
        >
          <Link
            href="/about-us"
            className={`transition-all duration-100 hover:scale-95 hover:border-b ${
              pathname === "/about-us" &&
              `border-b ${theme === "dark" ? "" : "text-[#74B601]"}`
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={`transition-all duration-100 hover:scale-95 hover:border-b ${
              pathname === "/contact-us" &&
              `border-b ${theme === "dark" ? "" : "text-[#74B601]"}`
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/our-blog"
            className={`transition-all duration-100 hover:scale-95 hover:border-b ${
              pathname === "/our-blog" &&
              `border-b ${theme === "dark" ? "" : "text-[#74B601]"}`
            }`}
          >
            Our Blog
          </Link>
          <a
            href="mailto:hi@nutrientchain.com"
            className="py-[8px] lg:py-[10px] text-white text-xs lg:text-[14px] px-3 md:px-[22px] bg-[#74B700] rounded-full hover:bg-[#496912]"
          >
            Join the mission
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            theme === "dark" ? "text-white" : "text-black"
          } hover:scale-105 transition-all duration-300`}
          onClick={handleMobileButton}
        >
          <MenuIcon />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-white justify-between flex flex-col items-start p-6 transform -translate-x-full -translate-y-full opacity-0 z-50"
        >
          <div className="w-full">
            <div className="w-full flex justify-between gap-10 mt-4">
              <Image src={Logo} height={24} width={64} alt="cycler studios" />
              {/* Close Button */}
              <button
                className="self-end text-black"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col mt-10 space-y-6 text-black font-semibold text-xl w-full">
              {["About Us", "  Contact Us", "Our Blog"].map((item, index) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  // href={"/#"}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-black pb-2"
                  ref={(el: HTMLAnchorElement | null) => {
                    if (el) menuItemsRef.current[index] = el;
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-10 w-full bg-black text-white py-3 rounded-md font-semibold shadow-lg hover:bg-gray-800 transition"
            onClick={handleMobileButton}
          >
            Join the Misson
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
