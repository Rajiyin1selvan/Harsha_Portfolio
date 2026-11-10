import React, { useState, useEffect } from 'react';

// Import your CSS file (assuming index.css is in the same 'src' directory)
import './index.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Import your image directly from src (make sure the filename matches your actual image)
// For example, if your image is named 'profile.png' and it's in the 'src' folder:
import myImage from './myImage.png';
import rover from './rover.png';
import cof from './coffee.png';  
import seo from './seo.png';
import typ from './type.png';
import wn from './webnam.png';
import image from './Mera_imgbc.jpeg';
import drone from './drone.png'
import Med from './Meditation by the River.png'
// --- Navbar Component ---
const Navbar = () => {
    // State for responsive menu if you decide to add it later
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    Harsha
                </a>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#about" className="nav-links">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#certifications" className="nav-links">
                            Certifications
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-links">
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links">
                            Contact Me
                        </a>
                    </li>
                </ul>
                {/* Hamburger icon for smaller screens if you implement it */}
               <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </div> 
            </div>
        </nav>
    );
};



// --- Home Component ---
const Home = () => {
    const [nameVisible, setNameVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    useEffect(() => {
        const nameTimer = setTimeout(() => setNameVisible(true), 500);
        const descTimer = setTimeout(() => setDescriptionVisible(true), 1500);
        return () => {
            clearTimeout(nameTimer);
            clearTimeout(descTimer);
        };
    }, []);

    return (
        <section id="home" className="home-section">
            <div className="home-content-wrapper">
                <div className="home-left">
                    <h1 className={`name-animation ${nameVisible ? 'slide-in' : ''}`}>
                        <span className="name-bold">Hello there, I'm HarshaVadhan</span>
                        <span className="name-bold">Welcome to My Portfolio</span>
                    </h1>
                    <p className={`description-animation ${descriptionVisible ? 'pop-in' : ''}`}>
                    I am a <b>Full Stack Developer</b> specializing in robust software solutions and a <b>UI/UX Designer</b> dedicated to crafting intuitive user experiences. Separately, I possess strong skills in <b>3D model creation using Fusion 360</b>, bringing physical designs to life. Automation and Robotics Engineering graduate from Amrita Vishwa Vidyapeetham, my diverse technical background fuels my drive to build innovative and impactful digital products.
                    </p>
                </div>
                <div className="home-right">
                    <div className='profile-container'>
                        <img src={image} alt="Anjum Parwez" className="profile-image" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

// --- About Component ---
const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>About Me</h2>
                <p>
                    I am a highly motivated and detail-oriented individual with a strong foundation in both software development and user experience design. My current studies in Automation and Robotics Engineering provide me with a unique perspective on building intelligent and efficient systems. I thrive in challenging environments and am always eager to learn new technologies and methodologies to deliver impactful solutions.
                </p>
                <p>
                    My expertise spans across full-stack development, including front-end frameworks like React, and back-end technologies. I also possess a keen eye for design, ensuring that my applications are not only functional but also aesthetically pleasing and intuitive for users.
                </p>
                {/* Add more details or a timeline if you want */}
            </div>
        </section>
    );
};

// --- Projects Component ---
const Projects = () => {
    const projectList = [
        {
            name: 'Fertilizer Spraying System for Agriculture Drone (3D Design)',
            description: 'Designed a fertilizer spraying system which can be controlled using KK Flight controller, Made for F450 Drones',
            technologies: ['Fusion 360', 'Online CFD', 'CURA'],
            link: '#', // Replace with actual project link
            image: drone
        },
        {
            name: 'Autonomous Delivery Robot',
            description: 'Designed a Mobile autonomous delivery robot using Fusion 360 for mechanical design. Simulated movement and navigation in Gazebo in ROS2 Humble.',
            technologies: ['Fusion 360', 'CFD', 'ROS 2', 'Gazebo'],
            link: '#',
            image: rover
        },
        {
            name: 'Remote Controlled Floor Cleaning Bot',
            description: 'Designed a Floor Cleaning Robot for efficient wet and dry cleaning for individuals with health constraints. ',
            technologies: ['Fusion 360'],
            link: '#',
            image: myImage,
        },
        {
            name: 'Namaha AI',
            description: 'Appointment Booking website - MERN Stack Website',
            technologies: ['React Js', 'Express Js', 'Node Js', 'Mongo DB'],
            link: '#',
            image: wn,
        },
        {
            name: 'Hashtag Recoomendation System for SEO',
            description: ' Developed a content-based hashtag recommendation system using Flask and Scikit-learn, where users input video titles or tags to get relevant hashtags. Utilized NLP techniques and TF-IDF vectorization to compute cosine similarity between tags. Also implemented a collaborative filtering feature using randomized tag suggestions. Designed a responsive front-end with HTML, CSS, and JavaScript, and integrated it with the Flask backend for real-time hashtag generation',
            technologies: ['Python', 'Scikit-Learn', 'Excel', 'Pandas', 'Numpy', 'NLP', 'Flask', 'HTML', 'CSS', 'javascript'],
            link: '#',
            image: seo,
        },
        {
            name: 'Type Master',
            description: 'Type Master is an interactive, web-based React application designed to enhance typing speed and accuracy. It offers dynamic paragraph selection and real-time feedback on Words Per Minute (WPM) and accuracy, highlighting correct and incorrect characters. The app features an engaging gaming-inspired aesthetic with custom CSS and specialized fonts like Press Start 2P. Users receive a comprehensive "Game Stats" summary after each session, with easy reset and "Play Again" options. Built with React.js, JavaScript, and custom CSS, its purpose is to provide an accessible and enjoyable tool for improving typing proficiency.',
            technologies: ['React Js', 'CSS', 'Github'],
            link: '#',
            image: typ,
        },
        {
            name: 'Mantra Japa',
            description: 'Mantra Japa is a website on counting the number of japs mentioned as per shahsthras on desired mantras or nama.',
            technologies: ['React Js', 'CSS', 'Github'],
            link: '#',
            image: typ,
        },
        {
            name: 'Filter Coffee shop static website',
            description: 'Static Website for a filter coffee shop, a typical landing page',
            technologies: ['HTML5' , 'CSS', 'Javascript'],
            link: '#',
            image: cof,
        },
        {
            name: 'Sanatan App',
            description: 'It is a video streaming platform for Devotional and Spiritual Contents',
            technologies: ['Flutter' , 'Firebase', 'GetX'],
            link: '#',
            image: Med,
        },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Certifications Component ---
const Certifications = () => {
    const certificationList = [
        {
            name: 'Foundations of User Experience Design',
            issuer: 'Google',
            date: 'September 2023',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_completion-certificate-for-foundations-of-activity-7109198832600588288-yJhh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8', // Replace with actual certificate link
            icon: '🔗'
        },
        {
            name: 'UI/UX for Begineers',
            issuer: 'Great Learning',
            date: 'April 2023',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_ui-ux-for-beginners-course-completion-certificate-activity-7333058855435677700-4XqA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        {
            name: 'Crash Course on Python',
            issuer: 'Google',
            date: 'November 2023',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_completion-certificate-for-crash-course-on-activity-7135574912286539776-GWj6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        {
            name: 'Fundamentals of AI and ML.',
            issuer: 'Infosys Springboard',
            date: 'January 2025',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_infosys-springboard-skillsoft-activity-7281932011697512448-Lexa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        {
            name: 'Deloitte Australia - Data Analytics: Job Simulation',
            issuer: 'Forage',
            date: 'April 2025',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_im-happy-to-share-that-ive-obtained-a-new-activity-7319982781118189568-Y4Qc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        {
            name: 'MatLab Simulink Onramp Course',
            issuer: 'Matlab',
            date: 'March 2024',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_simulink-onramp-activity-7333064127235403776-MHoe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        {
            name: 'AI in Digital Marketing',
            issuer: 'Great Learning',
            date: 'June 2023',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_ai-in-digital-marketing-course-completion-activity-7333058759360991234-57We?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        
        {
            name: 'Introduction to Digital Marketing',
            issuer: 'Great Learning',
            date: 'June 2023',
            link: 'https://www.linkedin.com/posts/harsha-vadhan-972b88255_1000-free-courses-with-free-certificates-activity-7034556687634112512-GZFw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8AF2YB14ybLAqoQ4HGcjoiOVl02YdjnB8',
            icon: '🔗'
        },
        
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2>Certifications</h2>
                <div className="certification-list">
                    {certificationList.map((cert, index) => (
                        <div key={index} className="certification-item">
                            <span className="cert-icon">{cert.icon}</span>
                            <div className="cert-details">
                                <h3>{cert.name}</h3>
                                <p>{cert.issuer} • {cert.date}</p>
                            </div>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                View Credential
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Skills Component ---
const Skills = () => {
    const programmingSkills = ['Python', 'C', 'C++', 'HTML', 'CSS', 'Javascript'];
    const frontendSkills = ['React.js', 'HTML5', 'CSS3', 'Sass', 'Responsive Design'];
    const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Firebase'];
    const uiuxSkills = ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'];
    const roboticsAutomationSkills = ['ROS 2', 'PLC Programming', 'Industrial Automation', 'Machine Learning'];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Programming Languages</h3>
                        <ul>
                            {programmingSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <ul>
                            {frontendSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Backend Development</h3>
                        <ul>
                            {backendSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>UI/UX Design</h3>
                        <ul>
                            {uiuxSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Robotics & Automation</h3>
                        <ul>
                            {roboticsAutomationSkills.map((skill, index) => <li key={index}>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};



const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwcxBcU71-ZaF_wz8iElZZpOxvmSB7ycixH4DxSTA-bDOMapNm-uG8tkL8ErTYNPWrc/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.text(); 
            console.log('Google Apps Script response:', result);

            if (response.ok && result.includes('success')) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMsg(result);
                console.error('Server error:', result);
            }
        } catch (error) {
            setStatus('error');
            setErrorMsg(error.message);
            console.error('Network error:', error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contact Me</h2>
                <p className="contact-intro">
                    Have a project idea, a question, or just want to say hi? Feel free to reach out!
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" disabled={status === 'loading'} className="submit-button">
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                        <p className="status-message success">Message sent successfully!</p>
                    )}
                    {status === 'success' && (
    <p className="status-message success">Message sent successfully!</p>
)}

                    {status === 'error' && (
                        <p className="status-message error">
                            {errorMsg || 'Something went wrong. Please try again.'}
                        </p>
                    )}
                    
                </form>
            </div>
        </section>
    );
};

// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} HARSHAVADHAN E. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Rajiyin1selvan" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/harsha-vadhan-972b88255/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                    {/* Add other social media links */}
                </div>
            </div>
        </footer>
    );
};

// --- Main App Component (default export) ---
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <About />
                <Projects />
                <Certifications />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App; // <-- IMPORTANT: Export App as default
