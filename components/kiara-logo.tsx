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
        {/* Phoenix bird logo - elegant bird with swept tail */}
        <path
          d="M18 52 C20 49, 23 48, 26 49 L34 53 C39 48, 45 44, 51 42 L56 34 C57 31, 58 29, 59 27 C60 29, 61 31, 62 34 L67 42 C73 44, 79 48, 84 53 L92 49 C95 48, 98 49, 100 52 C100 55, 100 58, 99 61 L96 69 C99 74, 100 80, 99 86 C98 91, 95 95, 91 97 C89 96, 88 94, 87 91 L85 84 C83 86, 81 88, 79 89 L77 85 C75 87, 73 88, 71 89 L69 89 C67 88, 65 87, 63 85 L61 89 C59 88, 57 87, 55 85 L53 91 C52 94, 50 96, 48 97 C44 95, 41 91, 40 86 C39 80, 41 74, 44 69 L41 61 C39 58, 39 55, 41 52 L18 52 Z"
          fill="#FF2F05"
        />
        <path 
          d="M56 38 C57 44, 58 51, 59 58 L60 66 L59 57 C58 50, 57 43, 56 38 Z M62 38 C63 43, 64 50, 65 57 L66 66 L65 58 C64 51, 63 44, 62 38 Z" 
          fill="#C71B08" 
        />
      </svg>
      <span className={`font-bold ${currentSize.text}`} style={{ color: "#222222" }}>
        Kiara
      </span>
    </div>
  )
}
