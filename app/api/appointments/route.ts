import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body ?? {};

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection("appointments");
    const doc = {
      name,
      email,
      subject: subject || null,
      phone: phone || null,
      message: message || null,
      createdAt: new Date(),
      status: "new",
      source: "website",
    } as const;

    const result = await collection.insertOne(doc as any);

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("POST /api/appointments error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


