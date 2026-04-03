"use client"
import { useState, ChangeEvent, FormEvent } from "react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  // Encode form data for Netlify
  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Sending...")

    const data = { "form-name": "contact", ...formState }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      })
      setStatus("Message sent successfully!")
      setFormState({ name: "", email: "", project: "", message: "" })
    } catch (error) {
      setStatus("Oops! Something went wrong.")
      console.error(error)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute right-10 top-8 h-14 w-14 rounded-md bg-white/5 blur-sm" />
      <div className="absolute right-24 top-20 h-10 w-10 rounded-md bg-white/5 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="relative space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Your name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name Here"
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Email Address</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Project Type</label>
          <input
            type="text"
            name="project"
            value={formState.project}
            onChange={handleChange}
            placeholder="Website, branding, redesign..."
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your project..."
            className="min-h-[180px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 font-medium text-white transition hover:bg-white/15 active:scale-[0.98]"
        >
          Submit
        </button>

        {status && <p className="mt-2 text-sm text-white/80">{status}</p>}
      </form>
    </div>
  )
}