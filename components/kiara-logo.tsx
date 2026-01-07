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
        {/* Phoenix logo - correct design */}
        <path
          d="M20 35 C20 30, 22 25, 25 22 C28 20, 32 20, 35 25 L30 40 L35 35 C40 20, 45 10, 50 5 C55 10, 60 20, 65 35 L70 40 L65 25 C68 20, 72 20, 75 22 C78 25, 80 30, 80 35 C80 40, 78 45, 75 48 L80 50 L78 55 C85 60, 88 65, 90 72 C92 78, 90 85, 85 90 L82 85 L78 80 C75 75, 72 72, 68 70 L70 75 C65 82, 58 88, 50 90 C42 88, 35 82, 30 75 L32 70 C28 72, 25 75, 22 80 L18 85 L15 90 C10 85, 8 78, 10 72 C12 65, 15 60, 22 55 L20 50 L25 48 C22 45, 20 40, 20 35 Z"
          fill="#FF2F05"
        />
        <path 
          d="M50 5 C52 15, 55 22, 58 28 L60 35 L55 30 C52 25, 50 18, 50 10 L50 5 Z M42 28 C45 22, 48 15, 50 5 L50 10 C50 18, 48 25, 45 30 L40 35 L42 28 Z" 
          fill="#C71B08" 
        />
      </svg>
      <span className={`font-bold ${currentSize.text}`} style={{ color: "#222222" }}>
        Kiara
      </span>
    </div>
  )
}
