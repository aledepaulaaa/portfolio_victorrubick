import { ThemeContextProvider } from "@/context/ThemeContext"
import Layout from "@/views/components/Layout"
import { theme } from "@/views/theme/theme"
import { ThemeProvider } from "@mui/material"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <ThemeContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContextProvider>
        </ThemeProvider>
    )
}
