import React from 'react';
import { motion } from 'framer-motion';

// Data for Projects
const projects = [
  {
    title: 'Automotive Process Comparison Tool',
    description: 'A full-stack tool designed to automate and streamline the comparison of complex process configurations across different company environments (Production, Staging, and Dev). Built using SQL Server, this tool integrates with multiple environments to optimize the comparison process and ensure consistent results across platforms.',
    techStack: ['React', 'Node.js', 'Flask', 'Jinja2', 'SQL Server', 'GitLab', 'SPs', 'API Development'],
    image: 'tradeweb3.png',
    link: '#',
    type: 'Company Project',
    view: false
  },
  {
    title: 'Blockchain Real Estate Tokenization',
    description: 'A decentralized application leveraging blockchain technology to tokenize real estate assets. Using Solidity for smart contracts and React with a Tailwind frontend, the platform ensures secure, transparent ownership transactions. Firebase and Google Cloud are used for scalable, real-time backend services.',
    techStack: ['React', 'Tailwind', 'GitHub Workflows', 'Solidity', 'Ethereum', 'TypeScript', 'Google Cloud', 'Firebase', 'CI/CD'],
    image: 'block.png',
    link: '#',
    type: 'Personal Project',
    view: true
  },
  {
    title: 'CentreForms CRM Enhancement',
    description: 'Improved a live CRM system deployed on AWS by enhancing performance and optimizing the user experience. Managed backend updates using PHP and PHPMyAdmin, while integrating Angular and React components to deliver a modern, dynamic UI. Ensured seamless local testing with XAMPP and Virtual Hosts.',
    techStack: ['React', 'Angular', 'PHP', 'Bootstrap', 'AWS EC2 Linux', 'PHPMyAdmin', 'Docker'],
    image: 'cf.png',
    link: '#',
    type: 'Company Project',
    view: false
  },
  {
    title: 'TradeFlow Optimiser',
    description: 'A middleware platform built to optimize and secure API requests for international trading teams. This solution enhances request efficiency, improves resource management, and ensures scalability and security across the system, supporting real-time trading operations.',
    techStack: ['Python', 'React', 'Docker', 'Kubernetes', 'SQL', 'Angular', 'API Management', 'RESTAPIs', 'Efficient Solutions', 'Testing Solutions'],
    image: 'trade1.png',
    link: '#',
    type: 'Company Project',
    view: false
  },
  {
    title: 'Valid8ta Project',
    description: 'Developed a React and TypeScript app to upload, validate, and manage CSV data, integrating seamlessly with Microsoft Dataverse. Designed and implemented CI/CD pipelines with cached tests to accelerate build times and ensure smooth, consistent deployments.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Dynamics 365', 'Data Management', 'Microsoft Azure', 'Dataverse'],
    image: 'wasteaway.png',
    link: '#',
    type: 'Company Project',
    view: false
  },
  {
    title: 'Facial Recognition System',
    description: 'Implemented machine learning models (RESNETv2, VGG19) using TensorFlow for highly accurate face detection and recognition, including distinguishing between masked and unmasked faces. Focused on analytics and ML model testing to optimize recognition performance in real-world scenarios.',
    techStack: ['TensorFlow', 'Python', 'GPU Computing', 'Numpy', 'GA', 'Analytics', 'Matplotlib', 'Complex Mathematics'],
    image: 'res2.png',
    link: '#',
    type: 'Personal Project',
    view: true
  },
  {
    title: "Movie Recommendation System",
    description: "Developed a recommendation system using content-based filtering and collaborative filtering techniques to suggest movies to users based on their preferences. Leveraged Python libraries like Pandas, Scikit-learn, and Numpy to analyze features such as genre, cast, and ratings for personalized movie recommendations.",
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Numpy",
      "Matplotlib",
      "Surprise",
      "TensorFlow",
      "Flask"
    ],
    image: "euclidean_keybased.png",
    link: "#",
    type: "Personal Project",
    view: true
  },
  {
    title: "Stock Analytics & Prediction System",
    description: "Utilized large datasets from Kaggle to build a predictive model for cryptocurrency and stock closing prices. Leveraged machine learning techniques, including multilinear regression, along with data analysis tools like Pandas, Numpy, and Matplotlib to identify patterns and predict future market trends, providing valuable insights for investors.",
    techStack: [
      "Python",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-learn",
      "Multilinear Regression",
      "Kaggle Datasets",
      "Seaborn"
    ],
    image: "stocks.png",
    link: "#",
    type: "Personal Project",
    view: true
  }
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
              {project.view && (
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
