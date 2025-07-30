"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce the scroll handler
      timeoutRef.current = setTimeout(() => {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.scrollY + 100; // Adding some offset

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = section.id;
          }
        });

        setActiveSection(currentSection || "home");
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "#about", section: "about" },
    { name: "Projects", path: "#projects", section: "projects" },
    { name: "Contact", path: "#contact", section: "contact" },
  ];

  // Check if we're on the home page (where sections exist)
  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "sticky top-0 px-4 md:px-6 z-40 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-200",
        isScrolled ? "border-b shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="font-bold text-base sm:text-lg md:text-xl leading-none"
          >
            <span className="text-primary ">Prajwal</span>Joshi
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm sm:text-[16px] font-medium transition-colors hover:text-primary relative group leading-relaxed",
                  (isHomePage && activeSection === item.section) ||
                    (!isHomePage && pathname === item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    (isHomePage && activeSection === item.section) ||
                      (!isHomePage && pathname === item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                ></span>
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-[75vw] max-w-sm md:hidden bg-background/95 backdrop-blur-md shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex  items-center justify-between p-5 border-b">
                <p className="font-semibold text-base md:text-lg leading-none">
                  Menu
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="p-5 space-y-1 bg-white">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center py-3 px-4 rounded-lg text-base md:text-lg font-medium transition-colors w-full leading-relaxed",
                        (isHomePage && activeSection === item.section) ||
                          (!isHomePage && pathname === item.path)
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="h-px my-1 bg-border/50" />
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}