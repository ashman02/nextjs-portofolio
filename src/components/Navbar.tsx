"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation"

const font = Poppins({ weight: "400", subsets: ["latin"] })

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false)
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

  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 bg-trust px-2 md:px-8 py-4">
      {/* <div className="">
        <Image
          src={isSidebar ? "/xmark.svg" : "/bars.svg"}
          alt="bars"
          height={24}
          width={24}
          className="cursor-pointer"
          onClick={() => setIsSidebar(!isSidebar)}
        />
      </div> */}
      <ul
        className={`${font.className} font-thin text-lg flex items-center justify-between gap-3`}
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
              activeSection === "about" ? "text-stand" : "text-light"
            }`}
          >
            About
          </li>
        </Link>
        <Link href={"#"}>
          <li
            className={`${
              activeSection === "projects" ? "text-stand" : "text-light"
            }`}
          >
            Projects
          </li>
        </Link>
        <Link href={"#"}>
          <li
            className={`${
              activeSection === "contact" ? "text-stand" : "text-light"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
      {/* <div
        className={`h-screen md:hidden absolute top-0 right-0 py-3 bg-trust w-1/2 transform transition-transform ease-in-out duration-200 ${
          isSidebar ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <ul
          className={`${font.className} font-thin text-lg text-light flex flex-col pl-3 gap-3`}
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
                activeSection === "about" ? "text-stand" : "text-light"
              }`}
            >
              About
            </li>
          </Link>
          <Link href={"#"}>
            <li
              className={`${
                activeSection === "projects" ? "text-stand" : "text-light"
              }`}
            >
              Projects
            </li>
          </Link>
          <Link href={"#"}>
            <li
              className={`${
                activeSection === "contact" ? "text-stand" : "text-light"
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div> */}
    </div>
  )
}

export default Navbar
