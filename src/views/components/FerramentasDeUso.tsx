import React, { useRef, useEffect, useState } from 'react'
import styles from "../components/ferramentas.module.css"

// Imagens
import photoshopImg from "../../../public/assets/img/photoshop.png"
import blenderImg from "../../../public/assets/img/blender.png"
import afterEffectsImg from "../../../public/assets/img/after_effects.png"
import cinema4dImg from "../../../public/assets/img/cinema4d.png"
import premiereImg from "../../../public/assets/img/premiere.png"
import { IFerramenta } from '@/interfaces/IFerramenta'

const ferramentas: IFerramenta[] = [
    { nome: 'Photoshop', imagem: photoshopImg.src },
    { nome: 'After Effects', imagem: afterEffectsImg.src },
    { nome: 'Blender', imagem: blenderImg.src },
    { nome: 'Cinema 4D', imagem: cinema4dImg.src },
    { nome: 'Premiere Pro', imagem: premiereImg.src },
]

const FerramentasDeUso: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [draggedItem, setDraggedItem] = useState<HTMLElement | null>(null)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let animationId: number

        const rotateItems = () => {
            setAngle(prevAngle => prevAngle + 0.010)
            animationId = requestAnimationFrame(rotateItems)
        }

        rotateItems()

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [])

    useEffect(() => {
        const items = containerRef.current?.getElementsByClassName(styles.item)
        if (!items) return

        for (let i = 0; i < items.length; i++) {
            const item = items[i] as HTMLElement
            const itemAngle = angle + (i / items.length) * Math.PI * 2
            const radius = 200

            const x = Math.cos(itemAngle) * radius
            const z = Math.sin(itemAngle) * radius

            if (item !== draggedItem) {
                item.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${itemAngle}rad)`
            }
        }
    }, [angle, draggedItem])

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const item = e.currentTarget as HTMLElement
        setIsDragging(true)
        setDraggedItem(item)
        const rect = item.getBoundingClientRect()
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !draggedItem) return

        const x = e.clientX - dragOffset.x
        const y = e.clientY - dragOffset.y
        draggedItem.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${angle}rad)`
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        setDraggedItem(null)
    }

    return (
        <div className={styles.scene} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <div className={styles.container} ref={containerRef}>
                {ferramentas.map((ferramenta, index) => (
                    <div key={ferramenta.nome} className={styles.item} onMouseDown={handleMouseDown}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                        <div className={`${styles.face} ${styles.top}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                        <div className={`${styles.face} ${styles.bottom}`}>
                            <img src={ferramenta.imagem} alt={ferramenta.nome} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FerramentasDeUso