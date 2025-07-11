import { SchemaCard } from "@/components/cards/schema-card"
import { schemaDefinitions } from "@/data/schema-definitions"

export default function SchemaCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 font-barlow">DUX Object Schema</h1>
          <p className="text-lg text-gray-600 font-sansBody mt-2">
            A schematic view of each DUX object, displaying its attributes without content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {schemaDefinitions.map((def) => (
            <SchemaCard
              key={def.title}
              title={def.title}
              attributes={def.attributes}
              icon={def.icon}
              color={def.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
