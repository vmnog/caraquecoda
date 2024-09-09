import { JoinMentorshipEmail } from '@/components/emails/email-join-mentorship';
import { Resend } from 'resend';

const resendApiKey = process.env.NODE_ENV === 'development' ? process.env.RESEND_API_KEY_DEV : process.env.RESEND_API_KEY_PROD

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to } = body;

    if (!to) {
      return new Response('Email address is required', { status: 400 });
    }

    console.info({ to })

    const from = process.env.NODE_ENV === 'development' ? 'onboarding@resend.dev' : 'not-reply@caraquecoda.com.br'

    const response = await resend.emails.send({
      from: `Victor Nogueira | @caraquecoda <${from}>`,
      to,
      subject: 'Inscrição Mentoria @caraquecoda | Bem-vindo!',
      react: JoinMentorshipEmail({ email: to }),
    });

    if (response.error) {
      console.error(response.error?.message)
    }

    return new Response('Email sent successfully!', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}
