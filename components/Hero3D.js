"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function Tool({ position, color, scale = 1, hovered }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      if (hovered) {
        ref.current.rotation.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      }
    }
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Hammer({ position, scale, hovered }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      if (hovered) {
        ref.current.rotation.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      }
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Handle */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Hammer head */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.8]} />
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>
    </group>
  )
}

function Wrench({ position, scale, hovered }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      if (hovered) {
        ref.current.rotation.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      }
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Handle */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.2, 1, 0.1]} />
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>
    </group>
  )
}

function Screwdriver({ position, scale, hovered }) {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      if (hovered) {
        ref.current.rotation.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      }
    }
  })

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Handle */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
        <meshStandardMaterial color="#FF0000" />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
    </group>
  )
}

function Scene({ isHovered }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Float floatIntensity={2} rotationIntensity={1}>
        <Hammer position={[-1.5, 0, 0]} scale={1} hovered={isHovered} />
        <Wrench position={[1.5, 0, 0]} scale={1} hovered={isHovered} />
        <Screwdriver position={[0, 0, 1]} scale={1} hovered={isHovered} />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export default function Hero3D({ toggleModal }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hire real people. <br />
              <span className="text-emerald-500">With real skills.</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Painters. Plumbers. Flatpack masters. Garden whisperers.
              <br />
              Handy Humans are trusted locals you can actually talk to.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full bg-emerald-600 text-white font-medium text-lg hover:bg-emerald-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                onClick={toggleModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find your Human
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full bg-white text-emerald-600 font-medium text-lg border-2 border-emerald-600 hover:bg-emerald-50 transition duration-150 ease-in-out"
                onClick={toggleModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create your Profile
              </motion.button>
            </motion.div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <motion.div
              className="h-[400px] w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Scene isHovered={isHovered} />
              </Canvas>
            </motion.div>
          </div>
        </div>
        <div className="mt-16 overflow-hidden">
          <div className="ticker-wrap">
            <div className="ticker">
              <div className="ticker-item">Reliable</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Local</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Vetted</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Kind</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Skilled</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">On Time</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Reliable</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Local</div>
              <div className="ticker-item">•</div>
              <div className="ticker-item">Vetted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
