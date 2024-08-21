"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ weight: ['400', '800'], subsets: ['latin'] });

const Contact = () => {


  return (
    <section
      id="contact"
      className="min-h-screen bg-light flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="text-center z-10 relative max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px 0px' }}
      >
        <h2 className={`font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-trust mb-4 ${raleway.className}`}>
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark leading-relaxed mb-8">
          I'd love to hear from you! Fill out the form below and let's connect.
        </p>
        <form action="https://formspree.io/f/xvoewlka" method='POST' className="text-left">
          <div className="mb-6">
            <label htmlFor="name" className="block text-dark font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 bg-stand text-trust rounded-full focus:outline-none focus:ring-2 focus:ring-trust focus:border-transparent transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-dark font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 bg-stand text-trust rounded-full focus:outline-none focus:ring-2 focus:ring-trust focus:border-transparent transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-dark font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full px-4 py-3 bg-stand text-trust rounded-2xl focus:outline-none focus:ring-2 focus:ring-trust focus:border-transparent transition duration-300 resize-none"
              rows={5}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full px-8 py-3 bg-trust text-stand font-bold rounded-full text-lg hover:shadow-glow transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;