import type React from "react"
import Link from "next/link"
import { Library, Lightbulb, ArrowRight, GitMerge, Navigation, PenSquare, ClipboardList } from "lucide-react" // Removed GalleryHorizontal

const FeatureLink = ({
  href,
  icon,
  title,
  description,
  color,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: { bg: string; text: string }
}) => (
  <Link href={href} className="block group">
    <div className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-5">
        <div className={`p-3 rounded-lg ${color.bg}`}>{icon}</div>
        <div className="flex-1">
          <h3 className={`font-barlow text-xl font-bold ${color.text}`}>{title}</h3>
          <p className="font-sansBody text-gray-600 mt-1 pr-8">{description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  </Link>
)

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 font-barlow tracking-tight mb-3">DUX Framework</h1>
          <p className="text-xl text-gray-600 font-sansBody max-w-2xl mx-auto">
            An integrated system for evidence-driven product design, from component library to insight synthesis.
          </p>
        </div>

        <div className="space-y-6">
          <FeatureLink
            href="/xoc"
            icon={<Navigation className="w-6 h-6 text-teal-600" />}
            title="Experience Operations Center (XOC)"
            description="A live, operational dashboard visualizing the entire DUX flow from Problem to Outcome."
            color={{ bg: "bg-teal-100", text: "text-teal-900" }}
          />
          <FeatureLink
            href="/journey-map-v2"
            icon={<GitMerge className="w-6 h-6 text-green-600" />}
            title="Finalist Journey Maps"
            description="A final comparison between the 'Clarity' and 'Monospace Data' concepts for the journey map."
            color={{ bg: "bg-green-100", text: "text-green-900" }}
          />
          <FeatureLink
            href="/showcase"
            icon={<Library className="w-6 h-6 text-blue-600" />}
            title="Component Library"
            description="Browse the DUX object component library, featuring 'Clarity' and 'Monospace' design concepts."
            color={{ bg: "bg-blue-100", text: "text-blue-900" }}
          />
          <FeatureLink
            href="/schema-cards"
            icon={<ClipboardList className="w-6 h-6 text-indigo-600" />}
            title="DUX Schema Viewer"
            description="A schematic view of each DUX object, displaying its attributes without content."
            color={{ bg: "bg-indigo-100", text: "text-indigo-900" }}
          />
          <FeatureLink
            href="/insights" // Updated href
            icon={<Lightbulb className="w-6 h-6 text-purple-600" />}
            title="Insight Synthesizer" // Unified title
            description="An immersive, carousel-based view for reviewing and refining Insight Chains with evidence and filters." // Unified description
            color={{ bg: "bg-purple-100", text: "text-purple-900" }}
          />
          <FeatureLink
            href="/insights-v2"
            icon={<PenSquare className="w-6 h-6 text-amber-600" />}
            title="Insight Synthesizer V2"
            description="A 'Researcher's Desk' concept for synthesizing insights with a tactile, artifact-based feel."
            color={{ bg: "bg-amber-100", text: "text-amber-900" }}
          />
          {/* Removed the old "Evidence Tunnel" link */}
        </div>
      </div>
    </div>
  )
}
