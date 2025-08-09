import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-x"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-up">
            {/* Added extra top margin for AR circle */}
            <div className="w-32 h-32 mx-auto mt-12 md:mt-16 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-gray-800 dark:text-white">
                AR
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Aadil Reyaz</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Wani
              </span>
            </h1>
          </div>

          <div className="mb-8 animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Android Developer passionate about building mobile experiences that connect people with nature and technology
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Crafting innovative mobile applications with clean architecture, modern UI/UX, and cutting-edge technologies
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up animation-delay-600">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Aadil_Reyaz_Wani_Resume.pdf"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              {/* GitHub */}
              <a
                href="https://github.com/Aadil-Reyaz-Wani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-[#181717]"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aadilreyazwani/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {/* Email */}
              <a
                href="mailto:aadilreyaz924@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-[#EA4335]"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-900">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
