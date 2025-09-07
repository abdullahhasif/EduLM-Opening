import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase.from("waitlist").insert([{ name, email }]).select()

    if (error) {
      console.error("[v0] Database error:", error)
      if (error.code === "23505") {
        return NextResponse.json({ error: "Email already registered" }, { status: 400 })
      }
      return NextResponse.json({ error: "Failed to save data" }, { status: 500 })
    }

    console.log(`[v0] Successfully saved to database: ${name} - ${email}`)

    return NextResponse.json(
      {
        message: "Thanks for joining! We'll be in touch soon.",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
