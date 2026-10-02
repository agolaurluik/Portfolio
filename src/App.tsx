import { useEffect, useState } from "react";
import "./App.css";

// Images
import agoImage from "./assets/Ago.png";
import hackathonImage from "./assets/hackatJ.jpg";

import whiteboardPic from "./assets/whiteboardPic.png";
import whiteboardPic2 from "./assets/whiteboardPic2.png";

import eShop1 from "./assets/eShop1.png";
import eShop2 from "./assets/eShop2.png";

import sumo1 from "./assets/sumo1.png";
import sumo2 from "./assets/sumo2.png";

// Tech logos
import reactLogo from "./assets/react.svg";
import typescriptLogo from "./assets/typescript.svg";
import nodeJSLogo from "./assets/nodeJS.svg";
import javaLogo from "./assets/java.svg";
import springLogo from "./assets/spring.svg";
import postgresqlLogo from "./assets/postgresql.svg";
import dockerLogo from "./assets/docker.svg";
import rabbitmqLogo from "./assets/rabbitmq.svg";

// Other SVGs
import ukFlag from "./assets/uk-flag.svg";
import estoniaFlag from "./assets/estonia-flag.svg";

import divider1 from "./assets/divider1.svg";
import divider2 from "./assets/divider2.svg";
import divider5 from "./assets/divider5.svg";
import divider6 from "./assets/divider6.svg";

type Language = "en" | "et";

const projects = [
  {
    id: 1,
    title: "Realtime-Whiteboard",
    images: [whiteboardPic, whiteboardPic2],
    description:
      "A realtime collaborative whiteboard built with Canvas and WebSockets. Users can create and manipulate different objects, draw freely, add text, and collaborate on the same board with other users in real time. The project focuses on keeping changes synchronized between clients while allowing users to work independently without overwriting each other's changes. Built by me and Rando Viimne.",
    technologies: ["React", "TypeScript", "Canvas", "WebSockets"],
    github: "https://github.com/RandoVi/Realtime-Whiteboard",
    live: "https://your-live-project.com",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    images: [eShop1, eShop2],
    description:
      "A full-stack e-commerce platform developed as a solo project. It includes product browsing and filtering, user and guest shopping carts, authentication with Google OAuth, order processing, Stripe payments, and an admin dashboard. Built with React, Spring Boot, PostgreSQL, RabbitMQ, and Docker.",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "SpringBoot",
      "PostgreSQL",
      "RabbitMQ",
    ],
    github: "https://github.com/agolaurluik/Roadhouse-E-Commerce",
  },
  {
    id: 3,
    title: "Browser Sumo Game",
    images: [sumo1, sumo2],
    description:
      "A browser-based multiplayer sumo game with physics-based movement and realtime player synchronization. Instead of traditional four-directional movement, players control their characters through physics-based movement and collisions. Built by me, Rando Viimne, and Jaanus Lille.",
    technologies: [
      "TypeScript",
      "React",
      "NodeJS",
      "Canvas",
      "WebSockets",
    ],
    github: "https://github.com/agolaurluik/Sumo-Web-game",
  },
];

const techLogos = [
  reactLogo,
  typescriptLogo,
  nodeJSLogo,
  javaLogo,
  springLogo,
  postgresqlLogo,
  dockerLogo,
  rabbitmqLogo,
];

const translations = {
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutMe: "About Me",

    introduction:
      "I like building things from the ground up, understanding how they work, and figuring out where they break.",

    aboutIntro:
      "I'm a full-stack developer with over two years of hands-on experience building web applications.",

    background: "BACKGROUND",
    backgroundText:
      "I've been developing for over two years and have completed the Full Stack Development Programme at Kood/Jõhvi. Most of my experience has come from building projects and learning through solving problems rather than following predefined paths.",

    currently: "CURRENTLY",
    currentlyText:
      "I'm focused on improving user experience and interface design in my Whiteboard project, and I'm also exploring options for implementing AI features into the project. Additionally, I'm actively seeking new opportunities to further develop my skills.",

    hackathons: "HACKATHONS",
    hackathonsText:
      "I've participated in hackathons including the Wise Hackathon and Junction in Espoo. At Junction 2025, I worked on the Pfizer × Lääkärikeskus Aava challenge, where our team of four placed in the top 3.",

    project: "PROJECT",
    liveDemo: "Live Demo ↗",
    github: "GitHub ↗",

    email: "EMAIL",
    linkedin: "LINKEDIN",
    curriculumVitae: "Curriculum Vitae",

    footer: "Designed & built by Ago-Laur Luik 2026",

    projectsData: [
      {
        title: "Realtime-Whiteboard",
        description:
          "A realtime collaborative whiteboard built with Canvas and WebSockets. Users can create and manipulate different objects, draw freely, add text, and collaborate on the same board with other users in real time. The project focuses on keeping changes synchronized between clients while allowing users to work independently without overwriting each other's changes. Built by me and Rando Viimne.",
      },
      {
        title: "E-commerce Platform",
        description:
          "A full-stack e-commerce platform developed as a solo project. It includes product browsing and filtering, user and guest shopping carts, authentication with Google OAuth, order processing, Stripe payments, and an admin dashboard.",
      },
      {
        title: "Browser Sumo Game",
        description:
          "A browser-based multiplayer sumo game with physics-based movement and realtime player synchronization. Instead of traditional four-directional movement, players control their characters through physics-based movement and collisions. Built by me, Rando Viimne, and Jaanus Lille.",
      },
    ],
  },

  et: {
    about: "Minust",
    projects: "Projektid",
    contact: "Kontakt",
    aboutMe: "Minust",

    introduction:
      "Mulle meeldib asju algusest peale üles ehitada, mõista, kuidas need töötavad, ja välja selgitada, kus need katki lähevad.",

    aboutIntro:
      "Olen full-stack arendaja, kellel on üle kahe aasta praktilist kogemust veebirakenduste loomisel.",

    background: "TAUST",
    backgroundText:
      "Olen tegelenud arendusega üle kahe aasta ning lõpetanud Kood/Jõhvi Full Stack Development Programmi. Suurem osa minu kogemusest on tulnud projektide ehitamisest ja probleemide lahendamise kaudu õppimisest, mitte etteantud õppeplaanide järgimisest.",

    currently: "PRAEGU",
    currentlyText:
      "Keskendun oma Whiteboardi projektis kasutajakogemuse ja kasutajaliidese parandamisele ning uurin ka võimalusi AI-funktsioonide lisamiseks. Lisaks otsin aktiivselt uusi võimalusi oma oskuste edasiarendamiseks.",

    hackathons: "HÄKATONID",
    hackathonsText:
      "Olen osalenud häkatonidel, sealhulgas Wise Hackathonil ja Espoos toimunud Junctionil. Junction 2025-l töötasin Pfizer × Lääkärikeskus Aava väljakutse kallal, kus meie neljaliikmeline tiim saavutas 3 parima hulgas tulemuse.",

    project: "PROJEKT",
    liveDemo: "Live Demo ↗",
    github: "GitHub ↗",

    email: "E-POST",
    linkedin: "LINKEDIN",
    curriculumVitae: "CV",

    footer: "Disaininud ja ehitanud Ago-Laur Luik 2026",

    projectsData: [
      {
        title: "Realtime-Whiteboard",
        description:
          "Reaalajas koostööd võimaldav tahvel, mis on ehitatud Canvas'e ja WebSocketite abil. Kasutajad saavad luua ja muuta erinevaid objekte, vabalt joonistada, lisada teksti ning töötada sama tahvli kallal teiste kasutajatega reaalajas. Projekti üks peamisi eesmärke on hoida muudatused erinevate klientide vahel sünkroonis, võimaldades kasutajatel samal ajal iseseisvalt töötada ilma üksteise muudatusi üle kirjutamata. Projekti arendasime koos Rando Viimsega.",
      },
      {
        title: "E-poe platvorm",
        description:
          "Täisfunktsionaalne e-poe rakendus, mille arendasin iseseisva projektina. Rakendus sisaldab toodete sirvimist ja filtreerimist, kasutajate ja külaliste ostukorve, Google OAuth autentimist, tellimuste töötlemist, Stripe'i makseid ning administraatori vaadet.",
      },
      {
        title: "Brauseri Sumo mäng",
        description:
          "Veebipõhine mitme mängijaga sumomäng, mis kasutab füüsikapõhist liikumist ja mängijate reaalajas sünkroniseerimist. Traditsioonilise neljasuunalise liikumise asemel põhineb mäng tegelaste füüsikal, liikumisel ja kokkupõrgetel. Projekti arendasime koos Rando Viimse ja Jaanus Lillega.",
      },
    ],
  },
};

export default function PortfolioPage() {
  const [projectImageIndexes, setProjectImageIndexes] = useState<
    Record<number, number>
  >({});

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  const changeProjectImage = (
    projectId: number,
    direction: number,
    imageCount: number
  ) => {
    setProjectImageIndexes((current) => {
      const currentIndex = current[projectId] ?? 0;

      const nextIndex =
        (currentIndex + direction + imageCount) % imageCount;

      return {
        ...current,
        [projectId]: nextIndex,
      };
    });
  };

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
            <a href="#about">{t.about}</a>
            <a href="#projects">{t.projects}</a>
            <a href="#contact">{t.contact}</a>

            <div className="language-switch">
              <button
                className={`language-button ${
                  language === "en" ? "active" : ""
                }`}
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
              >
                <img src={ukFlag} alt="English" />
              </button>

              <button
                className={`language-button ${
                  language === "et" ? "active" : ""
                }`}
                onClick={() => setLanguage("et")}
                aria-label="Switch to Estonian"
              >
                <img src={estoniaFlag} alt="Estonian" />
              </button>
            </div>
          </nav>
        </header>

        <div className="introduction-content">
          <h1 className="text-display">FULL-STACK DEVELOPER</h1>

          <p className="text-body-large">{t.introduction}</p>
        </div>

        <div className="tech-stack">
          {techLogos.map((logo, index) => (
            <img
              key={index}
              className="tech-logo"
              src={logo}
              alt={`Technology logo ${index}`}
            />
          ))}
        </div>

        <div className="section-divider">
          <img src={divider1} alt="Section divider" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section page-content">
        <div className="about-header">
          <h2 className="text-large-title">{t.aboutMe}</h2>

          <p className="about-intro text-body">{t.aboutIntro}</p>
        </div>

        <div className="about-grid">
          <div className="about-image about-profile-image">
            <img src={agoImage} alt="Ago-Laur Luik" />
          </div>

          <div className="about-text">
            <div className="about-block about-background">
              <span className="about-label text-label">
                {t.background}
              </span>

              <p>{t.backgroundText}</p>
            </div>

            <div className="about-block about-currently">
              <span className="about-label text-label">
                {t.currently}
              </span>

              <p className="text-body-small">{t.currentlyText}</p>
            </div>

            <div className="about-block about-hackathons">
              <span className="about-label text-label">
                {t.hackathons}
              </span>

              <p className="text-body-small">{t.hackathonsText}</p>

              <div className="about-image about-hackathon-image">
                <img
                  src={hackathonImage}
                  alt="Junction 2025 hackathon, Me and my team with people from Pfizer × Lääkärikeskus Aava challenge"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider">
          <img src={divider5} alt="Section divider" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects page-content">
        <div className="projects-header">
          <h2 className="text-section-title">{t.projects}</h2>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 4).map((project, index) => {
            const imageIndex = projectImageIndexes[project.id] ?? 0;
            const currentImage = project.images[imageIndex];

            return (
              <article
                key={project.id}
                className="project-card"
              >
                {/* Project image */}
                <div className="project-card-image">
                  <img
                    src={currentImage}
                    alt={`${project.title} screenshot ${
                      imageIndex + 1
                    }`}
                    onClick={() => setSelectedImage(currentImage)}
                  />

                  {project.images.length > 1 && (
                    <>
                      <button
                        className="project-image-arrow project-image-arrow-left"
                        onClick={() =>
                          changeProjectImage(
                            project.id,
                            -1,
                            project.images.length
                          )
                        }
                        aria-label="Previous project image"
                      >
                        ←
                      </button>

                      <button
                        className="project-image-arrow project-image-arrow-right"
                        onClick={() =>
                          changeProjectImage(
                            project.id,
                            1,
                            project.images.length
                          )
                        }
                        aria-label="Next project image"
                      >
                        →
                      </button>

                      <div className="project-image-counter">
                        {imageIndex + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Project information */}
                <div className="project-card-content">
                  <h3 className="project-card-title">
                    {t.projectsData[index].title}
                  </h3>

                  <p className="project-card-description">
                    {t.projectsData[index].description}
                  </p>

                  <div className="project-card-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-card-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.github}
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="section-divider">
          <img src={divider2} alt="Section divider" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact page-content">
        <div className="contact-title">
          <h2 className="text-section-title">
            {t.contact} & Info
          </h2>
        </div>

        <div className="contact-list">
          <div className="contact-links">
            <a href="mailto:ago.laur@gmail.com">
              <span className="contact-label text-label">
                {t.email}
              </span>

              <span className="contact-value">
                ago.laur@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ago-laur-luik-3a938437a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label text-label">
                {t.linkedin}
              </span>

              <span className="contact-value">
                LinkedIn ↗
              </span>
            </a>

            <a
              href="https://docs.google.com/document/d/197vtPnk_0u667A93028na5o_3S0T2Zbnf4FK0sjsPYo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label text-label">
                {t.curriculumVitae}
              </span>

              <span className="contact-value">
                Ago-Laur Luik
              </span>
            </a>
          </div>
        </div>

        <div className="section-divider">
          <img src={divider6} alt="" />
        </div>
      </section>

      {/* Image lightbox */}
      <div
        className={`image-lightbox ${
          selectedImage ? "open" : ""
        }`}
        onClick={() => setSelectedImage(null)}
      >
        <button
          className="image-lightbox-close"
          onClick={() => setSelectedImage(null)}
          aria-label="Close image"
        >
          ×
        </button>

        {selectedImage && (
          <img
            src={selectedImage}
            alt="Full size project screenshot"
            onClick={(event) => event.stopPropagation()}
          />
        )}
      </div>

      <footer className="portfolio-footer">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}