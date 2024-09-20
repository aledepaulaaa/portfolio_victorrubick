import React from "react"
import { valoresIniciais, IFormularioContato } from "@/interfaces/IFormularioContato"

export default function useFormularioContato() {
    const [emaildata, setEmailData] = React.useState<IFormularioContato>(valoresIniciais)
    const [success, setSuccess] = React.useState<string | null>(null)
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleSendEmail = async () => {
        if (!emaildata.nome || !emaildata.email || !emaildata.telefone || !emaildata.mensagem) {
            setError("Por favor, preencha todos os campos obrigatórios.")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/enviaremail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(emaildata),
            })

            const data = await response.json()

            if (response.ok) {
                console.log("Email enviado com sucesso!")
                setSuccess("Email enviado com sucesso!")
                setEmailData(valoresIniciais)
            } else {
                console.log("Erro ao enviar o email:", data.message)
                setError(data.message || "Erro ao enviar o email, tente novamente")
            }
        } catch (error) {
            setError("Erro ao enviar e-mail, tente novamente.")
            console.error("Erro ao enviar e-mail, tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return {
        emaildata,
        success,
        error,
        loading,
        setEmailData,
        handleSendEmail
    }
}