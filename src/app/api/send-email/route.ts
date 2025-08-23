import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

function EmailTemplate({ name, email, message }: { name: string; email: string; message: string }) {
  return React.createElement(
    'div',
    { style: { fontFamily: 'Inter, Arial, sans-serif', color: '#222', padding: 24 } },
    React.createElement('h2', { style: { marginBottom: 12 } }, 'New Website Inquiry'),
    React.createElement('p', null, React.createElement('strong', null, 'Name:'), ` ${name}`),
    React.createElement('p', null, React.createElement('strong', null, 'Email:'), ` ${email}`),
    React.createElement('p', null, React.createElement('strong', null, 'Message:')),
    React.createElement('div', { style: { background: '#f5f5f5', padding: 12, borderRadius: 8 } }, message)
  );
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const data = await resend.emails.send({
      to: 'contact@raytechnica.work',
      from: 'RayTechnica <contact@raytechnica.work>',
      subject: `New Message from ${name}`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });
    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
