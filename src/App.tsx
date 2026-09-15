import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Whiteboard",
    images: [
      "/src/assets/placeholder.png",
      "/src/assets/placeholder.png",
    ],
    description:
      "A realtime collaborative whiteboard built with React, TypeScript, Canvas and WebSockets.",
    technologies: ["React", "TypeScript", "Canvas", "WebSockets"],
  },
  {
    id: 2,
    title: "Project Two",
    images: [
      "/src/assets/placeholder.png",
      "/src/assets/placeholder-2.png",
    ],
    description: "Short description of the second project.",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 3,
    title: "Project Three",
    images: [
      "/src/assets/placeholder.png",
      "/src/assets/placeholder-2.png",
    ],
    description: "Short description of the third project.",
    technologies: ["Java", "Spring", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Project Four",
    images: [
      "/src/assets/placeholder.png",
      "/src/assets/placeholder-2.png",
    ],
    description: "Short description of the fourth project.",
    technologies: ["TypeScript", "React"],
  },
];

export default function PortfolioPage() {

  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const preventScroll = (event: WheelEvent) => {
      event.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });

    const timer = setTimeout(() => {
      window.removeEventListener("wheel", preventScroll);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);

  const project = projects[activeProject];
  const initialViewportHeight = window.innerHeight;

  document.documentElement.style.setProperty(
    "--section-height",
    `${initialViewportHeight}px`
  );
  return (
    <main className="portfolio">

      {/* Introduction */}
      <section id="home" className="introduction-section">

        <header className="portfolio-header">
          <div className="portfolio-logo">
            <span className="logo-name">Ago-Laur Luik</span>
            <span className="logo-initials">ALL</span>
          </div>

          <nav>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="introduction-content">
          <h1>FULL-STACK DEVELOPER</h1>

          <p>
            I like building things from the ground up, understanding how they work,
            and figuring out where they break.
          </p>
        </div>

        <div className="section-divider">
          <img
            src="/src/assets/divider7.svg"
            alt=""
          />
        </div>

      </section>

      {/* About */}
      <section id="about" className="about-section page-content">

        <div className="about-header">
          <span className="section-label">
            02
          </span>

          <h2>
            About Me and My Background
          </h2>

          <p className="about-intro">
            I'm a full-stack developer with over two years of
            hands-on experience building web applications.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-image about-profile-image">
            <img
              src="/src/assets/Ago.png"
              alt="Ago-Laur Luik"
            />
          </div>

          <div className="about-text">

            <div className="about-block about-background">
              <span className="about-label">BACKGROUND</span>

              <p>
                I've been developing for over two years, recently completing
                the Full Stack Development Programme at Kood/Jõhvi. Most of
                my experience has come from building projects and learning
                through solving problems rather than following predefined
                paths.
              </p>
            </div>

            <div className="about-block about-currently">
              <span className="about-label">CURRENTLY</span>

              <p>
                I'm focused on building projects that challenge me to go
                deeper into both frontend and backend development while
                continuing to grow as a developer.
              </p>
            </div>

            <div className="about-block about-hackathons">
              <span className="about-label">HACKATHONS</span>

              <p>
                I've participated in hackathons including the Wise Hackathon
                and Junction in Espoo. At Junction 2025, I worked on the
                Pfizer × Lääkärikeskus Aava challenge, where our team placed
                in the top 3.
              </p>

              <div className="about-image about-hackathon-image">
                <img
                  src="/src/assets/hackatJ.jpg"
                  alt="Junction 2025 hackathon"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="section-divider">
          <img
            src="/src/assets/divider5.svg"
            alt=""
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects page-content">

        <aside className="project-navigation">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-navigation-item ${index === activeProject ? "active" : ""
                }`}
              onClick={() => setActiveProject(index)}
            >
              <span className="project-number">
                0{project.id}
              </span>

              <span className="project-title">
                {project.title}
              </span>
            </button>
          ))}
        </aside>

        <div className="project-content">

          <div className="project-description">
            <div>
              <p className="project-label">
                PROJECT {String(project.id).padStart(2, "0")}
              </p>

              <h1>
                {project.title}
              </h1>

              <p className="description">
                {project.description}
              </p>
            </div>

            <div className="project-bottom">
              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href="#">Live Demo ↗</a>
                <a href="#">GitHub ↗</a>
              </div>
            </div>
          </div>

          <div className="project-visual">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
              />
            ))}
          </div>

        </div>

        <div className="section-divider">
          <img
            src="/src/assets/divider8.svg"
            alt=""
          />
        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="contact page-content">

        <div className="contact-title">
          <h2>Contact</h2>
        </div>
        <div className="contact-list">

          <div className="contact-links">
            <a href="mailto:ago.laur@gmail.com">
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">ago.laur@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ago-laur-luik-3a938437a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">LINKEDIN</span>
              <span className="contact-value">LinkedIn ↗</span>
            </a>

            <a href="https://www.dropbox.com/scl/fi/your-cv-file.pdf?rlkey=your-key&dl=1" target="_blank" rel="noopener noreferrer">
              <span className="contact-label">Curriculum Vitae</span>
              <span className="contact-value">Ago-Laur Luik</span>
            </a>
          </div>
        </div>

        <div className="section-divider">
          <img
            src="/src/assets/divider6.svg"
            alt=""
          />
        </div>

      </section>



    </main>
  );
}