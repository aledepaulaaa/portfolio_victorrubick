import * as THREE from "three"

export interface IObjectWithMaterial extends THREE.Object3D {
    material: THREE.Material | THREE.Material[]
    geometry: THREE.BufferGeometry
}