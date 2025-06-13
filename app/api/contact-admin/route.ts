    import type { NextApiRequest, NextApiResponse } from 'next';
    import nodemailer  from "nodemailer";

    type Data = {
    message: string;
    };

    export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, reason, message } = req.body;

    if (!name || !email || !reason || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        await transporter.sendMail({
        from: `"Pointly Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: `New Contact Message: ${reason}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Reason:</strong> ${reason}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
        });

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ message: 'Failed to send message' });
    }
    }
