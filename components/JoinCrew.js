"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function JoinCrew({ toggleModal }) {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Be your own boss.
              <br />
              <span className="text-emerald-600">Look professional in minutes.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Create a free profile. Show your work. Get found. All with a branded page and a WhatsApp button.
            </p>
            <div className="mt-8">
              <motion.button
                className="px-8 py-4 rounded-full bg-emerald-600 text-white font-medium text-lg hover:bg-emerald-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                onClick={toggleModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                I'm Handy – Build My Page
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/tradesperson-profile.jpg"
                alt="Tradesperson profile example"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
