import { KiaraLogo } from "@/components/kiara-logo"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function DesignSystemPage() {
  const colors = [
    { name: "Kiara Boost Red", hex: "#FF2F05", rgb: "RGB 255, 47, 5", description: "Primary brand color" },
    { name: "Red on Red", hex: "#C71B08", rgb: "RGB 199, 27, 8", description: "Accent variation" },
    { name: "Black", hex: "#222222", rgb: "RGB 34, 34, 34", description: "Text & UI elements" },
    { name: "White", hex: "#FFFFFF", rgb: "RGB 255, 255, 255", description: "Background & contrast" },
    { name: "Secondary Gray", hex: "#666666", rgb: "RGB 102, 102, 102", description: "Secondary text" },
  ]

  const values = [
    {
      title: "Trustworthy",
      description: "We build strong foundations of trust. We promise to deliver what we commit to.",
    },
    { title: "Honest", description: "We embrace open communication. We always do what's right." },
    {
      title: "Intelligent",
      description: "We are curious and insightful. We continuously learn to advance our expertise.",
    },
    { title: "Unstoppable", description: "We are creative and adaptable. We are bold in the face of challenges." },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="border-b" style={{ borderColor: "#F5F5F5" }}>
        <div className="container mx-auto px-6 py-8">
          <KiaraLogo size="large" />
          <p className="mt-4 text-lg" style={{ color: "#FF2F05" }}>
            Boost Humans with AI
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Vision Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-6" style={{ color: "#666666" }}>
            OUR VISION
          </h2>
          <div
            className="relative overflow-hidden rounded-2xl p-12"
            style={{ background: "linear-gradient(135deg, #FF2F05 0%, #C71B08 100%)" }}
          >
            <div className="relative z-10">
              <p className="text-4xl md:text-5xl font-bold leading-tight text-balance" style={{ color: "#FFFFFF" }}>
                Like a phoenix, we build technology to give hope to humans.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  d="M40 70 C40 60, 44 50, 50 44 C56 40, 64 40, 70 50 L60 80 L70 70 C80 40, 90 20, 100 10 C110 20, 120 40, 130 70 L140 80 L130 50 C136 40, 144 40, 150 44 C156 50, 160 60, 160 70 C160 80, 156 90, 150 96 L160 100 L156 110 C170 120, 176 130, 180 144 C184 156, 180 170, 170 180 L164 170 L156 160 C150 150, 144 144, 136 140 L140 150 C130 164, 116 176, 100 180 C84 176, 70 164, 60 150 L64 140 C56 144, 50 150, 44 160 L36 170 L30 180 C20 170, 16 156, 20 144 C24 130, 30 120, 44 110 L40 100 L50 96 C44 90, 40 80, 40 70 Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="p-8 border-2 hover:shadow-lg transition-shadow"
                style={{ borderColor: "#F5F5F5" }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 shrink-0" style={{ backgroundColor: "#FF2F05" }}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#222222" }}>
                      {value.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#666666" }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            OUR PRODUCTS
          </h2>
          <div className="rounded-2xl p-12" style={{ backgroundColor: "#F9F9F9" }}>
            <h3 className="text-5xl font-bold mb-4 text-balance" style={{ color: "#222222" }}>
              We build the future of work.
            </h3>
            <div className="space-y-2">
              <p className="text-xl" style={{ color: "#666666" }}>
                We eliminate the bottlenecks in people's workplace.
              </p>
              <p className="text-xl" style={{ color: "#666666" }}>
                We boost people's productivity x10, x100, x1000.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            LOGO VARIATIONS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#FFFFFF" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-tagline-red-black.png"
                  alt="Kiara Logo with Tagline - Light"
                  className="h-32 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold" style={{ color: "#666666" }}>
                  Primary Logo with Tagline (Light)
                </p>
              </div>
            </Card>
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#222222" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-tagline-red-white.png"
                  alt="Kiara Logo with Tagline - Dark"
                  className="h-32 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold text-white">Primary Logo with Tagline (Dark)</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#FFFFFF" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-red-black.png"
                  alt="Kiara Logo - Light"
                  className="h-24 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold" style={{ color: "#666666" }}>
                  Logo Without Tagline (Light)
                </p>
              </div>
            </Card>
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#222222" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-red-2bwhite.png"
                  alt="Kiara Logo - Dark"
                  className="h-24 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold text-white">Logo Without Tagline (Dark)</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#FFFFFF" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-icon-red.png"
                  alt="Kiara Icon"
                  className="h-20 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold" style={{ color: "#666666" }}>
                  Icon Only
                </p>
              </div>
            </Card>
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#F9F9F9" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-icon-red.png"
                  alt="Kiara Icon"
                  className="h-20 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold" style={{ color: "#666666" }}>
                  Icon on Gray
                </p>
              </div>
            </Card>
            <Card
              className="p-12 flex items-center justify-center border-2"
              style={{ borderColor: "#F5F5F5", backgroundColor: "#222222" }}
            >
              <div className="text-center">
                <img
                  src="/images/28master-29kiara-logo-icon-red.png"
                  alt="Kiara Icon"
                  className="h-20 w-auto mx-auto"
                />
                <p className="mt-4 text-xs font-semibold text-white">Icon on Dark</p>
              </div>
            </Card>
          </div>

          <p className="mt-6 text-sm leading-relaxed" style={{ color: "#666666" }}>
            Phoenix with Golden Ratio — Our logo represents rebirth, transformation, and infinite growth through
            mathematical perfection. Use the appropriate variation based on background color and available space.
          </p>
        </section>

        {/* Color Palette Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            COLOR PALETTE
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="space-y-4">
                <div
                  className="aspect-square rounded-xl border-2 shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: color.hex, borderColor: color.hex === "#FFFFFF" ? "#E5E5E5" : color.hex }}
                />
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#222222" }}>
                    {color.name}
                  </h3>
                  <p className="text-xs font-mono mb-1" style={{ color: "#666666" }}>
                    {color.hex}
                  </p>
                  <p className="text-xs" style={{ color: "#666666" }}>
                    {color.rgb}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#999999" }}>
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            TYPOGRAPHY
          </h2>
          <div className="space-y-12">
            {/* Primary Font */}
            <Card className="p-12 border-2" style={{ borderColor: "#F5F5F5" }}>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider" style={{ color: "#FF2F05" }}>
                  PRIMARY
                </span>
                <h3 className="text-2xl font-bold mt-2" style={{ color: "#222222" }}>
                  Source Sans Pro Bold
                </h3>
              </div>
              <div className="space-y-6">
                <div className="font-bold text-4xl" style={{ color: "#222222" }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div className="font-bold text-4xl" style={{ color: "#666666" }}>
                  abcdefghijklmnopqrstuvwxyz
                </div>
                <div className="font-bold text-4xl" style={{ color: "#666666" }}>
                  0123456789
                </div>
              </div>
            </Card>

            {/* Secondary Font */}
            <Card className="p-12 border-2" style={{ borderColor: "#F5F5F5" }}>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider" style={{ color: "#FF2F05" }}>
                  SECONDARY
                </span>
                <h3 className="text-2xl font-normal mt-2" style={{ color: "#222222" }}>
                  Source Sans Pro Regular
                </h3>
              </div>
              <div className="space-y-6">
                <div className="font-normal text-4xl" style={{ color: "#222222" }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </div>
                <div className="font-normal text-4xl" style={{ color: "#666666" }}>
                  abcdefghijklmnopqrstuvwxyz
                </div>
                <div className="font-normal text-4xl" style={{ color: "#666666" }}>
                  0123456789
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Usage Examples */}
        <section>
          <h2 className="text-sm font-bold tracking-wider mb-8" style={{ color: "#666666" }}>
            USAGE EXAMPLES
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Button Examples */}
            <Card className="p-8 border-2" style={{ borderColor: "#F5F5F5" }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: "#222222" }}>
                Buttons
              </h3>
              <div className="space-y-4">
                <button
                  className="px-8 py-3 rounded-lg font-bold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: "#FF2F05" }}
                >
                  Primary Button
                </button>
                <button
                  className="px-8 py-3 rounded-lg font-bold transition-transform hover:scale-105"
                  style={{ backgroundColor: "transparent", color: "#FF2F05", border: "2px solid #FF2F05" }}
                >
                  Secondary Button
                </button>
                <button
                  className="px-8 py-3 rounded-lg font-bold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: "#222222" }}
                >
                  Dark Button
                </button>
              </div>
            </Card>

            {/* Typography Examples */}
            <Card className="p-8 border-2" style={{ borderColor: "#F5F5F5" }}>
              <h3 className="text-lg font-bold mb-6" style={{ color: "#222222" }}>
                Typography Scale
              </h3>
              <div className="space-y-3">
                <h1 className="text-5xl font-bold" style={{ color: "#222222" }}>
                  Heading 1
                </h1>
                <h2 className="text-4xl font-bold" style={{ color: "#222222" }}>
                  Heading 2
                </h2>
                <h3 className="text-3xl font-bold" style={{ color: "#222222" }}>
                  Heading 3
                </h3>
                <p className="text-xl" style={{ color: "#666666" }}>
                  Body Large Text
                </p>
                <p className="text-base" style={{ color: "#666666" }}>
                  Body Regular Text
                </p>
                <p className="text-sm" style={{ color: "#666666" }}>
                  Body Small Text
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: "#F5F5F5", backgroundColor: "#F9F9F9" }}>
        <div className="container mx-auto px-6 text-center">
          <KiaraLogo className="justify-center mb-4" />
          <p className="text-sm" style={{ color: "#666666" }}>
            © 2020 Kiara Inc. All rights reserved. | Brand Guidelines 2020
          </p>
        </div>
      </footer>
    </div>
  )
}
