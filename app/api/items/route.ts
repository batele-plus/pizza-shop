import { type NextRequest, NextResponse } from "next/server"
import { getPizzaItems } from "@/lib/api/pizza-items"
import { itemsQuerySchema } from "@/lib/validations/api"
import { ZodError } from "zod"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Convert URLSearchParams to object for Zod validation
    const queryParams = Object.fromEntries(searchParams.entries())

    // Validate query parameters with Zod
    const validatedQuery = itemsQuerySchema.parse(queryParams)

    // Fetch items from database
    const result = await getPizzaItems(validatedQuery)

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    })
  } catch (error) {
    console.error("Error in /api/items:", error)

    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation Error",
          message: "Invalid query parameters",
          details: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to fetch pizza items",
      },
      { status: 500 },
    )
  }
}

export async function POST() {
  return NextResponse.json(
    {
      error: "Method Not Allowed",
      message: "POST method is not supported for this endpoint",
    },
    { status: 405 },
  )
}

export async function PUT() {
  return NextResponse.json(
    {
      error: "Method Not Allowed",
      message: "PUT method is not supported for this endpoint",
    },
    { status: 405 },
  )
}

export async function DELETE() {
  return NextResponse.json(
    {
      error: "Method Not Allowed",
      message: "DELETE method is not supported for this endpoint",
    },
    { status: 405 },
  )
}
