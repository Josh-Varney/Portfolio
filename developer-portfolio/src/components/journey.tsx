import React from 'react';
import { motion } from 'framer-motion';

// Data for Journey
const journey = [
  {
    year: '2024',
    title: 'Senior Software Engineer at Tradeweb',
    description: 'Led a team of engineers in developing a suite of automated tools for financial analysis, significantly reducing manual processes and improving efficiency.',
    techStack: ['React', 'Python', 'Kubernetes', 'Docker'],
    type: 'Professional Experience',
  },
  {
    year: '2023',
    title: 'Blockchain Real Estate Project',
    description: 'Built a decentralized application for tokenizing real estate assets using Ethereum smart contracts. Enhanced security and transparency in real estate investments.',
    techStack: ['Solidity', 'React', 'TypeScript', 'Ethereum'],
    type: 'Personal Project',
  },
  {
    year: '2022',
    title: 'Joined CentreForms as Full Stack Developer',
    description: 'Developed middleware for CRM synchronization, creating a seamless data flow between Microsoft Dynamics and Firebase.',
    techStack: ['React', 'Firebase', 'AWS', 'TypeScript'],
    type: 'Professional Experience',
  },
  {
    year: '2021',
    title: 'Facial Recognition System Development',
    description: 'Created a robust facial recognition system using machine learning algorithms, capable of accurate detection even with masks.',
    techStack: ['TensorFlow', 'Python', 'OpenCV'],
    type: 'Research Project',
  },
  {
    year: '2020',
    title: 'Launched Sustainable Recipe App',
    description: 'Developed a mobile application promoting sustainable cooking by suggesting recipes based on available ingredients, reducing food waste.',
    techStack: ['Flutter', 'Dart', 'iOS'],
    type: 'Personal Project',
  },
];

const Journey: React.FC = () => {
  return (
    <section className="relative min-h-screen p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse blur-3xl"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 opacity-15 animate-bounce blur-2xl"></div>
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 opacity-10 animate-pulse blur-xl"></div>
      </div>

      <h1 className="z-10 text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-pink-500">
        My Journey
      </h1>

      <div className="z-10 flex flex-col gap-8">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg border border-opacity-30 border-gray-200 transition-transform duration-300 p-6"
          >
            <div className="flex items-center mb-4">
              <div className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-sm">
                {item.type}
              </div>
              <span className="ml-auto text-lg font-bold text-teal-400">{item.year}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-teal-400">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
