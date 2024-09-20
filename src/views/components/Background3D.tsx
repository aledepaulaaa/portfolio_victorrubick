import { IBackground3DProps } from "@/interfaces/IBackground3DProps"
import dynamic from "next/dynamic"
import React, { useRef } from "react"
import * as THREE from "three"

const Background3D: React.FC<IBackground3DProps> = ({ textureUrl }) => {
    const mountRef = useRef<HTMLDivElement>(null)
    
    React.useEffect(() => {
        if (!mountRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        const setupRenderer = () => {
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setClearColor(0x000000, 0) // Torna o fundo transparente
            mountRef.current?.appendChild(renderer.domElement)
        }

        setupRenderer()

        const geometry = new THREE.SphereGeometry(5, 64, 64)
        const textureLoader = new THREE.TextureLoader()
        const texture = textureLoader.load(textureUrl)
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            opacity: 1,
            metalness: 0.2,
            roughness: 0.1
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Iluminação melhorada
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        const light1 = new THREE.PointLight(0xffffff, 15, 100)
        light1.position.set(10, 10, 10)
        scene.add(light1)

        const light2 = new THREE.PointLight(0xffffff, 15, 100)
        light2.position.set(-10, -10, -10)
        scene.add(light2)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.set(0, 1, 0)
        scene.add(directionalLight)

        camera.position.z = 10

        const animate = () => {
            try {
                mesh.rotation.x += 0.005
                mesh.rotation.y += 0.005
                renderer.render(scene, camera)
            } catch (e) {
                if (e instanceof Error && e.message.includes('Contexto perdido')) {
                    console.log('Contexto WebGL perdido. Tentando restaurar...')
                    // Tenta recriar o renderizador
                    renderer.dispose()
                    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
                    setupRenderer()
                } else {
                    console.error('Ocorreu um erro durante a renderização:', e)
                }
            }
            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
            mountRef.current?.removeChild(renderer.domElement)
        }
    }, [textureUrl])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                // top: 0,
                // left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Permite que os eventos passem através do canvas
            }}
        />
    )
}

export default dynamic(() => Promise.resolve(Background3D), { ssr: false })