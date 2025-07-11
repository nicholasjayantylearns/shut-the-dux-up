import type React from "react"

interface Attribute {
  name: string
  type: string
  required?: boolean
}

interface SchemaCardProps {
  title: string
  attributes: Attribute[]
  icon: React.ReactNode
  color: string
}

export function SchemaCard({ title, attributes, icon, color }: SchemaCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
      <div className={`flex items-center gap-4 p-4 border-b ${color}`}>
        {icon}
        <h3 className="font-barlow font-bold text-xl text-gray-800">{title}</h3>
      </div>
      <div className="p-6 space-y-3 flex-grow overflow-y-auto">
        <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider">Schema Attributes</p>
        <ul className="font-monospace text-sm space-y-1.5 text-gray-700">
          {attributes.map((attr) => (
            <li key={attr.name} className="flex justify-between items-center border-b border-gray-100 py-1">
              <span className="flex items-center">
                {attr.name}
                {attr.required && (
                  <span className="text-red-500 ml-1.5" title="Required">
                    *
                  </span>
                )}
              </span>
              <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md text-xs">{attr.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
