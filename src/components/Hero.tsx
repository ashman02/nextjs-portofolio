"use client"
import React from "react"
import { Raleway } from "next/font/google"
import { useRouter } from "next/navigation"

const raleway = Raleway({weight : ["400", "800"], subsets: ["latin"]})

const Hero = () => {
  const router = useRouter()
  return (
    <section
      id="hero"
      className="h-screen bg-trust flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center z-10 relative max-w-3xl mx-auto">
        <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-light mb-2 sm:mb-4 animate-slideInBlur opacity-0 ${raleway.className}`}>
          Powering websites
        </h1>
        <h1 className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-light mb-3 sm:mb-6 animate-slideInBlur opacity-0 animation-delay-200 ${raleway.className}`}>
          from server to screen
        </h1>
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stand animate-slideInBlur opacity-0 animation-delay-400">
          Fullstack Developer
        </h2>
        <button onClick={() => router.replace("/#projects")} className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-stand text-trust font-semibold rounded-full transition duration-300 animate-slideInBlur opacity-0 animation-delay-600 hover:shadow-glow text-sm sm:text-base">
          Explore My Work
        </button>
      </div>
    </section>
  )
}

export default Hero
