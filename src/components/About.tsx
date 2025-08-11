import React from 'react';
import { Code2, Smartphone, Palette, Database } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First',
      description: 'Building native Android applications with modern Kotlin and Jetpack Compose'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Clean Architecture',
      description: 'MVVM patterns, dependency injection, and maintainable code structures'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Integration',
      description: 'Firebase, Room Database, and RESTful API integrations'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Focus',
      description: 'Creating intuitive and engaging user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Android Developer who loves creating innovative mobile solutions 
            that bridge the gap between technology and real-world experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With a strong foundation in Android development, I specialize in creating 
                feature-rich mobile applications that combine cutting-edge technology with 
                intuitive user experiences. My journey in mobile development has been driven 
                by curiosity and a passion for solving real-world problems through technology.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices 
                like SOLID principles and clean architecture. My approach focuses on creating 
                applications that are not only functional but also scalable and user-friendly.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring nature, which has inspired 
                projects like Bislei - an app that connects fishing enthusiasts with 
                technology to enhance their outdoor experiences.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
