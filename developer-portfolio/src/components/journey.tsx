import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Data for Journey
const journey = [
  {
    year: '2024',
    title: 'Contracted Software Engineer at Focus Group',
    description: 'Developed middleware for real-time data synchronization between Microsoft Dynamics and Firebase, improving the CentreForms CRM platform\'s performance and usability.',
    techStack: ['React', 'TypeScript', 'Firebase', 'AWS', 'PHP'],
    type: 'Professional Experience',
  },
  {
    year: '2024',
    title: 'Software Engineer Intern at Tradeweb',
    description: 'Worked as a full-stack developer automating internal processes at Tradeweb, improving configuration stability and system performance. Hands-on experience with Docker, Kubernetes, and APIs.',
    techStack: ['Python', 'React', 'Node.js', 'SQL', 'Docker', 'Kubernetes'],
    type: 'Professional Experience',
  },
  {
    year: '2024',
    title: 'Blockchain-Based Real Estate Tokenization Application',
    description: 'Led the development of a blockchain application using React, JavaScript, and TypeScript for real estate tokenization. Implemented Solidity smart contracts on the Ethereum blockchain for secure, fractional ownership and automated asset management.',
    techStack: ['Solidity', 'React', 'TypeScript', 'Ethereum'],
    type: 'Academic Experience',
  },
  {
    year: '2023',
    title: 'Facial Recognition System Development',
    description: 'Created a robust facial recognition system using machine learning algorithms, capable of accurate detection even with masks.',
    techStack: ['TensorFlow', 'Python', 'OpenCV'],
    type: 'Research Project',
  },
  {
    year: '2023',
    title: 'Member of the University of Portsmouth Software Development Team',
    description: 'Active member of the University of Portsmouth Software Development Team, contributing to various collaborative projects and developing software solutions across different domains. Regularly participated in hackathons, honing problem-solving, coding, and teamwork skills while working under tight deadlines to deliver innovative solutions.',
    techStack: ['Team Collaboration', 'Problem Solving', 'Hackathons', 'Software Development'],
    type: 'Academic Experience',
  },
  {
    year: '2022',
    title: 'IT Support Volunteer at University of Portsmouth',
    description: 'Provided IT support for both software and hardware issues on Windows and MacOS systems, assisting students and staff with technical troubleshooting and maintenance.',
    techStack: ['Windows', 'MacOS', 'IT Support'],
    type: 'Volunteering',
  },
  {
    year: '2020',
    title: 'Launched Sustainable Recipe App',
    description: 'Developed a mobile application promoting sustainable cooking by suggesting recipes based on available ingredients, reducing food waste.',
    techStack: ['Flutter', 'Dart', 'iOS'],
    type: 'Academic Experience',
  },
];

const Journey: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 animate-pulse blur-3xl"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 opacity-15 animate-bounce blur-2xl"></div>
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 opacity-10 animate-pulse blur-xl"></div>
      </div>
      <div>

        <button
          onClick={() => {
            console.log("Button clicked"); // Debugging log
            navigate('/');
          }}
          className="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <FaArrowLeft />
          Return
        </button>
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
