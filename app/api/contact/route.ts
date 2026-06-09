import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "joshiprajwal00@gmail.com",
    replyTo: email,
    subject: `✉️ ${name} reached out — ${subject}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ede8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo / Header -->
          <tr>
            <td style="padding-bottom:24px;" align="center">
              <img
                src="https://res.cloudinary.com/dunyundfq/image/upload/v1749396526/og-image_afuhzs.png"
                alt="Prajwal Joshi"
                width="120"
                style="display:block;border:0;max-width:120px;"
              />
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:12px;border:1px solid #e2ddd7;overflow:hidden;">

              <!-- Top accent line -->
              <div style="height:3px;background:#111111;"></div>

              <!-- Card body -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Title row -->
                <tr>
                  <td style="padding:32px 36px 24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#999;">New message from portfolio</p>
                    <p style="margin:0;font-size:22px;font-weight:700;color:#111;letter-spacing:-0.02em;line-height:1.3;">${subject}</p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr><td style="padding:0 36px;"><div style="height:1px;background:#f0ede8;"></div></td></tr>

                <!-- From -->
                <tr>
                  <td style="padding:20px 36px 0;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;">From</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#111;">${name}</p>
                    <a href="mailto:${email}" style="font-size:13px;color:#777;text-decoration:none;">${email}</a>
                  </td>
                </tr>

                <!-- Date -->
                <tr>
                  <td style="padding:16px 36px 0;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;">Received</p>
                    <p style="margin:0;font-size:13px;color:#555;">${now} IST</p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr><td style="padding:20px 36px 0;"><div style="height:1px;background:#f0ede8;"></div></td></tr>

                <!-- Message -->
                <tr>
                  <td style="padding:20px 36px 0;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;">Message</p>
                    <p style="margin:0;font-size:14px;color:#444;line-height:1.8;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>

                <!-- Reply button -->
                <tr>
                  <td style="padding:28px 36px 36px;">
                    <a href="mailto:${email}?subject=Re: ${subject}"
                      style="display:inline-block;background:#111;color:#fff;font-size:13px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:6px;letter-spacing:-0.01em;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 0 0;" align="center">
              <p style="margin:0;font-size:11px;color:#aaa;">
                Sent via
                <a href="https://joshiprajwal.com.np/contact" style="color:#888;text-decoration:none;">joshiprajwal.com.np</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
