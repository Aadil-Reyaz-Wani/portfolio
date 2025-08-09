import React from 'react';
import { ExternalLink, Github, Play, MapPin, Camera, Users, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  const mainProject = {
    title: 'Bislei',
    subtitle: 'From Lakes to Likes',
    description: 'A comprehensive Android application that revolutionizes the fishing experience by combining AI-powered fish identification, social features, and location-based services.',
    image: 'https://images.unsplash.com/photo-1529230117010-b6c436154f25?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: 'https://bislei-b90ca.web.app/',
    githubUrl: 'https://github.com/Aadil-Reyaz-Wani/Bislei---From-Lakes-to-Likes',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'ML Kit', 'Maps SDK', 'Room DB', 'Hilt'],
    features: [
      {
        icon: <Camera size={20} />,
        title: 'AI Fish Recognition',
        description: 'On-device ML using TFLite + Firebase ML Kit for instant fish identification'
      },
      {
        icon: <Users size={20} />,
        title: 'Social Features',
        description: 'Post uploads with captions, image cropping, likes & comments system'
      },
      {
        icon: <MapPin size={20} />,
        title: 'Location Discovery',
        description: 'Interactive maps to discover and share the best fishing hotspots'
      },
      {
        icon: <Trophy size={20} />,
        title: 'Gamification',
        description: 'Leaderboards, achievements, and community engagement features'
      }
    ]
  };

  const upcomingProjects = [
    {
      title: 'Blood Donor App for Local Areas',
      description: 'Emergency blood donor finder app connecting users by blood group and location (Anantnag, Srinagar, etc.) with Firebase integration',
      status: 'In Development',
      technologies: ['Kotlin', 'Compose', 'Firebase', 'Maps SDK']
    },
    {
      title: 'J&K Tourism Explorer App',
      description: 'Tourism app featuring hidden gems, homestays, local guides, culture tips, and permit status updates for J&K region',
      status: 'Planning',
      technologies: ['Kotlin', 'Compose', 'Firebase', 'Maps SDK']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative mobile applications that blend technology with real-world experiences
          </p>
        </div>

        {/* Main Project - Bislei */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-500">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={mainProject.image}
                alt={mainProject.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full mb-2">
                  Live Project
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {mainProject.title}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                  {mainProject.subtitle}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {mainProject.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {mainProject.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mainProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Play size={20} />
                  Live Demo
                </a>
                <a
                  href={mainProject.githubUrl}
                  className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            More exciting projects are in development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-dashed border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'In Development' 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;