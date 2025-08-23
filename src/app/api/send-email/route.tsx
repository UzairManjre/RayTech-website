// app/api/send-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// IMPROVEMENT: Rewritten with JSX for better readability
const EmailTemplate = ({ name, email, message }: { name: string; email: string; message: string }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
    <h2 style={{ marginBottom: '15px' }}>New Website Inquiry from {name}</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
      {message}
    </div>
  </div>
);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Destructure both data and error from the response
    const { data, error } = await resend.emails.send({
      to: 'contact@raytechnica.work',
      // IMPROVEMENT: Use a dedicated 'noreply' address for sending
      from: 'RayTechnica <noreply@raytechnica.work>',
      subject: `New Message from ${name}`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });

    // FIX: Check the top-level 'error' object directly, not 'data.error'
    if (error) {
      console.error('Resend Error:', error); // Log the error for debugging on Vercel
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Server Error:', error); // Log unexpected server errors
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}