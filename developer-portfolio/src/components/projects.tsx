import React from 'react';
import { motion } from 'framer-motion';

// Data for Projects
const projects = [
  {
    title: 'Blockchain Real Estate Tokenization',
    description: 'A blockchain-based application for secure real estate tokenization using Solidity smart contracts and React.',
    techStack: ['React', 'Solidity', 'Ethereum', 'TypeScript'],
    image: '/images/blockchain-app.jpg',
    link: '#',
    type: 'Personal Project',
  },
  {
    title: 'Facial Recognition System',
    description: 'Machine learning model using TensorFlow for accurate recognition of masked and unmasked faces.',
    techStack: ['TensorFlow', 'Python', 'GPU Computing'],
    image: '/images/facial-recognition.jpg',
    link: '#',
    type: 'Personal Project',
  },
  {
    title: 'Sustainable Recipe App',
    description: 'An iOS app that suggests recipes based on available ingredients, promoting sustainability and reducing food waste.',
    techStack: ['Dart', 'Flutter', 'iOS'],
    image: '/images/recipe-app.jpg',
    link: '#',
    type: 'Personal Project',
  },
  {
    title: 'Automotive Process Comparison Tool',
    description: 'A full-stack tool to manage and compare networking processes across multiple environments for major financial asset managers.',
    techStack: ['React', 'Node.js', 'Flask', 'SQL Server', 'GitLab'],
    image: '/images/automotive-tool.jpg',
    link: '#',
    type: 'Company Project',
  },
  {
    title: 'CentreForms CRM Enhancement',
    description: 'Developed middleware for data synchronization between Microsoft Dynamics and Firebase, with a responsive UI using React and Tailwind CSS.',
    techStack: ['React', 'TypeScript', 'Firebase', 'AWS', 'PHPMyAdmin'],
    image: '/images/crm-enhancement.jpg',
    link: '#',
    type: 'Company Project',
  },
  {
    title: 'Internal Process Automation at Tradeweb',
    description: 'Automated internal company processes using Python, React, and Docker, improving efficiency for EU support teams.',
    techStack: ['Python', 'React', 'Docker', 'Kubernetes', 'SQL'],
    image: '/images/process-automation.jpg',
    link: '#',
    type: 'Company Project',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="relative min-h-screen p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse blur-3xl"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 opacity-15 animate-bounce blur-2xl"></div>
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 opacity-10 animate-pulse blur-xl"></div>
      </div>

      <h1 className="z-10 text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-purple-400 to-pink-500">
        My Projects
      </h1>

      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-opacity-50 backdrop-blur-md rounded-3xl shadow-lg border border-opacity-30 border-gray-200 transition-transform duration-300"
          >
            <div className="relative">
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-sm">
                {project.type}
              </div>
              <img
                src={project.image}
                className="w-full h-60 object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-teal-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
