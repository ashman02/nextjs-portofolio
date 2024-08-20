"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Raleway } from "next/font/google"


const font = Raleway({ weight: ["200", "300", "400"], subsets: ["latin"] })

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id
        }
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection])


  return (
    <div className={`sticky top-0 z-50 ${activeSection === "hero" ? "bg-trust" : "bg-stand"} px-2 md:px-8 py-4 transition-colors ease-in-out duration-200`}>
      <ul
        className={`${font.className} font-normal text-lg flex items-center justify-between gap-3`}
      >
        <Link href={"#hero"}>
          <li
            className={`${
              activeSection === "hero" ? "text-stand" : "text-light"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href={"#about"}>
          <li
            className={`${
              activeSection === "about" ? "text-trust" : "text-light"
            }`}
          >
            About
          </li>
        </Link>
        <Link href={"#"}>
          <li
            className={`${
              activeSection === "projects" ? "text-trust" : "text-light"
            }`}
          >
            Projects
          </li>
        </Link>
        <Link href={"#"}>
          <li
            className={`${
              activeSection === "contact" ? "text-trust" : "text-light"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
