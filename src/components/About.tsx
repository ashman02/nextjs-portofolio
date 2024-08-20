import React from "react"

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-stand flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center z-10 relative max-w-2xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-trust mb-6 animate-slideInBlur opacity-0">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark mb-4 animate-slideInBlur opacity-0 animation-delay-200">
          I'm <span className="font-bold">Ashman</span>, a dedicated Full Stack
          Developer with a passion for creating high-quality, efficient web
          applications.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark mb-4 animate-slideInBlur opacity-0 animation-delay-400">
          With strong expertise in modern frameworks like{" "}
          <span className="font-bold">React.js, Next.js, and Tailwind CSS</span>
          , I bring ideas to life with clean and scalable code.
        </p>
        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-trust text-stand font-semibold rounded-full transition duration-300 animate-slideInBlur opacity-0 animation-delay-600 hover:shadow-glow text-sm sm:text-base">
          Contact Me
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-stand to-transparent opacity-50"></div>
      <div className="absolute -top-20 -left-20 w-28 sm:w-40 md:w-52 h-28 sm:h-40 md:h-52 bg-light rounded-full filter blur-3xl opacity-20 animate-gentleFloat"></div>
      <div className="absolute -bottom-20 -right-20 w-28 sm:w-40 md:w-52 h-28 sm:h-40 md:h-52 bg-trust rounded-full filter blur-3xl opacity-20 animate-gentleFloat"></div>
    </section>
  )
}

export default About
