import font from "next/font/local";
import { createTheme } from "@mui/material";
import { Josefin_Sans } from "next/font/google";

const seasons = font({ src: "../../views/fonts/The_Seasons_Regular.ttf" });
const josefinsans = Josefin_Sans({ subsets: ["latin"] });

export const theme = createTheme({
    palette: {
        primary: {
            main: "#585858", // Cinza
        },
        background: {
            default: "#171717", // Preto
            paper: "#DFDFDF", // Branco
        },
    },
    typography: {
        h1: {
            fontFamily: seasons.style.fontFamily,
            fontSize: "2.5rem",
            fontWeight: 600,
        },
        h2: {
            fontFamily: seasons.style.fontFamily,
            fontSize: "2rem",
        },
        h3: {
            fontFamily: seasons.style.fontFamily,
            fontSize: "1.5rem",
        },
        h4: {
            fontFamily: josefinsans.style.fontFamily,
            fontSize: "1.25rem",
            fontWeight: 600,
        },
        h5: {
            fontFamily: josefinsans.style.fontFamily,
            fontSize: "1rem",
            fontWeight: 600,
        },
        h6: {
            fontFamily: josefinsans.style.fontFamily,
            fontSize: "0.875rem",
            fontWeight: 600,
        },
        body1: {
            fontFamily: josefinsans.style.fontFamily,
            fontSize: "1.4rem",
            fontWeight: 300,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#DFDFDF", // Definindo uma cor clara para a borda
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#A9A9A9", // Cor da borda ao passar o mouse
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#585858", // Cor da borda ao focar no campo
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: "white",  // Garanta que o texto do input seja branco
                    "&::placeholder": {
                        color: "#A9A9A9",  // Placeholder cinza claro
                    },
                },
                // Isso garante que o textarea também tenha o texto branco
                multiline: {
                    color: "white",
                },
            },
        },
    },
})

// Estilos comuns para todos os TextField
export const commonStyles = {
    mb: 2,
    input: { color: "white" },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "lightgray" },
    "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "white" }
}
