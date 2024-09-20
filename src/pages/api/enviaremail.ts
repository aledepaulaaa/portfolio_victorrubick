import nodemailer from "nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

const USER_EMAIL = process.env.USER_EMAIL
const USER_PASS = process.env.USER_PASS

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, nome, telefone, mensagem } = req.body

        console.log("Dados do formulário:", { email, nome, telefone, mensagem })

        const transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: USER_EMAIL,
                pass: USER_PASS,
            },
        })

        try {
            const enviarEmail = {
                from: "contato@alexandredesenvolvedor.com",
                to: "contato@alexandredesenvolvedor.com",
                subject: `Novo Contato de ${nome}`,
                text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
            }

            const info = await transporter.sendMail(enviarEmail)
            console.log("Email enviado:", info.response)
            res.status(200).json({ success: true, message: "Email enviado com sucesso" })
        } catch (error) {
            console.error("Erro ao enviar e-mail:", error)
            res.status(500).json({ success: false, message: "Erro ao enviar e-mail, tente novamente" })
        }
    } else {
        res.status(405).json({ success: false, message: 'Método não permitido' })
    }
}