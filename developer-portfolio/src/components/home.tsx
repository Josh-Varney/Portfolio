import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse blur-3xl"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 opacity-15 animate-bounce blur-2xl"></div>
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 opacity-10 animate-pulse blur-xl"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="z-10 p-10 md:p-16 bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-lg border border-opacity-30 border-gray-200">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-pink-500 mb-6">
          Welcome, I'm Joshua Varney
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-300">
          Multi-Disciplinary Software Engineer Specialising in Web Applications & Financial Systems
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a
            href="projects"
            className="inline-block px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-xl hover:scale-105 hover:bg-gradient-to-l transition-transform duration-300"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-xl hover:scale-105 hover:bg-gradient-to-l transition-transform duration-300"
          >
            <FaFileDownload className="inline-block mr-2" /> Download Resume
          </a>
          <a
            href="/journey"
            className="inline-block px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-xl hover:scale-105 hover:bg-gradient-to-l transition-transform duration-300"
          >
            My Journey
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://github.com/Josh-Varney"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 hover:text-teal-400 transition duration-300 transform hover:scale-110 hover:animate-bounce"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-varney-6b3b291bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110 hover:animate-bounce"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:joshua.varney1@gmail.com"
            className="text-4xl text-gray-300 hover:text-pink-400 transition duration-300 transform hover:scale-110 hover:animate-bounce"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
