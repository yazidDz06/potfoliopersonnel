import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import htmllogo from '../assets/s1.png';
import reactlogo from '../assets/react.png';
import taillogo from '../assets/tailwind-css.png';
import nodelogo from '../assets/nodejs.png';
import postgreslogo from '../assets/postgresql.png';
import mongodb from '../assets/mongodb.png';
import javalogo from '../assets/java.png';
import gitgit from '../assets/git.png';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/coaching.png';
import proj3 from '../assets/proj3.png';
import vid1 from '../assets/project1.mp4';
import vid2 from '../assets/videontwo.mp4';
import vid3 from '../assets/ecommerce.mp4';
import mapic from '../assets/DSC_0595.jpg';
import admin from '../assets/admin.mp4';
import lastp from "../assets/lastpr.png"
import { useState } from "react";

export default function Portfolio() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3,setShowVideo3] = useState(false);
  const [showVideo4,setShowVideo4] = useState(false);

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
      <section className="bg-gradient-to-b from-blue-900 to-gray-50 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Khoualdi Lyazid
        </h1>
        <div className="flex justify-center items-center">
           <motion.img
            src={mapic}
            alt="Me"
            className="w-64 h-64 object-cover rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          </div>
        <h2 className="text-2xl md:text-2xl font-normal">
          Web Developer
        </h2>
        <div className="mt-6">
           <motion.a
            href="#projects"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-200 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Work
          </motion.a>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Skills Section */}
        <div id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ // tes skills
              { img: htmllogo, title: "HTML / CSS / JS", desc: "Basics of every web page" },
              { img: reactlogo, title: "React", desc: "For dynamic web apps" },
              { img: taillogo, title: "Tailwind CSS", desc: "For modern styles" },
              { img: nodelogo, title: "ExpressJS / NodeJS", desc: "For building a solid back-end" },
              { img: postgreslogo, title: "PostgreSQL", desc: "For relational databases" },
              { img: mongodb, title: "Mongo DB", desc: "Flexible databases" },
              { img: javalogo, title: "Java", desc: "Building desktop and mobile apps" },
              { img: gitgit, title: "Git/Github", desc: "Version control" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <img src={skill.img} alt={skill.title} className="mx-auto mb-4 w-20 h-20" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
         <div id="projects" className="mb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/*projectlast*/}
         <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition flex flex-col">
          {showVideo4 ? (
            <video
              src={admin}
              controls
              autoPlay
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          ) : (
            <img
              src={lastp}
              alt="cDent"
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">clinical dental</h3>
          <p className="text-gray-600 mb-4 flex-1">
          MVP of appointments reservations in a clinical dental with client panel where he 
          see all services and reserve by submiting a form, admin panel where he can view all patients, appointments, 
          and availabilities, he can also create availabilities and change their status, availabilities 
          are projected to clients so they can choose time and day to their appointments, for futur or on a request, 
          i can add services with their times and prices so client make an appointments directly for his reason, also i will
          add a quote on demand for clients.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
            <button
              onClick={() => setShowVideo4(!showVideo4)}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
            >
              <FaVideo /> Video
            </button>
            <a
              href="https://github.com/yazidDz06/mvp-dental-clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition flex flex-col">
          {showVideo1 ? (
            <video
              src={vid1}
              controls
              autoPlay
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          ) : (
            <img
              src={proj1}
              alt="Project 1"
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">Restaurant Reservation</h3>
          <p className="text-gray-600 mb-4 flex-1">
            Full stack web application that allows making reservations at a
            restaurant. It solves the problem of table unavailability by
            informing clients in advance about table availability for a given
            time and date.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
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
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition flex flex-col">
          {showVideo2 ? (
            <video
              src={vid2}
              controls
              autoPlay
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          ) : (
            <img
              src={proj2}
              alt="Project 2"
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">Coaching plateform</h3>
          <p className="text-gray-600 mb-4 flex-1">
            A web application that helps people find direct contact with a coach
            by sending a form that goes to plateform mail with an auto reply to client email, after that the client will 
            recieve work invitation from a coach in whatsapp.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
            <button
              onClick={() => setShowVideo2(!showVideo2)}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
            >
              <FaVideo /> Video
            </button>
            <a
              href="https://github.com/yazidDz06/Gym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <FaGithub /> GitHub
            </a>
             <a
              href="https://coachingplateforme.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
             Live Demo
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition flex flex-col">
          {showVideo3 ? (
            <video
              src={vid3}
              controls
              autoPlay
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          ) : (
            <img
              src={proj3}
              alt="Project 3"
              className="rounded-lg mb-4 w-full aspect-[16/9] object-cover"
            />
          )}
          <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
          <p className="text-gray-600 mb-4 flex-1">
            E-commerce platform with authentication, product list, landing page,
            cart, order page, search bar, works with and without login. Admin
            panel to manage categories, products, users, dashboard, orders, and
            restricted access.
          </p>
          <div className="flex flex-wrap gap-4 mt-auto">
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
              <FaGithub /> Backend
            </a>
            <a
              href="https://github.com/yazidDz06/frontendecommercevercel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <FaGithub /> Frontend
            </a>
            <a
              href="https://ecomyazid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Live Demo
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
      <footer id="footer" className="bg-gradient-to-b from-gray-50 to-blue-900 text-white py-8">
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

