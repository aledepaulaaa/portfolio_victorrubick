import React from "react"
import { motion } from "framer-motion"
import { theme } from "../theme/theme"

interface ExplosionEffectProps {
    isActive: boolean
    onAnimationComplete: () => void
}

const ExplosionEffect: React.FC<ExplosionEffectProps> = ({ isActive, onAnimationComplete }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isActive ? { scale: 30, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "10vmin",
                height: "10vmin",
                borderRadius: "50%",
                backgroundColor: theme.palette.background.paper,
                zIndex: 9999,
                pointerEvents: "none",
            }}
            onAnimationComplete={() => {
                if (isActive) {
                    onAnimationComplete()
                }
            }}
        />
    )
}

export default ExplosionEffect