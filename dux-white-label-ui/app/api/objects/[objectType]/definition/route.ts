import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

type Params = {
  objectType: string
}

const VALID_TYPES = ["problem", "behavior", "result", "useroutcome", "flow", "provenance", "insight"]

export async function GET(request: Request, context: { params: Params }) {
  const { objectType } = context.params

  if (!VALID_TYPES.includes(objectType)) {
    return NextResponse.json(
      {
        error: `Object type '${objectType}' not found in canonical vault`,
        valid_types: VALID_TYPES,
      },
      { status: 404 },
    )
  }

  try {
    const filePath = path.join(process.cwd(), "lib", "canonical-vault", `${objectType}.md`)
    const fileContents = await fs.readFile(filePath, "utf8")

    return new Response(fileContents, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown",
      },
    })
  } catch (error) {
    console.error(`Error reading canonical file for ${objectType}:`, error)
    return NextResponse.json({ error: "Could not retrieve canonical definition." }, { status: 500 })
  }
}
