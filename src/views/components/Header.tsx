import React, { useState } from "react"
import router from "next/router"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import ExplosionEffect from "./ExplosionEffect"
import { menuItems } from "@/interfaces/IMenuItem"
import { motion, AnimatePresence } from "framer-motion"
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme, Grid } from "@mui/material"

export default function Header() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [mobileOpen, setMobileOpen] = useState(false)
    const [explosionActive, setExplosionActive] = useState(false)
    const [targetRoute, setTargetRoute] = useState("")

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleMenuItemClick = (route: string) => {
        setExplosionActive(true)
        setTargetRoute(route)
        setMobileOpen(false)
    }

    const handleExplosionComplete = () => {
        setExplosionActive(false)
        router.push(targetRoute)
        setMobileOpen(false)
    }

    const drawer = (
        <AnimatePresence>
            {mobileOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        width: "100vw",
                        height: "100vh",
                        background: theme.palette.background.paper,
                        position: "relative"
                    }}
                >
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: theme.palette.text.primary
                        }}
                    >
                        <CloseIcon
                            sx={{
                                cursor: "pointer",
                                zIndex: 5,
                                height: 50,
                                width: 50,
                            }}
                        />
                    </IconButton>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.title}
                                    onClick={() => handleMenuItemClick(`/#${item.id}`)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" color={theme.palette.background.paper} component="div" sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon
                                    sx={{
                                        cursor: "pointer",
                                        height: 50,
                                        width: 50,
                                        color: theme.palette.background.paper,
                                    }}
                                />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </>
                    ) : (
                        <Grid item xs={12} display="flex" justifyContent="space-around">
                            {menuItems.map((item, index) => (
                                <Button
                                    onClick={() => handleMenuItemClick(`/#${item.id}`)}
                                    key={index}
                                    sx={{
                                        color: theme.palette.background.paper,
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                    component={motion.button}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
            <ExplosionEffect isActive={explosionActive} onAnimationComplete={handleExplosionComplete} />
        </>
    )
}