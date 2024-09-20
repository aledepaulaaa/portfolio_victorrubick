import { commonStyles } from "../theme/theme"
import useFormularioContato from "@/@core/hooks/useFormularioContato"
import { Alert, Button, CircularProgress, FormControl, Grid, TextField } from "@mui/material"

export default function FormularioContato() {
    const { emaildata, setEmailData, success, error, loading, handleSendEmail } = useFormularioContato();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FormControl fullWidth sx={{ gap: 4 }}>
                    <TextField
                        sx={commonStyles}
                        label="Nome"
                        variant="outlined"
                        placeholder="Seu nome"
                        value={emaildata.nome}
                        onChange={(event) => setEmailData({ ...emaildata, nome: event.target.value })}
                    />
                    <TextField
                        sx={commonStyles}
                        label="Telefone"
                        variant="outlined"
                        placeholder="Telefone"
                        value={emaildata.telefone}
                        onChange={(event) => setEmailData({ ...emaildata, telefone: event.target.value })}
                    />
                    <TextField
                        sx={commonStyles}
                        label="Email"
                        variant="outlined"
                        placeholder="Seu email"
                        value={emaildata.email}
                        onChange={(event) => setEmailData({ ...emaildata, email: event.target.value })}
                    />
                    <TextField
                        sx={commonStyles}
                        label="Mensagem"
                        placeholder="Digite sua ideia..."
                        variant="outlined"
                        multiline
                        rows={4}
                        value={emaildata.mensagem}
                        onChange={(event) => setEmailData({ ...emaildata, mensagem: event.target.value })}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendEmail}
                        disabled={loading}
                        fullWidth
                        sx={{ p: 2, color: "white" }} // Cor do texto do botão
                    >
                        {loading ? <CircularProgress /> : "Send"}
                    </Button>
                </FormControl>
                {success ? (
                    <Grid item xs={12} mt={2} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                        <Alert severity="success">{success}</Alert>
                    </Grid>
                ) : (
                    <Grid item xs={12} mt={2} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                        {error && <Alert severity="error">{error}</Alert>}
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}
