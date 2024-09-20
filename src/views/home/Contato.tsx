import { Grid, Typography } from "@mui/material"
import FormularioContato from "../components/FormularioContato"
import { theme } from "../theme/theme"
import ContatoItems from "../components/ContatoItems"

export default function Contato() {
    return (
        <Grid id="contato" container spacing={2}>
            <Grid
                item
                xs={12}
                mb={4}
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography
                    variant="h4"
                    mb={4}
                    textTransform="uppercase"
                    color={theme.palette.background.paper}
                >
                    Contact
                </Typography>
                <Grid
                    item
                    xs={12}
                    gap={8}
                    display="flex"
                    justifyContent="center"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems="center"
                >
                    <Grid
                        item
                        md={4}
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Typography variant="h4" textTransform="uppercase" color={theme.palette.background.paper}>
                            Send your contact
                        </Typography>
                        <Typography variant="body1" mt={2} color={theme.palette.background.paper}>
                            You can detail your ideas, ask questions and suggest anything you need for your project.
                            I will be attentive to emails and will get back to you as soon as possible.
                        </Typography>
                        <ContatoItems />
                    </Grid>
                    <Grid item xs={12} md={5} mr={1}>
                        <FormularioContato />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}