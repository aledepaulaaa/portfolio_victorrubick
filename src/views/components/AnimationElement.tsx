import React from "react"
import * as THREE from "three"
import dynamic from "next/dynamic"
import { IObjectWithMaterial } from "@/interfaces/IObjectWithMaterial"
import { TAnimationElementProps } from "@/types/TAnimationElementProps"

const AnimationElement: React.FC<TAnimationElementProps> = ({ type }) => {
    const mountRef = React.useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        if (isMounted && mountRef.current) {
            let scene: THREE.Scene
            let camera: THREE.PerspectiveCamera
            let renderer: THREE.WebGLRenderer
            let currentObject: IObjectWithMaterial
            let animationFrameId: number

            const setup = () => {
                scene = new THREE.Scene()
                camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
                renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

                renderer.setSize(400, 400)
                mountRef.current?.appendChild(renderer.domElement)

                camera.position.z = 3

                currentObject = createObject(type)
                scene.add(currentObject)

                // Adicione iluminação
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
                scene.add(ambientLight)

                const pointLight = new THREE.PointLight(0xffffff, 1, 100)
                pointLight.position.set(10, 10, 10)
                scene.add(pointLight)
            }

            const animate = () => {
                try {
                    if (currentObject) {
                        currentObject.rotation.x += 0.01
                        currentObject.rotation.y += 0.01
                    }
                    renderer.render(scene, camera)
                    animationFrameId = requestAnimationFrame(animate)
                } catch (e) {
                    if (e instanceof Error && e.message.includes('Contexto perdido')) {
                        console.log('Contexto WebGL perdido. Tentando restaurar...')
                        // Tenta recriar o renderizador
                        renderer.dispose()
                        setup()
                    } else {
                        console.error('Ocorreu um erro durante a renderização:', e)
                    }
                }
            }

            setup()
            animate()

            return () => {
                cancelAnimationFrame(animationFrameId)
                if (mountRef.current) {
                    mountRef.current.removeChild(renderer.domElement)
                }
                renderer.dispose()
                if (currentObject) {
                    if (currentObject.geometry) currentObject.geometry.dispose()
                    if (currentObject.material) {
                        if (Array.isArray(currentObject.material)) {
                            currentObject.material.forEach(material => material.dispose())
                        } else {
                            currentObject.material.dispose()
                        }
                    }
                }
            }
        }
    }, [isMounted, type])

    if (!isMounted) return null
    return (
        <div
            ref={mountRef}
            style={{ width: "100%", height: "100%" }}
        />
    )
}

function createObject(type: TAnimationElementProps["type"]): IObjectWithMaterial {
    switch (type) {
        case "particles":
            return createParticles() as IObjectWithMaterial
        case "cube":
            return createCube() as IObjectWithMaterial
        case "sphere":
            return createSphere() as IObjectWithMaterial
        case "torus":
            return createTorus() as IObjectWithMaterial
        case "cone":
            return createCone() as IObjectWithMaterial
        case "cylinder":
            return createCylinder() as IObjectWithMaterial
        case "octahedron":
            return createOctahedron() as IObjectWithMaterial
        default:
            return createCube() as IObjectWithMaterial
    }
}

// Funções que criam os objetos
function createParticles(): IObjectWithMaterial {
    const particles = new THREE.BufferGeometry()
    const particleCount = 5000
    const posArray = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5
    }
    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const material = new THREE.PointsMaterial({ size: 0.005, color: 0x00ffff })
    return new THREE.Points(particles, material) as IObjectWithMaterial
}

function createCube(): IObjectWithMaterial {
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}

function createSphere(): IObjectWithMaterial {
    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}

function createTorus(): IObjectWithMaterial {
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}

function createCone(): IObjectWithMaterial {
    const geometry = new THREE.ConeGeometry(1, 2, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}

function createCylinder(): IObjectWithMaterial {
    const geometry = new THREE.CylinderGeometry(1, 1, 2, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}

function createOctahedron(): IObjectWithMaterial {
    const geometry = new THREE.OctahedronGeometry(1)
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500, wireframe: true })
    return new THREE.Mesh(geometry, material) as IObjectWithMaterial
}
export default dynamic(() => Promise.resolve(AnimationElement), { ssr: false })