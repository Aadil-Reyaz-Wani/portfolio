import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl sm:text-8xl font-extrabold text-yellow-200 mb-8">
            About.
          </h2>
          <p className="text-lg sm:text-xl text-blue-950 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Android developer with expertise in creating innovative mobile applications. 
            My journey in software development has been driven by a love for clean code, user experience, 
            and the endless possibilities of mobile technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Skills</h3>
            <p className="text-blue-950 leading-relaxed">
              Proficient in Java, Kotlin, Android SDK, Firebase, and modern Android development practices. 
              Experienced with MVVM architecture, Jetpack Compose, and Material Design principles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Experience</h3>
            <p className="text-blue-950 leading-relaxed">
              Developed multiple Android applications from concept to deployment, 
              focusing on performance optimization and user engagement. 
              Collaborated with cross-functional teams to deliver high-quality products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Passion</h3>
            <p className="text-blue-950 leading-relaxed">
              Committed to continuous learning and staying updated with the latest 
              Android development trends and technologies. Always eager to take on 
              new challenges and create impactful solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-yellow-100 px-6 py-3 rounded-full">
            <span className="text-2xl">💻</span>
            <span className="text-blue-950 font-medium">Available for new opportunities</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
