export interface IFormularioContato {
    nome: string
    email: string
    telefone: string
    mensagem: string
}

export const valoresIniciais: IFormularioContato = {
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
}