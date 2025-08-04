import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Failed to send email" });
    }
  }

  return res.status(405).json({ success: false, message: "Method Not Allowed" });
}
