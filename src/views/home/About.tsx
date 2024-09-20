import Image from "next/image"
import router from "next/router"
import { about } from "@/@core/data/about"
import { theme } from "../theme/theme"
import { Box, Grid, Typography } from "@mui/material"

export default function About() {
    return (
        <Box id="about" sx={{ backgroundColor: theme.palette.background.paper }}>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection={{ xs: "column", sm: "row" }}
                    >
                        <Grid item xs={12} md={6} gap={4} display="flex" flexDirection="column">
                            <Typography variant="h4" textTransform="uppercase" letterSpacing="5px">
                                {about.map((item) => item.title1)}
                            </Typography>
                            <Typography variant="h1" textTransform="uppercase">
                                {about.map((item) => item.name)}
                            </Typography>
                            <Typography variant="body1">
                                {about.map((item) => item.description_01)}
                            </Typography>
                            <Typography variant="h4" textTransform="uppercase" letterSpacing="5px">
                                {about.map((item) => item.title2)}
                            </Typography>
                            <Typography variant="body1">
                                {about.map((item) => item.description_02)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Image
                                src="/assets/img/victor_rubick.png"
                                alt="victor_rubick"
                                width={350}
                                height={350}
                                quality={100}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </Grid>
                    </Grid>
                    <Typography
                        mt={6}
                        mb={4}
                        variant="h5"
                        sx={{ cursor: "pointer" }}
                        onClick={() => router.push("https://www.instagram.com/vfx_rubick/")}
                    >
                        @V F X _ R U B I C K
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}