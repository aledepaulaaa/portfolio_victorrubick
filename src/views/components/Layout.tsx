import Header from "./Header"
import Footer from "./Footer"
import { Box } from "@mui/material"
import { ILayout } from "@/interfaces/ILayout"
import { theme } from "../theme/theme"

export default function Layout({ children }: ILayout) {

    return (
        <Box
            display="flex"
            flexDirection="column"
            overflow="hidden"
            bgcolor={theme.palette.background.default}
            minHeight="100vh"
        >
            <Header />
            <Box component="main" flexGrow={1}>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}