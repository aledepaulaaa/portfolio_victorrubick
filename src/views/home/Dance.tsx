import { dance } from "@/@core/data/dance"
import { theme } from "../theme/theme"
import { Box, Grid, Typography } from "@mui/material"

export default function Dance() {
    return (
        <Box id="dance" sx={{ backgroundColor: theme.palette.background.default }}>
            <Grid container spacing={2} mb={2}>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection={{ xs: "column", sm: "row" }}
                >
                    <Grid item xs={12} md={6}>
                        {/*  imagem vai ficar aqui */}
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h4" mb={4} textTransform="uppercase" color={theme.palette.background.paper}>
                            {dance.map((item) => item.title)}
                        </Typography>
                        <Typography color={theme.palette.background.paper}>
                            {dance.map((item) => item.description)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}