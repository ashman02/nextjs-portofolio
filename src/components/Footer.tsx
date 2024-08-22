"use client"
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ weight: ['400', '800'], subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className="bg-trust text-stand py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link href="/">
            <h3 className={`text-2xl font-bold text-center md:text-start ${raleway.className}`}>Ashman</h3>
          </Link>
          <p className="text-sm">Fullstack Developer</p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://github.com/chobar02" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-stand transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/ashman02/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-stand transition duration-300" />
          </Link>
          <Link href="https://www.instagram.com/cforchobar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-stand transition duration-300" />
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ashman. All rights reserved.</p>
        <p className="mt-2">
          Made with ❤️ by{' '}
          <Link href="https://github.com/chobar02" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-stand transition duration-300">
            Ashman
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;