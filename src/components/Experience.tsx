import React from 'react';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Android Developer',
      company: 'Bislei',
      location: 'Remote',
      period: '2024 - Present',
      description: 'Developing innovative Android applications that connect people with nature and technology, focusing on AI-powered features and user engagement.',
      achievements: [
        'Built Bislei app with AI fish identification using ML Kit and TensorFlow Lite',
        'Implemented social features with Firebase backend and real-time updates',
        'Integrated Google Maps SDK for location-based fishing hotspot discovery'
      ]
    },
    {
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      company: 'Computer Science & Applications',
      location: 'Kashmir University',
      period: '2023 - 2025',
      description: 'Advanced studies in computer science with focus on mobile application development, software engineering, and emerging technologies.',
      achievements: [
        'Specialized in Android development and mobile technologies',
        'Completed advanced projects in AI/ML integration with mobile apps',
        'Research focus on user experience design and modern app architecture',
        'Active participation in tech seminars and coding competitions'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Computer Science & Applications',
      location: 'Kashmir University',
      period: '2019 - 2022',
      description: 'Focused on software engineering, mobile development, and computer science fundamentals.',
      achievements: [
        'Graduated with First Class Honours',
        'Led university tech club and organized coding competitions'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Android Developer Certification',
      issuer: 'Google',
      year: '2025'
    },
    {
      title: 'Firebase Certified',
      issuer: 'Google Cloud',
      year: '2025'
    },
    {
      title: 'Kotlin Certified Developer',
      issuer: 'JetBrains',
      year: '2024'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning and professional growth in Android development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${
              index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto md:text-right'
            } md:w-1/2`}>
              <div className={`flex items-center mb-4 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}>
                <div className={`w-8 h-8 ${
                  exp.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                } rounded-full flex items-center justify-center text-white text-sm font-bold absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1`}>
                  {exp.type === 'work' ? <Award size={16} /> : <BookOpen size={16} />}
                </div>
              </div>

              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional certifications and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 text-center hover:scale-105 transform transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;