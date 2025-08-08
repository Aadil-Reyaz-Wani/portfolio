import React from "react";
import Aadil from '../../Aadil.jpg'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="mb-4">
            <p className="text-xl font-medium text-blue-950">
              Hello I'm <strong className="text-pink-500">Aadil Reyaz</strong>
            </p>
          </div>
          
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-blue-950 leading-tight">
              <span className="block">Android</span>
              <span className="block text-pink-500">Developer</span>
            </h1>
          </div>
          
          <div className="mb-8">
            <p className="text-xl font-medium text-blue-950">
              Based in <strong className="text-pink-500">India</strong>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="inline-block bg-yellow-300 hover:bg-yellow-400 text-blue-950 font-medium px-8 py-4 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="#" 
              className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-medium px-8 py-4 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-pink-200 rounded-full overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover mix-blend-multiply" 
                src={Aadil} 
                alt="Aadil Reyaz Wani" 
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
