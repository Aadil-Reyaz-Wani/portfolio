import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Kotlin', level: 95, color: 'from-purple-500 to-purple-600' },
        { name: 'Jetpack Compose', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Java', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'XML', level: 88, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Architecture & Patterns',
      skills: [
        { name: 'MVVM', level: 92, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Clean Architecture', level: 88, color: 'from-teal-500 to-teal-600' },
        { name: 'Dependency Injection', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Hilt/Dagger', level: 80, color: 'from-pink-500 to-pink-600' },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 90, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Room Database', level: 88, color: 'from-red-500 to-red-600' },
        { name: 'REST APIs', level: 85, color: 'from-emerald-500 to-emerald-600' },
        { name: 'SQLite', level: 82, color: 'from-violet-500 to-violet-600' },
      ]
    },
    {
      title: 'Specialized Technologies',
      skills: [
        { name: 'ML Kit', level: 85, color: 'from-rose-500 to-rose-600' },
        { name: 'Google Maps SDK', level: 88, color: 'from-lime-500 to-lime-600' },
        { name: 'TensorFlow Lite', level: 80, color: 'from-amber-500 to-amber-600' },
        { name: 'UI/UX Design', level: 85, color: 'from-fuchsia-500 to-fuchsia-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern Android applications with focus on 
            performance, scalability, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 transform-gpu`}
                        style={{
                          width: `${skill.level}%`,
                          transformOrigin: 'left center'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Kotlin', 'Android Studio', 'Firebase', 'Git', 'Jetpack Compose', 
              'Room', 'Hilt', 'ML Kit', 'Maps SDK', 'Material Design'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:scale-105 transform transition-transform duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
