export function KiaraLogo({
  className = "",
  size = "default",
}: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { container: "h-8", text: "text-xl" },
    default: { container: "h-12", text: "text-3xl" },
    large: { container: "h-20", text: "text-5xl" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className={currentSize.container} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phoenix logo based on golden ratio */}
        <path
          d="M50 10 C60 15, 70 25, 75 40 C80 55, 78 70, 70 80 C60 75, 55 65, 50 55 C45 65, 40 75, 30 80 C22 70, 20 55, 25 40 C30 25, 40 15, 50 10 Z"
          fill="#FF2F05"
        />
        <path d="M50 10 C55 20, 58 30, 60 40 C50 35, 45 30, 40 40 C42 30, 45 20, 50 10 Z" fill="#C71B08" />
        <circle cx="45" cy="35" r="2" fill="#222222" />
        <circle cx="55" cy="35" r="2" fill="#222222" />
      </svg>
      <span className={`font-bold ${currentSize.text}`} style={{ color: "#222222" }}>
        Kiara
      </span>
    </div>
  )
}
