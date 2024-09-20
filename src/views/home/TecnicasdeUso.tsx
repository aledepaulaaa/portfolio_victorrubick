import { theme } from "../theme/theme"
import dynamic from "next/dynamic"
import { tecnicasdeuso } from "@/@core/data/tecnicasdeuso"
import { Box, Grid, Typography } from "@mui/material"
import texture from "../../../public/assets/img/texture.jpg"

const Background3D = dynamic(() => import("../components/Background3D"), {
    ssr: false,
    loading: () => <p>Carregando...</p>,
})

export default function TecnicasdeUso() {
    return (
        <Box
            id="tecnica"
            sx={{
                position: "relative",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Background3D textureUrl={texture.src} />
            <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        gap={4}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        sx={{ p: 4 }} // Adiciona algum padding para melhorar a legibilidade
                    >
                        <Typography variant="h4" textTransform="uppercase" color={theme.palette.background.paper}>
                            Techniques I use to work
                        </Typography>
                        {tecnicasdeuso.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <Typography variant="h6" textTransform="uppercase" color={theme.palette.background.paper}>
                                    {item.title}
                                </Typography>
                                <Grid item xs={12} md={6} gap={4} display="flex" flexDirection="column">
                                    <Typography variant="body1" color={theme.palette.background.paper}>
                                        {item.description}
                                    </Typography>
                                </Grid>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}