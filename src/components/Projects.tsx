"use client"
import React from "react"
import { motion } from "framer-motion"
import { Raleway } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const raleway = Raleway({ weight: ["400", "800"], subsets: ["latin"] })

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Placesur",
      description:
        "Discover and share your experiences with a dynamic review platform built using Next.js.",
      image: "/placesur.png",
      link: "https://www.placesur.com/",
    },
    {
      id: 2,
      title: "ChobarCart",
      description:
        "Experience a community-driven e-commerce platform crafted with React.js and MongoDB.",
      image: "/placesur.png",
      link: "https://www.chobarcart.com/",
    },
    {
      id: 3,
      title: "Music Academy",
      description:
        "Showcasing cutting-edge design, this project utilizes Next.js and Aceternity UI.",
      image: "/music.png",
      link: "https://chobarsmusicschool.netlify.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-light py-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px 0px" }}
        className="max-w-7xl mx-auto"
      >
        <h2
          className={`${raleway.className} font-bold text-4xl sm:text-5xl text-trust mb-4 text-center`}
        >
          Transforming Ideas into Reality
        </h2>
        <p className="text-dark text-center mb-12 text-lg">
          Explore my latest creations that push the boundaries of web
          development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px 0px" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`${raleway.className} font-bold text-xl text-trust mb-2`}
                >
                  {project.title}
                </h3>
                <p className="text-dark mb-4">{project.description}</p>
                <Link href={project.link} target="_blank">
                  <motion.button
                    className="w-full px-4 py-2 bg-stand text-trust font-semibold rounded-full text-sm hover:shadow-glow transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Project
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://github.com/chobar02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-3 bg-trust text-stand font-bold rounded-full text-lg hover:shadow-glow transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More on GitHub
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
