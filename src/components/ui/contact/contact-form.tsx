export default function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)] sm:p-8">
      
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Glow blocks */}
      <div className="absolute right-10 top-8 h-14 w-14 rounded-md bg-white/5 blur-sm" />
      <div className="absolute right-24 top-20 h-10 w-10 rounded-md bg-white/5 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl" />

      <form className="relative space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Your name
          </label>
          <input
            type="text"
            placeholder="Name Here"
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Project Type
          </label>
          <input
            type="text"
            placeholder="Website, branding, redesign..."
            className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
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
      </form>
    </div>
  )
}