"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function Step({ number, title, description, position }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, 0.7, 0.15]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#10b981" />
        <Text position={[0, 0, 0.1]} fontSize={0.3} color="#ffffff">
          {number}
        </Text>
      </mesh>

      <Text position={[0, 0.2, 0.15]} fontSize={0.2} color="#111827" maxWidth={1.8} textAlign="center">
        {title}
      </Text>

      <Text position={[0, -0.3, 0.15]} fontSize={0.12} color="#4b5563" maxWidth={1.8} textAlign="center">
        {description}
      </Text>
    </group>
  )
}

export default function HowItWorks3D() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
        </motion.div>

        <motion.div
          className="mt-12 h-[500px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <Float floatIntensity={1} rotationIntensity={0.5}>
              <Step
                number="1"
                title="Browse profiles"
                description="See real photos, jobs, reviews, and vibes."
                position={[-3, 0, 0]}
              />

              <Step
                number="2"
                title="Message directly"
                description="No middlemen. Just WhatsApp or text."
                position={[0, 0, 0]}
              />

              <Step
                number="3"
                title="Get it sorted"
                description="Done fast, done right, by a Human — not a form."
                position={[3, 0, 0]}
              />
            </Float>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
