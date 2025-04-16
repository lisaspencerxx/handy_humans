"use client"

import { motion } from "framer-motion"

export default function WhyHumans() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6" variants={itemVariants}>
            Why Humans?
          </motion.h2>
          <motion.p className="text-xl text-gray-600" variants={itemVariants}>
            We're not a directory. We're not an agency. We're a network of local legends — self-employed, skilled, and
            proud of it.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No hidden fees</h3>
            <p className="text-gray-600">What you see is what you pay. Clear pricing with no surprises.</p>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No fake reviews</h3>
            <p className="text-gray-600">Every review is from a verified customer. Real feedback you can trust.</p>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Just real work</h3>
            <p className="text-gray-600">
              From real people. Self-employed professionals who take pride in their craft.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
