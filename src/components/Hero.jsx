import React from 'react';
import gloriaImage from '../assets/gloria-profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-gray-900 to-dark text-light px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Gloria Dennis</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondary">
            Software Developer
          </h2>
          <p className="text-lg text-gray-300">
            I specialize in creating beautiful, functional web applications using 
            React, HTML, CSS, JavaScript, and ASP.NET Core MVC. Passionate about 
            clean code and user-centric design.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-primary hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-secondary hover:bg-secondary text-secondary hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img 
              src={gloriaImage} 
              alt="Gloria Dennis" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="absolute -bottom-4 -right-4 bg-secondary text-dark p-4 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;