import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Backend Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Save submission locally to data/submissions.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "submissions.json");

    // Ensure directory exists
    await fs.mkdir(dataDir, { recursive: true });

    let submissions = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      submissions = JSON.parse(fileData);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    const newSubmission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "Not provided",
      subject: subject || "General Inquiry",
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");



    return NextResponse.json({ success: true, message: "Submission saved successfully." });
  } catch (error) {
    console.error("Contact Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
