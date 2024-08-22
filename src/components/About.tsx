"use client"
import React from "react"
import { motion } from "framer-motion"
import { Raleway } from "next/font/google"
import Link from "next/link"

const raleway = Raleway({ weight: ["400", "800"], subsets: ["latin"] })

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-light flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="text-center z-10 relative max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        <h2
          className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-trust mb-4 ${raleway.className}`}
        >
          Meet Ashman
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark leading-relaxed mb-6">
          I&apos;m a Fullstack Developer who specializes in creating high-quality,
          performant websites. With the{" "}
          <span className="font-bold text-trust">MERN stack</span>, I build
          robust and scalable applications. Using{" "}
          <span className="font-bold text-trust">Next.js</span>, I ensure fast,
          SEO-friendly websites that excel in performance. And with{" "}
          <span className="font-bold text-trust">Tailwind CSS</span>, I design
          websites that are not only responsive but also visually stunning.
        </p>
        <Link href={"/#contact"} scroll={false}>
        <motion.button
          className="px-5 py-3 bg-stand text-trust font-semibold rounded-full shadow-lg text-sm sm:text-base hover:shadow-glow transition duration-300"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Hire Me
        </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="absolute -top-16 -right-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-stand rounded-full filter blur-3xl opacity-20 animate-gentleFloat"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  )
}

export default About
