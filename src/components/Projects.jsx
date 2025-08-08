import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bislei: From Lakes to Likes",
      description: "A fishing & nature app that connects anglers with nature enthusiasts. Features include location-based fishing spots, social sharing, and nature photography integration.",
      image: "https://dl.memuplay.com/new_market/img/com.tensquaregames.letsfish2.icon.2024-09-18-10-33-43.png",
      link: "https://bislei-b90ca.web.app",
      tags: ["Android", "Firebase", "Location Services", "Social Features"]
    },
    {
      id: 2,
      title: "Data Entry App",
      description: "A comprehensive data management application with real-time synchronization and advanced reporting features.",
      image: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Android", "SQLite", "Data Management", "Reporting"]
    },
    {
      id: 3,
      title: "Online Teaching App",
      description: "An interactive learning platform with video conferencing, whiteboard tools, and progress tracking.",
      image: "https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Android", "WebRTC", "Education", "Real-time"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl sm:text-8xl font-extrabold text-yellow-200 mb-8">
            Projects.
          </h2>
          <p className="text-lg sm:text-xl text-blue-950 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in Android development, 
            user experience design, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-3">{project.title}</h3>
                <p className="text-blue-950 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-yellow-100 text-blue-950 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors duration-200"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-yellow-100 px-6 py-3 rounded-full">
            <span className="text-2xl">📱</span>
            <span className="text-blue-950 font-medium">More projects coming soon</span>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
