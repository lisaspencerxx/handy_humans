"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <motion.span
                className="text-2xl font-bold text-emerald-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Handy Humans™
              </motion.span>
            </div>
          </div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <motion.a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
            >
              For Tradespeople
            </motion.a>
            <motion.a
              href="#"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-600"
              whileHover={{ scale: 1.05 }}
            >
              Browse Profiles
            </motion.a>
            <motion.a
              href="#"
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.a>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
