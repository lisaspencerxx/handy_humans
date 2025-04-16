"use client"

import { motion } from "framer-motion"

export default function StickyFooter({ toggleModal }) {
  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 z-10 bg-emerald-600 text-white py-4 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-lg font-medium mb-4 sm:mb-0">Need a Handy Human? Or are you one?</p>
        <motion.button
          className="px-6 py-2 bg-white text-emerald-600 rounded-full font-medium hover:bg-gray-100 transition duration-150 ease-in-out"
          onClick={toggleModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's go
        </motion.button>
      </div>
    </motion.div>
  )
}
