import { Grid } from "@mui/material"
import PortfolioTextSvg from "../components/assets/PortfolioTextSvg"

export default function HeroPrincipal() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <PortfolioTextSvg />
            </Grid>
        </Grid>
    )
}