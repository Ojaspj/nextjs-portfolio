"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Only track sections on home page
      if (pathname === "/") {
        const sections = ["about", "projects", "contact"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }

        // If we're at the top, set active section to empty (home)
        if (window.scrollY < 100) {
          setActiveSection("")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Home", path: "/", section: "" },
    { name: "About", path: "/#about", section: "about" },
    { name: "Projects", path: "/projects", section: "projects" },
    { name: "Contact", path: "/contact", section: "contact" },
  ]

  const isActive = (item: (typeof navItems)[0]) => {
    if (pathname === "/contact" && item.path === "/contact") {
      return true
    }
    if (pathname.startsWith("/projects") && item.path === "/projects") {
      return true
    }
    if (pathname === "/" && item.section === activeSection) {
      return true
    }
    if (pathname === "/" && item.path === "/" && activeSection === "") {
      return true
    }
    return false
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        isScrolled ? "border-b shadow-sm" : "border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Prajwal</span>Joshi
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  isActive(item) ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive(item) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                ></span>
              </Link>
            ))}
          </nav>
        </div>
        {/* <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div> */}
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
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-[75vw] max-w-sm md:hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "var(--background, #ffffff)",
                borderLeft: "1px solid var(--border, #e2e8f0)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                className="flex items-center justify-between p-4 border-b"
                style={{ borderBottomColor: "var(--border, #e2e8f0)" }}
              >
                <p className="font-semibold">Menu</p>
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="p-4">
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
                        "flex items-center py-3 px-2 rounded-md text-lg font-medium transition-colors",
                        isActive(item) ? "text-primary" : "text-foreground",
                        "hover:bg-muted",
                      )}
                      style={{
                        color: isActive(item) ? "var(--primary, #3b82f6)" : "var(--foreground, #1f2937)",
                      }}
                    >
                      {item.name}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="h-px my-1" style={{ backgroundColor: "var(--border, #e2e8f0)" }} />
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
