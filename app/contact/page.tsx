"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent!", { description: "I'll get back to you shortly." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try emailing me directly at joshiprajwal00@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page header */}
      <section
        className="border-b border-line"
        style={{ paddingTop: "clamp(56px,10vh,112px)", paddingBottom: "clamp(40px,6vh,72px)" }}
      >
        <div className="wrap">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fade}
              className="font-mono uppercase text-brand mb-4"
              style={{ fontSize: "12.5px", letterSpacing: ".14em" }}
            >
              §03 Contact
            </motion.p>
            <motion.h1
              variants={fade}
              className="font-display font-semibold text-ink mb-4"
              style={{ fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              Get in touch.
            </motion.h1>
            <motion.p
              variants={fade}
              className="text-slate"
              style={{ maxWidth: "52ch", fontSize: "clamp(16px,2vw,18px)" }}
            >
              Have a project in mind or want to collaborate? Drop me a message
              and I&apos;ll get back to you shortly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBlock: "clamp(48px,8vh,96px)" }}>
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16"
          >

            {/* Form */}
            <motion.div variants={fade}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-mono uppercase text-slate"
                      style={{ fontSize: "11px", letterSpacing: ".08em" }}
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-paper-2 border-line focus-visible:ring-1 focus-visible:ring-brand font-body text-[15px]"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-mono uppercase text-slate"
                      style={{ fontSize: "11px", letterSpacing: ".08em" }}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-paper-2 border-line focus-visible:ring-1 focus-visible:ring-brand font-body text-[15px]"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="subject"
                    className="font-mono uppercase text-slate"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-paper-2 border-line focus-visible:ring-1 focus-visible:ring-brand font-body text-[15px]"
                    style={{ borderRadius: "2px" }}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-mono uppercase text-slate"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={7}
                    required
                    className="bg-paper-2 border-line focus-visible:ring-1 focus-visible:ring-brand font-body text-[15px] resize-none"
                    style={{ borderRadius: "2px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-mono text-[13.5px] bg-ink text-paper hover:bg-brand transition-colors duration-150 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  style={{ padding: "13px 22px", borderRadius: "2px" }}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="inline-block rounded-full border-2 border-paper/30 border-t-paper animate-spin"
                        style={{ width: "13px", height: "13px" }}
                      />
                      Sending…
                    </>
                  ) : (
                    "Send message →"
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info sidebar */}
            <motion.div variants={fade} className="space-y-8">

              {/* Direct email */}
              <div>
                <p
                  className="font-mono uppercase text-slate mb-3"
                  style={{ fontSize: "11px", letterSpacing: ".08em" }}
                >
                  Email directly
                </p>
                <a
                  href="mailto:joshiprajwal00@gmail.com"
                  className="font-display text-brand border-b-2 border-brand hover:opacity-70 transition-opacity duration-150 pb-0.5 text-[17px]"
                >
                  joshiprajwal00@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p
                  className="font-mono uppercase text-slate mb-1.5"
                  style={{ fontSize: "11px", letterSpacing: ".08em" }}
                >
                  Location
                </p>
                <p className="font-display text-[17px] text-ink">Perth, Australia</p>
              </div>

              {/* Socials */}
              <div>
                <p
                  className="font-mono uppercase text-slate mb-3"
                  style={{ fontSize: "11px", letterSpacing: ".08em" }}
                >
                  Socials
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "GitHub", href: "https://github.com/ojaspj" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-joshi-3b3734156/" },
                    { label: "Résumé PDF", href: "/resume.pdf" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-mono text-[13px] text-slate hover:text-ink transition-colors duration-[120ms]"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability note */}
              <div
                className="border border-line bg-paper-2 p-5"
                style={{ borderRadius: "2px" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block rounded-full bg-success shrink-0"
                    style={{ width: "8px", height: "8px" }}
                  />
                  <p className="font-mono text-[12px] text-slate uppercase" style={{ letterSpacing: ".06em" }}>
                    Open to opportunities
                  </p>
                </div>
                <p className="text-slate" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                  Full-time roles, freelance projects, or just a conversation — feel free
                  to reach out. I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
