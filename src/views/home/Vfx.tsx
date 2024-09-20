import { vfx } from "@/@core/data/vfx"
import { theme } from "../theme/theme"
import React from "react"
import GroupCircles_01 from "../components/assets/GroupCircles_01"
import { Grid, Typography, Box, Divider } from "@mui/material"
import dynamic from "next/dynamic"
import { TAnimationElementProps } from "@/types/TAnimationElementProps"

const AnimationElement = dynamic(() => import('../components/AnimationElement'), {
    ssr: false,
    loading: () => <p>Carregando...</p>
})

const FerramentasDeUso = dynamic(() => import('../components/FerramentasDeUso'), {
    ssr: false,
    loading: () => <p>Carregando...</p>
})

const circleRotativeAnimation = `
      @keyframes spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
          .spin {
              animation: spin 3s linear infinite;
          }
      }`

export default function Vfx() {
    const [mousePassou, setMousePassou] = React.useState(false)
    const [currentType, setCurrentType] = React.useState<TAnimationElementProps['type']>('particles')

    React.useEffect(() => {
        const types: TAnimationElementProps['type'][] = ["particles", "cube", "sphere", "torus", "cone", "cylinder", "octahedron"]
        const intervalId = setInterval(() => {
            setCurrentType(prevType => {
                const nextIndex = (types.indexOf(prevType) + 1) % types.length
                return types[nextIndex]
            })
        }, 3000)

        return () => clearInterval(intervalId)
    }, [])

    const handleMousePassando = () => setMousePassou(!mousePassou)

    React.useEffect(() => {
        window.addEventListener("touchastart", handleMousePassando)
        return () => window.removeEventListener("touchastart", handleMousePassando)
    }, [handleMousePassando])

    return (
        <Box id="vfx" sx={{ backgroundColor: theme.palette.background.default, mb: 4 }}>
            <style>{circleRotativeAnimation}</style>
            <Divider
                onMouseEnter={handleMousePassando}
                onMouseLeave={handleMousePassando}
                onTouchStart={handleMousePassando}
                sx={{
                    backgroundColor: mousePassou ? theme.palette.background.default : theme.palette.background.paper,
                    backgroundImage: mousePassou ? "url('/assets/svg/FORMAS_VFX_02.svg')" : "url('/assets/svg/FORMAS_VFX.svg')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "repeat-x",
                    animation: "horizontallinear 5s linear infinite",
                    border: "none",
                    height: "250px",
                    cursor: "crosshair",
                    transition: "0.3s",
                    // transform: mousePassou ? "scale(1.1) rotate(5deg)" : "scale(1)", // Apply transform on hover
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection={{ xs: "column", sm: "row" }}
                    >
                        <Grid item xs={12} md={5} mt={4}>
                            <Typography variant="h4" textTransform="uppercase" color={theme.palette.background.paper}>
                                {vfx.map((item) => item.title_01)}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.background.paper}>
                                {vfx.map((item) => item.description_01)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} mt={4} display="flex" justifyContent="center">
                            <GroupCircles_01 />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection={{ xs: "column", sm: "row" }}
                    >
                        <Grid item xs={12} md={5} mt={4}>
                            <AnimationElement type={currentType} />
                        </Grid>
                        <Grid item xs={12} md={6} mt={4}>
                            <Typography
                                variant="h4"
                                textTransform="uppercase"
                                color={theme.palette.background.paper}
                                mb={4}
                            >
                                {vfx.map((item) => item.title_02)}
                            </Typography>
                            <Typography variant="body1" color={theme.palette.background.paper}>
                                {vfx.map((item) => item.description_02)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        mt={8}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography variant="h4" textTransform="uppercase" color={theme.palette.background.paper}>
                            To develop my VFX projects, I work with the following tools
                        </Typography>
                        <Box width="100%">
                            <FerramentasDeUso />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}