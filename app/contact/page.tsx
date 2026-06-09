"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import Link from "next/link"

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed to send")
      toast.success("Message sent!", { description: "I'll get back to you shortly." })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      toast.error("Something went wrong.", { description: "Please try emailing me directly at joshiprajwal00@gmail.com" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">

      {/* Page header */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto space-y-4"
          >
            <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </motion.p>
            <motion.h1 variants={fade} className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              Get in touch
            </motion.h1>
            <motion.p variants={fade} className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Have a project in mind or want to collaborate? Send me a message and I&apos;ll get back to you shortly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12"
        >

          {/* Form */}
          <motion.div variants={fade} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border/60 focus-visible:ring-1 focus-visible:ring-foreground/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border/60 focus-visible:ring-1 focus-visible:ring-foreground/30"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-card border-border/60 focus-visible:ring-1 focus-visible:ring-foreground/30"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={7}
                  required
                  className="bg-card border-border/60 focus-visible:ring-1 focus-visible:ring-foreground/30 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div variants={fade} className="lg:col-span-2 space-y-8">

            {/* Contact cards */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Reach me at</p>
              <a
                href="mailto:joshiprajwal00@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-foreground/20 transition-colors group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">joshiprajwal00@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">India &middot; Remote</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Socials</p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/ojaspj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-2">
              <p className="text-sm font-medium">Open to opportunities</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Whether it&apos;s a full-time role, freelance project, or just a conversation — feel free to reach out. I
                typically respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 px-6 mt-8">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prajwal Joshi
          </p>
          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ojaspj" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="mailto:joshiprajwal00@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
