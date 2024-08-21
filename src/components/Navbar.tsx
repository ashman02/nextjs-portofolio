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
    <div
      className={`sticky top-0 z-50 bg-trust ${
        activeSection === "hero" ? "bg-trust" : "bg-light"
      } px-2 md:px-8 py-4 transition-colors ease-in-out duration-200`}
    >
      <ul
        className={`${font.className} font-normal text-lg flex items-center justify-between gap-3`}
      >
        <Link href="#hero" scroll={false}>
          <li
            className={`${
              activeSection === "hero" ? "text-stand" : "text-light"
            } cursor-pointer`}
            onClick={() =>
              document
                .querySelector("#hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </li>
        </Link>
        <Link href="#about" scroll={false}>
          <li
            className={`${
              activeSection === "about" ? "text-stand" : "text-light"
            } cursor-pointer`}
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
        </Link>
        <Link href="#projects" scroll={false}>
          <li
            className={`${
              activeSection === "projects" ? "text-stand" : "text-light"
            } cursor-pointer`}
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
        </Link>
        <Link href="#contact" scroll={false}>
          <li
            className={`${
              activeSection === "contact" ? "text-stand" : "text-light"
            } cursor-pointer`}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
