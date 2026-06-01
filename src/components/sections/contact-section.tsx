"use client";

// components/sections/contact-section.tsx

import { useState } from "react";
import { SectionLabel } from "../../components/ui/section-label";
import { BlinkCursor, BlinkDot } from "../../components/ui/blink-cursor";
import { contactLinks, meta } from "../../data/portfolio.data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "sent";

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Replace with your actual send logic (e.g. Supabase, Resend, EmailJS)
    setTimeout(() => setStatus("sent"), 1200);
  };

  const statusText: Record<FormStatus, React.ReactNode> = {
    idle: (
      <>
        $ awaiting input
        <BlinkCursor />
      </>
    ),
    sending: (
      <>
        $ transmitting
        <BlinkCursor />
      </>
    ),
    sent: <span className="text-green-600">$ message sent ✓</span>,
  };

  return (
    <section
      id="contact"
      className="min-h-[80vh] px-8 py-24"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <SectionLabel className="mb-6">Contact</SectionLabel>

          <h2 className="font-['Space_Mono',monospace] text-[clamp(2rem,4vw,3.5rem)] font-bold text-neutral-100 leading-[1.1] mb-4">
            Let&apos;s
            <br />
            build
            <br />
            <em className="not-italic text-amber-400 font-normal">
              something.
            </em>
          </h2>

          <p className="text-[12px] leading-[1.9] text-neutral-500 max-w-[380px] mb-8">
            Open to collaborations, contract work, and interesting problems. If
            it ships, I&apos;m interested.
          </p>

          <ul className="list-none" aria-label="Contact information">
            {contactLinks.map((item) => (
              <li
                key={item.label}
                className="border-t border-neutral-800 py-4 last:border-b last:border-b-neutral-800 flex flex-col gap-1"
              >
                <span className="text-[8px] tracking-[0.2em] text-amber-900 uppercase">
                  {item.label}
                </span>
                <span
                  className={`text-[12px] tracking-[0.05em] ${
                    item.highlight ? "text-amber-400" : "text-neutral-100"
                  }`}
                >
                  {item.value}
                  {item.highlight && (
                    <>
                      {" "}
                      <BlinkDot className="text-amber-400" />
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <SectionLabel className="mb-6">Send Message</SectionLabel>

          <div className="flex flex-col" role="form" aria-label="Contact form">
            {(
              [
                {
                  name: "name",
                  label: "// Name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "// Email",
                  type: "email",
                  placeholder: "your@email.com",
                },
                {
                  name: "subject",
                  label: "// Subject",
                  type: "text",
                  placeholder: "What's this about?",
                },
              ] as const
            ).map((field) => (
              <div
                key={field.name}
                className="border-t border-neutral-800 py-4"
              >
                <label
                  htmlFor={field.name}
                  className="block text-[8px] tracking-[0.2em] text-amber-900 uppercase mb-2"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof FormState]}
                  onChange={handleChange}
                  disabled={status === "sent"}
                  className="w-full bg-transparent border-none text-neutral-100 font-mono text-[12px] outline-none caret-amber-400 placeholder:text-neutral-700 disabled:opacity-50"
                />
              </div>
            ))}

            <div className="border-t border-neutral-800 border-b border-b-neutral-800 py-4 mb-6">
              <label
                htmlFor="message"
                className="block text-[8px] tracking-[0.2em] text-amber-900 uppercase mb-2"
              >
                // Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about the project..."
                value={form.message}
                onChange={handleChange}
                disabled={status === "sent"}
                className="w-full bg-transparent border-none text-neutral-100 font-mono text-[12px] outline-none resize-none caret-amber-400 placeholder:text-neutral-700 disabled:opacity-50"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[9px] text-neutral-500 tracking-[0.1em] font-mono">
                {statusText[status]}
              </span>
              <button
                onClick={handleSubmit}
                disabled={status !== "idle"}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-amber-400 text-black transition-colors duration-150 hover:bg-neutral-100 cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Transmitting..." : "Transmit →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
