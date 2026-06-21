"use client"
import { useState, ChangeEvent, FormEvent } from "react"
import GridBackground from "@/components/ui/grid-background"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "loading" | "">("")
  const [isSuccess, setIsSuccess] = useState(false)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  setStatus("Sending...")
  setStatusType("loading")
  setIsSuccess(false)

  const formData = new FormData()
  Object.entries(formState).forEach(([key, value]) =>
    formData.append(key, value),
  )

  try {
    const res = await fetch("https://formspree.io/f/xpzvjnlo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (!res.ok) throw new Error("Failed to submit")

    setStatus("Message sent successfully!")
    setStatusType("success")
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    setFormState({ name: "", email: "", project: "", message: "" })
  } catch (error) {
    console.error(error)
    setStatus("Oops! Something went wrong.")
    setStatusType("error")
    setIsSuccess(false)
  }
}

  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-b from-white/4 to-white/2 p-6 sm:p-8">
      <GridBackground />
      <div className="absolute right-10 top-8 h-14 w-14 rounded-md bg-white/5 blur-sm" />
      <div className="absolute right-24 top-20 h-10 w-10 rounded-md bg-white/5 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

      <form onSubmit={handleSubmit} className="relative space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Your name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your Name"
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
            className="min-h-45 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
            required
          />
        </div>

        <button
          type="submit"
          className={`inline-flex h-12 items-center justify-center rounded-xl border px-6 font-medium text-white transition-all duration-300 active:scale-[0.98] ${
            isSuccess
              ? "border-green-400/30 bg-green-500 text-white hover:bg-green-500"
              : "border-white/10 bg-white/10 hover:bg-white/15"
          }`}
        >
          {isSuccess ? "Sent ✓" : "Submit"}
        </button>

        {status && (
          <p
            className={`mt-2 text-sm ${
              statusType === "success"
                ? "text-green-400"
                : statusType === "error"
                ? "text-red-400"
                : "text-white/80"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  )
}