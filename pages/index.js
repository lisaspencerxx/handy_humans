"use client"

import Head from "next/head"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Navbar from "../components/Navbar"
import Hero3D from "../components/Hero3D"
import HowItWorks3D from "../components/HowItWorks3D"
import WhyHumans from "../components/WhyHumans"
import JoinCrew from "../components/JoinCrew"
import Footer from "../components/Footer"
import StickyFooter from "../components/StickyFooter"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues with 3D components
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Handy Humans™ | Real people. Real skills.</title>
        <meta
          name="description"
          content="Painters. Plumbers. Flatpack masters. Garden whisperers. Handy Humans are trusted locals you can actually talk to."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with 3D */}
        {mounted && <Hero3D toggleModal={toggleModal} />}

        {/* How It Works Section with 3D */}
        {mounted && <HowItWorks3D />}

        {/* Why Humans Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WhyHumans />
        </motion.div>

        {/* Join the Crew Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <JoinCrew toggleModal={toggleModal} />
        </motion.div>
      </main>

      <Footer />
      <StickyFooter toggleModal={toggleModal} />

      {/* Modal with Animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Join Handy Humans™</h3>
                  <button className="text-gray-500 hover:text-gray-700" onClick={toggleModal}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Coming Soon!</h4>
                    <p className="mt-2 text-gray-600">
                      We're building something amazing. Leave your email and we'll let you know when we launch.
                    </p>
                    <div className="mt-4">
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your email"
                      />
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full mt-3 px-4 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition duration-150 ease-in-out"
                      >
                        Keep me updated
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
