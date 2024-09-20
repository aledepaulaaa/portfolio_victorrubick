import { Grid } from "@mui/material"
import Vfx from "@/views/home/Vfx"
import About from "@/views/home/About"
import Dance from "@/views/home/Dance"
import HeroPrincipal from "@/views/home/HeroPrincipal"
import TecnicasdeUso from "@/views/home/TecnicasdeUso"
import Contato from "@/views/home/Contato"

export default function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <HeroPrincipal />
                <About />
                <Dance />
                <Vfx />
                <TecnicasdeUso />
                <Contato />
            </Grid>
        </Grid>
    )
}