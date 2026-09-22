import { useEffect, useState } from "react";
import "./App.css";

type Language = "en" | "et";

const projects = [
  {
    id: 1,
    title: "Realtime-Whiteboard",
    images: [
      "/src/assets/whiteboardPic.png",
      "/src/assets/whiteboardPic2.png",
    ],
    description:
      "A realtime collaborative whiteboard, inspired by similar tools like Excalidraw and Windows Paint. Users can draw, erase, and add text to the canvas, with all changes being synchronized in real-time across all connected clients. Currently, the project is in its early stages, and I'm actively working on adding new features and improving the user experience. Built by me and Rando Viimne.",
    technologies: ["React", "TypeScript", "Canvas", "WebSockets"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    images: [
      "/src/assets/eShop1.png",
      "/src/assets/eShop2.png",
    ],
    description: "Solo project: A simple e-commerce platform, that turned out to be a great learning experience. It features a product catalog, shopping cart, and checkout process.",
    technologies: ["React", "TypeScript", "Java", "SpringBoot", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: 3,
    title: "Browser Sumo Game",
    images: [
      "/src/assets/sumo1.png",
      "/src/assets/sumo2.png",
    ],
    description: "Simple browser-based sumo game. Instead of simple four directional movement, this game features more complex physics and interactions. Made by me, Rando Viimne and Jaanus Lille",
    technologies: ["TypeScript", "React", "NodeJS", "Canvas", "WebSockets"],
  }
];

const techLogos = [
  "/src/assets/react.svg",
  "/src/assets/typescript.svg",
  "/src/assets/nodeJS.svg",
  "/src/assets/java.svg",
  "/src/assets/spring.svg",
  "/src/assets/postgresql.svg",
  "/src/assets/docker.svg",
  "/src/assets/rabbitmq.svg",
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
          "A realtime collaborative whiteboard, inspired by similar tools like Excalidraw and Windows Paint. Users can draw, erase, and add text to the canvas, with all changes being synchronized in real-time across all connected clients. Currently, the project is in its early stages, and I'm actively working on adding new features and improving the user experience. Built by me and Rando Viimne.",
      },
      {
        title: "E-commerce Platform",
        description:
          "Solo project: A simple e-commerce platform that turned out to be a great learning experience. It features a product catalog, shopping cart, and checkout process.",
      },
      {
        title: "Browser Sumo Game",
        description:
          "Simple browser-based sumo game. Instead of simple four directional movement, this game features more complex physics and interactions. Made by me, Rando Viimne and Jaanus Lille.",
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
          "Reaalajas töötav koostöötahvel, mis on inspireeritud sellistest tööriistadest nagu Excalidraw ja Windows Paint. Kasutajad saavad lõuendile joonistada, kustutada ja teksti lisada ning kõik muudatused sünkroniseeritakse reaalajas kõigi ühendatud kasutajate vahel. Projekt on hetkel varajases arendusjärgus ning tegelen aktiivselt uute funktsioonide lisamise ja kasutajakogemuse parandamisega. Projekti arendame mina ja Rando Viimne.",
      },
      {
        title: "E-poe platvorm",
        description:
          "Iseseisev projekt: lihtne e-poe platvorm, millest kujunes väga hea õpikogemus. Projekt sisaldab toodete kataloogi, ostukorvi ja maksmise protsessi.",
      },
      {
        title: "Brauseri Sumo mäng",
        description:
          "Lihtne brauseris töötav sumomäng. Neljasuunalise lihtsa liikumise asemel kasutab mäng keerukamat füüsikat ja objektide omavahelist suhtlust. Tegime projekti koos Rando Viimse ja Jaanus Lillega.",
      },
    ],
  },
};

export default function PortfolioPage() {

  const [activeProject, setActiveProject] = useState(0);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

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
  const translatedProject = t.projectsData[activeProject];

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
                className={`language-button ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
              >
                <img src="/src/assets/uk-flag.svg" alt="English" />
              </button>

              <button
                className={`language-button ${language === "et" ? "active" : ""}`}
                onClick={() => setLanguage("et")}
                aria-label="Switch to Estonian"
              >
                <img src="/src/assets/estonia-flag.svg" alt="Estonian" />
              </button>
            </div>
          </nav>
        </header>

        <div className="introduction-content">
          <h1 className="text-display">
            FULL-STACK DEVELOPER
          </h1>

          <p className="text-body-large">
            {t.introduction}
          </p>
        </div>

        <div className="tech-stack">
          {techLogos.map((logo, index) => (
            <img
              key={index}
              className="tech-logo"
              src={logo}
              alt=""
            />
          ))}
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

          <h2 className="text-large-title">
            {t.aboutMe}
          </h2>

          <p className="about-intro text-body">
            {t.aboutIntro}
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
              <span className="about-label text-label">
                {t.background}
              </span>

              <p>{t.backgroundText}</p>
            </div>

            <div className="about-block about-currently">
              <span className="about-label text-label">
                {t.currently}
              </span>

              <p className="text-body-small">
                {t.currentlyText}
              </p>
            </div>

            <div className="about-block about-hackathons">
              <span className="about-label text-label">
                {t.hackathons}
              </span>

              <p className="text-body-small">
                {t.hackathonsText}
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

        <div className="projects-header">
          <h2 className="text-section-title">
            {t.projects}
          </h2>
        </div>

        <aside className="project-navigation">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-navigation-item ${index === activeProject ? "active" : ""
                }`}
              onClick={() => setActiveProject(index)}
            >
              <span className="project-number text-label">
                0{project.id}
              </span>

              <span className="project-title">
                {t.projectsData[index].title}
              </span>
            </button>
          ))}
        </aside>

        <div className="project-content">

          <div className="project-description">
            <div>
              <p className="project-label text-label">
                {t.project} {String(project.id).padStart(2, "0")}
              </p>

              <h2 className="text-section-title">
                {t.projectsData[activeProject].title}
              </h2>

              <p className="description text-body-small">
                {translatedProject.description}
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
                <a href="#"> {t.liveDemo}</a>
                <a href="#"> {t.github}</a>
              </div>
            </div>
          </div>

          <div className="project-visual">
            {project.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                onClick={() => setSelectedImage(image)}
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
              <span className="contact-value">ago.laur@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ago-laur-luik-3a938437a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label text-label">
                {t.linkedin}
              </span>
              <span className="contact-value">LinkedIn ↗</span>
            </a>

            <a href="https://www.dropbox.com/scl/fi/your-cv-file.pdf?rlkey=your-key&dl=1" target="_blank" rel="noopener noreferrer">
              <span className="contact-label text-label">
                {t.curriculumVitae}
              </span>
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


      <div
        className={`image-lightbox ${selectedImage ? "open" : ""}`}
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