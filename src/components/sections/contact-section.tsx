"use client";

import { useRef, useState } from "react";
import { SectionLabel } from "../../components/ui/section-label";
import { BlinkCursor, BlinkDot } from "../../components/ui/blink-cursor";
import { contactLinks } from "../../data/portfolio.data";
import emailjs from "@emailjs/browser";

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
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    try {
      setStatus("sending");

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("✅ Message sent successfully!");

      formRef.current?.reset();

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus("sent");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error(error);

      alert("❌ Failed to send message.");

      setStatus("idle");
    }
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

          <form
            ref={formRef}
            className="flex flex-col"
            aria-label="Contact form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
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
                  className="
    w-full
    h-11
    px-5
    rounded-md

    bg-white/[0.03] backdrop-blur-sm
    border border-white/[0.06]

    text-neutral-300
    placeholder:text-neutral-700

    font-mono
    text-[12px]
    tracking-[0.08em]

    outline-none
    caret-amber-400

    transition-all
    duration-200

    focus:border-amber-400/40
    focus:bg-white/[0.05]

    shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

    disabled:opacity-50
  "
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
                className="     w-full
      min-h-15
      px-5
      py-4
      rounded-md

      bg-white/[0.03]
      backdrop-blur-sm

      border border-white/[0.06]

      text-neutral-300
      placeholder:text-neutral-700

      font-mono
      text-[12px]
      tracking-[0.08em]
      leading-[1.8]

      outline-none
      resize-none

      caret-amber-400

      transition-all
      duration-200

      focus:border-amber-400/40
      focus:bg-white/[0.05]

      shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]

      disabled:opacity-50"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[9px] text-neutral-500 tracking-[0.1em] font-mono">
                {statusText[status]}
              </span>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-6 py-3 bg-amber-400 text-black transition-colors duration-150 hover:bg-neutral-100 cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Transmitting..." : "Transmit →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
