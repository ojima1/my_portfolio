import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import cryptoDashboardImg from "../assets/crypto-dashboard.png";
import StreamFlixImg from "../assets/streamflix.png";
import OPX from "../assets/opximg.png";
import KEPA from "../assets/kepaimg.png";
import PortfolioImg from "../assets/portfolioimg.png";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'crypto-dashboard',
      description: 'Modern crypto dashboard built with React & Tailwind — live market data, interactive charts, and a persistent portfolio tracker.',
      technologies: ['React', 'Tailwind CSS', 'coinGecko API'],
      github: 'https://github.com/ojima1/crypto-dashboard',
      liveDemo: ' https://ojima1.github.io/crypto-dashboard/',
      featured: true,
      image: cryptoDashboardImg
    },
    {
      id: 2,
      title: 'StreamFlix',
      description: 'Netflix-inspired streaming UI built with React and TMDB API.',
      technologies: ['React', 'TMDB API', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/ojima1/Streamflix/',
      liveDemo: 'https://ojima1.github.io/Streamflix/',
      featured: true,
      image: StreamFlixImg

    },
    {
      id: 3,
      title: 'OPXNG',
      description: 'An Escrow Sytem Means Of Payment.',
      technologies: ['C#', 'ASP.NET Core MVC','HTML5', 'CSS3', 'JavaScript', 'SQL Server'],
      github: 'https://github.com/ojima1/OPX',
      liveDemo: 'https://opxng.com/',
      featured: false,
      image: OPX
    },
    {
      id: 4,
      title: 'KEPA',
      description: 'Secured Online Payment Portal for Kaduna State Environmental Protection Agency(KEPA)',
      technologies: ['C#', 'ASP.NET Core MVC','HTML5', 'CSS3', 'JavaScript', 'SQL Server'],
      github: 'https://github.com/ojima1/DirectPayment',
      liveDemo: 'https://kepa.osoftpay.net/',
      featured: false,
      image: KEPA
    },
  
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills',
      technologies: [ 'React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/ojima1/my_portfolio',
      liveDemo: ' https://ojima1.github.io/my_portfolio/',
      featured: true,
      image: PortfolioImg
    },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.technologies.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="py-20 bg-dark text-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills across different technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-semibold transition flex items-center gap-2 ${filter === 'featured' ? 'bg-secondary text-dark' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            <FaStar /> Featured
          </button>
          <button
            onClick={() => setFilter('react')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'react' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            React
          </button>
          <button
            onClick={() => setFilter('asp.net')}
            className={`px-6 py-2 rounded-full font-semibold transition ${filter === 'asp.net' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            ASP.NET Core
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-secondary text-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <FaStar /> Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-indigo-400 transition"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;