import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Here you would typically use a service like Nodemailer or Resend to send the email.
    // For this example, we'll just simulate a success response.
    console.log(`Received submission: ${name}, ${email}, ${message}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Something went wrong.' }, { status: 500 });
  }
}
