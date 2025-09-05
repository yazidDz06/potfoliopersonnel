import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaVideo } from "react-icons/fa";
import htmllogo from '../assets/htmlcssjs.jpg';
import reactlogo from '../assets/reactpic.jpg';
import taillogo from '../assets/tail.png';
import sqllogo from '../assets/sql.jpg';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project2.png';
import proj3 from '../assets/proj3.png';
import vid1 from '../assets/project1.mp4';
import vid2 from '../assets/project2.mp4';
import vid3 from '../assets/ecommerce.mp4';
import mapic from '../assets/DSC_0595.jpg';
import { useState } from "react";

export default function Portfolio() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3,setShowVideo3] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <nav className="container mx-auto flex justify-center py-4">
          <ul className="flex space-x-8 text-lg font-medium">
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#footer" className="hover:text-gray-300">Contacts</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Khoualdi Lyazid
        </h1>
        <div className="flex justify-center items-center">
         <img 
                  src={mapic} 
                  alt="Me" 
                  className="w-64 h-64 object-cover rounded-full mb-4" 
                />
          </div>
        <h2 className="text-2xl md:text-2xl font-normal">
          Web Developer
        </h2>
        <div className="mt-6">
          <a
            href="#projects"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            See My Work
          </a>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Skills Section */}
        <div id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img src={htmllogo} alt="HTML CSS JS" className="mx-auto mb-4 w-20 h-20 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">HTML / CSS / JS</h3>
              <p className="text-gray-600">Basics of every web page</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img src={reactlogo} alt="React" className="mx-auto mb-4 w-20 h-20 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">React</h3>
              <p className="text-gray-600">For dynamic web apps</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img src={taillogo} alt="Tailwind" className="mx-auto mb-4 w-20 h-20 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">For modern styles</p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img src={sqllogo} alt="Express SQL" className="mx-auto mb-4 w-20 h-20 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">ExpressJS / SQL</h3>
              <p className="text-gray-600">For building a solid back-end</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition w-full">
              {showVideo1 ? (
               <video src={vid1} controls autoPlay className="rounded-lg mb-4 w-full h-64 object-cover" />
              ) : (
                <img 
                  src={proj1} 
                  alt="Project 1" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
              )}
              <h3 className="text-xl font-semibold mb-2">Restaurant Reservation</h3>
              <p className="text-gray-600 mb-4">
                Full stack web application that allows making reservations at a restaurant. 
                It solves the problem of table unavailability by informing clients in advance 
                about table availability for a given time and date.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVideo1(!showVideo1)} 
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                >
                  <FaVideo /> Video
                </button>
                <a 
                  href="https://github.com/yazidDz06/resto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition w-full">
              {showVideo2 ? (
                <video src={vid2} controls autoPlay className="rounded-lg mb-4 w-full h-64 object-cover" />
              ) : (
                <img 
                  src={proj2} 
                  alt="Project 2" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
              )}
              <h3 className="text-xl font-semibold mb-2">Professionals Finder</h3>
              <p className="text-gray-600 mb-4">
                A web application that helps people find professionals in various fields 
                and contact them for work. It also provides a tracking interface for 
                professionals to view messages, offers, and more.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVideo2(!showVideo2)} 
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                >
                  <FaVideo /> Video
                </button>
                <a 
                  href="https://github.com/yazidDz06/skillocapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

             {/* Project 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition w-full">
              {showVideo3 ? (
                <video src={vid3} controls autoPlay className="rounded-lg mb-4 w-full h-64 object-cover" />
              ) : (
                <img 
                  src={proj3} 
                  alt="Project 3" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
              )}
              <h3 className="text-xl font-semibold mb-2">ecommerce Website</h3>
              <p className="text-gray-600 mb-4">
               ecommerce plateforme not finished yet, 80% of the work done, authentification, product list, landing page, cart, searchbar works with and without login,
               admin panel where he can add categories, products, access only for him, tasks to complete : 
               - Cart connected with backend to save user's cart, send orders by clients and treat them by admin, dashboard of admin to see the number of 
               products, categories, orders, users...
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVideo3(!showVideo3)} 
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                >
                  <FaVideo /> Video
                </button>
                <a 
                  href="https://github.com/yazidDz06/ecommerce-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
        

        {/* About Section */}
        <div id="about" className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer with a solid background in computer science,
            including a Bachelor's degree in Computer Systems and a Master's degree in Software Engineering.
            I have gained skills in HTML, CSS, JavaScript, React, Node.js, and Express.I also worked on several projects at the university, such as end-of-cycle projects and semester assignments.
            I enjoy building interactive and user-friendly web applications.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-blue-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="mb-4 md:mb-0 text-left">
            <p className="flex items-center"><FaEnvelope className="mr-2" /> yazidkhoualdi5@gmail.com</p>
            <p className="flex items-center"><FaPhone className="mr-2" /> +213774392043</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <h5>&copy; 2025 Khoualdi Lyazid</h5>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-end"><FaMapMarkerAlt className="mr-2" /> Béjaïa, Algérie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

