import { ExperienceOperationsCenter } from "@/components/xoc"
import * as Data from "@/data/xoc-placeholder-data" // <-- Updated to use placeholder data

export default function XOCPage() {
  return (
    <div className="min-h-screen bg-bg-primary p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-primary font-barlow">Experience Operations Center</h1>
          <p className="text-lg text-text-secondary font-sansBody mt-2">
            A live, operational dashboard visualizing the entire DUX flow from Problem to Outcome.
          </p>
        </div>
        <ExperienceOperationsCenter {...Data} />
      </div>
    </div>
  )
}
