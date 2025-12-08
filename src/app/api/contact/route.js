
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // TODO: Integrate with an email service like SendGrid, Resend, or Nodemailer
        // For now, we'll just log the data to the server console
        console.log("Contact Form Submission:", { name, email, phone, message });

        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
