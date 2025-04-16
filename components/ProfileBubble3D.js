"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useSpring, animated } from "@react-spring/three"
import { Html, Environment, ContactShadows } from "@react-three/drei"
import Image from "next/image"

function ProfileSphere({ image, name, trade, onClick }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const props = useSpring({
    scale: hovered ? 1.1 : 1,
    rotation: hovered ? [0, Math.PI * 0.25, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  })

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <animated.group
      ref={meshRef}
      scale={props.scale}
      rotation={props.rotation}
      onClick={() => {
        setClicked(!clicked)
        onClick && onClick()
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#10b981" metalness={0.2} roughness={0.8} />
      </mesh>

      <Html position={[0, 0, 1.01]} transform occlude distanceFactor={1.5} className="pointer-events-none">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <div className="relative w-full h-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill sizes="80px" className="object-cover" />
          </div>
        </div>
      </Html>

      <Html position={[0, -1.5, 0]} transform occlude className="pointer-events-none">
        <div className="text-center bg-white bg-opacity-80 px-2 py-1 rounded-md">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-emerald-600">{trade}</p>
        </div>
      </Html>
    </animated.group>
  )
}

export default function ProfileBubble3D({ name, trade, image, onClick }) {
  return (
    <div className="h-40 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <ProfileSphere image={image} name={name} trade={trade} onClick={onClick} />
        <Environment preset="city" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2} far={5} />
      </Canvas>
    </div>
  )
}
