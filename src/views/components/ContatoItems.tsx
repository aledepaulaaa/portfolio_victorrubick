import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { IFerramenta } from "@/interfaces/IFerramenta"

// Imagens
import call from "../../../public/assets/svg/call.svg"
import phone from "../../../public/assets/svg/phone.svg"
import chat from "../../../public/assets/svg/chat.svg"
import mail from "../../../public/assets/svg/mail.svg"
import { TextureLoader } from "three"
import dynamic from "next/dynamic"

const icones: IFerramenta[] = [
    { nome: "Mensagem", imagem: mail.src },
    { nome: "Ligar", imagem: call.src },
    { nome: "Chat", imagem: chat.src },
    { nome: "Telefone", imagem: phone.src },
]

const Cube: React.FC<{ position: [number, number, number], texture: THREE.Texture }> = ({ position, texture }) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = React.useState(false)
    const [clicked, setClick] = React.useState(false)

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2
        mesh.current.rotation.y += delta * 0.2
    })

    return (
        <mesh
            position={position}
            ref={mesh}
            scale={clicked ? 1.5 : 1}
            onClick={() => setClick(!clicked)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            {[...Array(6)].map((_, index) => (
                <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
            ))}
        </mesh>
    )
}

const ContatoItems: React.FC = () => {
    const [textures, setTextures] = React.useState<THREE.Texture[]>([])

    React.useEffect(() => {
        const loader = new TextureLoader()
        const loadedTextures = icones.map(icon => loader.load(icon.imagem))
        setTextures(loadedTextures)
    }, [])

    return (
        <div style={{ width: "100%", height: "400px" }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                {textures.map((texture, index) => {
                    const angle = (index / icones.length) * Math.PI * 2
                    const radius = 2
                    const x = Math.cos(angle) * radius
                    const z = Math.sin(angle) * radius
                    return <Cube key={index} position={[x, 0, z]} texture={texture} />
                })}
            </Canvas>
        </div>
    )
}

export default dynamic(() => Promise.resolve(ContatoItems), { ssr: false })