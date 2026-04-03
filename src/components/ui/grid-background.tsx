export default function GridBackground() {
  return (
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
  )
}