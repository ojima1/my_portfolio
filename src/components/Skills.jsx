import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', level: 'Advanced', color: 'text-cyan-400' },
    { icon: <FaHtml5 />, name: 'HTML5', level: 'Expert', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 'Expert', color: 'text-blue-500' },
    { icon: <FaJsSquare />, name: 'JavaScript', level: 'Advanced', color: 'text-yellow-400' },
    { icon: <SiDotnet />, name: 'ASP.NET Core', level: 'Advanced', color: 'text-purple-500' },
    { icon: <FaMicrosoft />, name: 'MVC', level: 'Advanced', color: 'text-blue-600' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: 'Expert', color: 'text-teal-400' },
  ];

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark mb-4">My Skills</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I've mastered a range of technologies that allow me to build complete, 
          scalable web applications from frontend to backend.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className={`text-4xl ${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    skill.level === 'Expert' ? 'bg-green-500' : 
                    skill.level === 'Advanced' ? 'bg-primary' : 'bg-blue-400'
                  }`}
                  style={{ 
                    width: skill.level === 'Expert' ? '95%' : 
                           skill.level === 'Advanced' ? '85%' : '75%' 
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2 block">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;