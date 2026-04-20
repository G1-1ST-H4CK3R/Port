const terminalBody = document.getElementById("terminal-body");

const portfolioCommands =
  [
    "about me",
    "education",
    "certificates",
    "CV",
    "research",
    "skills",
    "projects", /* */
    "experience",
    "contact",
    "quote",
    "clear"
  ];

const aboutMeText = 'I am George Koupparis, a Cypriot-Romanian 24 years old student currently pursuing a B.Sc. degree in Computer Science. Throughout my academic career, I have developed a strong interest in networks and cybersecurity, particularly in ethical hacking. In addition, I have developed a strong passion for web, game, and app development. Looking ahead, I plan to pursue an M.Sc. in Cybersecurity, where I hope to contribute to the advancement and protection of tomorrow’s technologies. I am highly motivated to learn and continuously strengthen both my technical and personal skills. I am able to work under deadlines, perform well under pressure and collaborate effectively as part of a team.'
const educationLines =
  [
    "High School Diploma GPA: 17.6/20",
    "Fulfilled Military Service",
    "Bachelor's Degree, University of Cyprus GPA: 6/10",
    "Master's Degree loading..."
  ];
const certificatesLines =
  [
    "Cisco CCNAv7 - Introduction to Networks",
    "Cisco CCNAv7 - Routing, and Switching Essentials",
    "ECDL Certificates - Word Processing, Excel, Photoshop, Powerpoint, Access, Computer and Online Essentials",
  ]
const experienceLines =
  [
    "Barista — Developed strong communication, customer service, and multitasking skills in a fast paced work environment",
    "Bowling Technician — Responsible for maintaining equipment, troubleshooting technical issues and ensuring smooth daily operations"
  ];
const quoteLines =
  [
    "2b || ! 2b ",
    "if everything is not under CTRL take a <br/>",
    "! false its funny because its true",
    "1 + 1 = 10 think about it",
    "life has no CTRL + z",
    "while (!success) keepTrying()",
    "trust the fork()",
    "the Code father",
    "just do() it",
    "programmers wear glasses because they dont C",
    "i'd tell you a joke about UDP but you might not get it",
    "ESC reality"
  ];

const contactHTML = `
  <ul class="social-icons">
    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="https://www.facebook.com/giwrgos.koumparis" target="_blank" rel="noopener noreferrer">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </a>
      <div class="text">Facebook</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="https://www.instagram.com/giwrgoskoumparis/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </a>
      <div class="text">Instagram</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="https://www.linkedin.com/in/george-koupparis-a22583305/" target="_blank" rel="noopener noreferrer">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0a53.79 53.79 0 0 1 53.79 53.8c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </a>
      <div class="text">LinkedIn</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="https://www.researchgate.net/profile/George-Koupparis" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.simpleicons.org/researchgate/ff0000"
          alt="ResearchGate"
        class="svg">
      </a>
      <div class="text">ResearchGate</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="mailto:gkoupp01@ucy.ac.cy">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M502.3 190.8 327.4 338c-15.2 12.8-37.6 12.8-52.8 0L9.7 190.8C3.8 186 0 178.8 0 171.2V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v59.2c0 7.6-3.8 14.8-9.7 19.6zM0 214.4V400c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V214.4L347.6 352.2c-27.6 23.2-67.6 23.2-95.2 0L0 214.4z"></path>
        </svg>
      </a>
      <div class="text">Email</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="tel:+35799020903">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M511.1 387l-23.6 102.6c-3.2 13.9-15.5 23.8-29.8 22.4C249.2 492.3 19.7 262.8 .9 54.3-1 40 8.9 27.7 22.8 24.5L125.4 .9c12.8-2.9 26 3.7 31.3 15.7l47.3 110.3c4.6 10.8 1.5 23.3-7.6 30.7l-54.4 44.5c34.7 70.7 92.1 128.1 162.8 162.8l44.5-54.4c7.4-9.1 19.9-12.2 30.7-7.6l110.3 47.3c12 5.2 18.6 18.5 15.7 31.3z"></path>
        </svg>
      </a>
      <div class="text">Phone</div>
    </li>

    <li class="iso-pro">
      <span></span>
      <span></span>
      <span></span>
      <a href="https://github.com/G1-1ST-H4CK3R" target="_blank" rel="noopener noreferrer">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-3.3 .3-5.6-1.3-5.6-3.7 0-2 2.3-3.7 5.2-3.7 3-.3 5.6 1.3 5.6 3.7zm-31.7-4.5c-.7 2 1.3 4.3 4.3 4.9 2.9 1 6 0 6.6-2 .7-2-1.3-4.3-4.3-5.2-2.9-.7-5.9 .3-6.6 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.6 .3 2 2.6 3.3 5.6 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-2.6-3.2-5.6-2.6zm188.5-69.1c-1.3-1-3-1.7-4.6-2.3-3.6-1.3-7.6-1.7-11.5-1.3-6.3 .7-12.2 3.3-17.5 7.3-3.7 2.9-6.9 6.3-9.9 9.9-2 2.6-4 5.2-6.3 7.6-6.3 7.6-13.5 14.5-21.8 20.1-4.3 2.9-8.9 5.6-13.8 7.6-2.3 1-4.6 1.7-7.3 2.3-2.3 .7-4.6 1-6.9 1-1.7 0-3.3 0-4.9-.3-1.3 0-2.6-.3-3.7-.7-.3 0-.7 0-1-.3v-28.1c0-20.1-6.6-34.9-13.8-44.8 45.5-5.2 93.5-22.8 93.5-102.6 0-22.8-8.3-41.5-21.8-56.3 2.3-5.2 9.6-26.2-2-54.6 0 0-17.8-5.6-58.4 21.5-17-4.6-35.2-6.9-53.3-6.9s-36.2 2.3-53.3 6.9C183.1 91.7 165.3 97.3 165.3 97.3c-11.5 28.4-4.3 49.4-2 54.6-13.5 14.8-21.8 33.5-21.8 56.3 0 79.5 47.7 97.4 93.2 102.6-5.9 8.3-11.2 22.8-13.2 36.2-11.9 5.2-42.2 14.2-60.7-16.8 0 0-11.2-20.5-32.3-22.2 0 0-20.5-.3-1.3 12.9 0 0 13.8 6.6 23.5 31.3 0 0 12.5 38.9 70.1 25.8v43.5c0 .7-.3 1.3-1 1.7-1 .7-2.6 1.3-4.3 2-3.6 1.3-7.9 2.9-12.9 4.3-7.9 2.3-16.8 4.6-25.8 6.6-12.9 2.9-26.2 5.2-38.2 6.9C52.6 470.6 0 364.3 0 245.8 0 110 110 0 245.8 0S491.6 110 491.6 245.8c0 106.7-68.1 197.4-163 231.1v-2.6c0-8.9 0-19.1 0-30 .3-10.2 .3-20.8 .3-29.7 0-10.2 .3-19.1 .3-25.1 0-6.3 0-10.2 0-10.9 0-6.6-2.3-11.9-5.9-15.8 45.8-5.2 93.8-22.8 93.8-102.9 0-22.8-8.3-41.5-21.8-56.3 2.3-5.2 9.6-26.2-2-54.6 0 0-17.8-5.6-58.4 21.5-17-4.6-35.2-6.9-53.3-6.9z"></path>
        </svg>
      </a>
      <div class="text">GitHub</div>
    </li>
  </ul>
`;

const thesisHTML = `
  <div class="thesis-link-box">
    <a href="./Assets/Secure UAV.pdf" target="_blank" rel="noopener noreferrer" class="thesis-link">
      Secure UAV
    </a>
  </div>
  <div class="thesispres-link-box">
    <a href="./Assets/ThesisPresentation.pptx" target="_blank" rel="noopener noreferrer" class="thesis-link">
      Secure UAV Presentation
    </a>
  </div>
`;

const skillsCardsData = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    label: "Java",
    title: "Java",
    description: "Object-Oriented Programming, Classes, Inheritance, Multithreading, Algorithms and Problem Solving."
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    label: "C",
    title: "C",
    description: "Pointers, Memory Management, Algorithms, Cuda, OpenMp and Low-level programming concepts"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    label: "C++",
    title: "C++",
    description: "Fundamental programming concepts, functions and Structures"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    label: "SQL",
    title: "SQL",
    description: "DDL, DML, Relational Algebra, Joins, Queries, Store Procedures, Triggers and ER Modeling"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    label: "Python",
    title: "Python",
    description: "Basic Experience with Python and Scripting"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    label: "HTML",
    title: "HTML",
    description: "Page structure, Semantic Elements, Forms, DOM, Layout Sections and Accessibility"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    label: "CSS",
    title: "CSS",
    description: "Layouts, Responsive Design, Styling"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    label: "JavaScript",
    title: "JavaScript",
    description: "DOM manipulation, Events, Dynamic Interactivity, AJAX requests and JSON  data handling"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    label: "PHP",
    title: "PHP",
    description: "Server side scripting and Form handling"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    label: "Django",
    title: "Django",
    description: "Building dynamic web applications, templates, models and views"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    label: "Spring Boot",
    title: "Spring Boot",
    description: "REST APIs"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    label: "Bootstrap",
    title: "Bootstrap",
    description: "Responsive Design, Grid System and Components"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
    label: "Clojure",
    title: "Clojure",
    description: "Small experience with Clojure"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    label: "R",
    title: "R",
    description: "Small experience with R"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    label: "Linux",
    title: "Linux",
    description: "Linux File System, Terminal Commands and the Basics of Bash Scripting"
  },
  {
    icon: "https://cdn.imgbin.com/18/9/1/imgbin-anonymous-logo-2013-singapore-cyberattacks-zazzle-hacktivism-anonymous-PbcJP9fj9Ft1SeaP2kAahtmj2.jpg",
    label: "Cybersecurity",
    title: "Cybersecurity",
    description: "Basic Ethical Hacking, Network Security, Cryptography, Software Analysis and Anonimity, "
  },
  {
    icon: "https://static.vecteezy.com/system/resources/previews/027/075/812/non_2x/cisco-logo-transparent-free-png.png",
    label: "Networking",
    title: "Networking",
    description: "Network Architecture, Protocols, Wireshark, Network Analysis and Routing Algorithms"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
    label: "Blender",
    title: "Blender",
    description: "Basic 3D Modeling"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    label: "GitHub",
    title: "GitHub",
    description: "Commit, Push, Pull and Repositories"
  },
  {
    icon: "https://static.vecteezy.com/system/resources/previews/034/564/170/large_2x/mind-line-icon-vector.jpg",
    label: "Soft Skills",
    title: "Soft Skills",
    description: "Communication, Teamwork, Problem Solving and Algorithms"
  },
  {
    icon: "https://wallup.net/wp-content/uploads/2016/07/19/2737-Greek-Greece-flag.jpg",
    label: "Greek",
    title: "Greek",
    description: "Fluency in Greek language"
  },
  {
    icon: "https://images5.alphacoders.com/447/447959.jpg",
    label: "Romanian",
    title: "Romanian",
    description: "Basic Understanding and conversational skills"
  },
  {
    icon: "https://wallpaperaccess.com/full/649840.jpg",
    label: "English",
    title: "English",
    description: "Good understanding and conversational skills"
  },
  {
    icon: "https://wallpaperaccess.com/full/293921.jpg",
    label: "Russian",
    title: "Russian",
    description: "Very basic understanding with minimal conversational skills"
  }
];

const cvHTML = `
  <div class="thesis-link-box">
    <a href="./Assets/CV.pdf" target="_blank" rel="noopener noreferrer" class="thesis-link">
      My CV
    </a>
  </div>
`;


const projectsCardsData = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    label: "Bike E-Shop",
    title: "Bike E-Shop",
    description: "Python-Django project with dynamic pages Models, Views and Templates"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    label: "Weather Website",
    title: "Weather Website",
    description: "Built with HTML, CSS, JS, PHP and Bootstrap. Fetches data from the OpenWeatherMap API to display current weather information based on user input using JSON and AJAX"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    label: "Battle Ship",
    title: "Battle Ship",
    description: "Java Battle Ship game for 2 players implemented with classes and inheritance"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    label: "Cars Funding",
    title: "Cars Funding",
    description: "MySQL database with ER modeling, Store Procedures, Queries, Triggers and PHP"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    label: "Hotel System",
    title: "Hotel System",
    description: "REST API with SpringBoot for hotel management system"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    label: "R Statistical",
    title: "R Statistical",
    description: "R programs for numerical computation, simulation, statistical inference, and data visualization, including interval experiments and exploratory analysis of datasets"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    label: "Three Musks",
    title: "Three Musks",
    description: "Three Musketeers game in C with Memory Allocation and pointers"
  }
]

function createProjectsCarouselHTML() {
  return `
    <div class="skills-carousel-shell">
      <div class="skills-carousel">
        <div class="skills-carousel-track projects-track"></div>
      </div>
    </div>
  `;
}

function initProjectsCarousel() {
  const tracks = document.querySelectorAll(".projects-track:not([data-built='true'])");

  tracks.forEach((track) => {
    const doubledProjects = [...projectsCardsData, ...projectsCardsData];

    doubledProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "skills-card";

      card.innerHTML = `
        <div class="skills-card-front">
          <div class="skills-card-icon">
            <img src="${project.image}" alt="${project.title}" class="skills-card-icon-img">
          </div>
          <div class="skills-card-label">${project.label}</div>
        </div>

        <div class="skills-card-content">
          <h3 class="skills-card-title">${project.title}</h3>
          <p class="skills-card-description">${project.description}</p>
        </div>
      `;

      track.appendChild(card);
    });

    track.dataset.built = "true";
  });
}


function initProjectsCarousel() {
  const tracks = document.querySelectorAll(".projects-track:not([data-built='true'])");

  tracks.forEach((track) => {
    const doubledProjects = [...projectsCardsData, ...projectsCardsData];

    doubledProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "skills-card";

      card.innerHTML = `
        <div class="skills-card-front">
          <div class="skills-card-icon">
            <img src="${project.image}" alt="${project.title}" class="skills-card-icon-img">
          </div>
          <div class="skills-card-label">${project.label}</div>
        </div>

        <div class="skills-card-content">
          <h3 class="skills-card-title">${project.title}</h3>
          <p class="skills-card-description">${project.description}</p>
        </div>
      `;

      track.appendChild(card);
    });

    track.dataset.built = "true";
  });
}






function createSkillsCarouselHTML() {
  return `
    <div class="skills-carousel-shell">
      <div class="skills-carousel">
        <div class="skills-carousel-track"></div>
      </div>
    </div>
  `;
}

function initCarouselTouch(selector) {
  if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();

      const wasOpen = card.classList.contains("is-open");

      document.querySelectorAll(`${selector}.is-open`).forEach((openCard) => {
        openCard.classList.remove("is-open");
      });

      if (!wasOpen) {
        card.classList.add("is-open");
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(`${selector}.is-open`).forEach((card) => {
      card.classList.remove("is-open");
    });
  });
}


function initSkillsCarousel() {
  const tracks = document.querySelectorAll(".skills-carousel-track:not([data-built='true'])");

  tracks.forEach((track) => {
    const doubledSkills = [...skillsCardsData, ...skillsCardsData];

    doubledSkills.forEach((skill) => {
      const card = document.createElement("article");
      card.className = "skills-card";

      card.innerHTML = `
  <div class="skills-card-front">
    <div class="skills-card-icon">
      <img src="${skill.icon}" alt="${skill.title} icon" class="skills-card-icon-img">
    </div>
    <div class="skills-card-label">${skill.label}</div>
  </div>

  <div class="skills-card-content">
    <h3 class="skills-card-title">${skill.title}</h3>
    <p class="skills-card-description">${skill.description}</p>
  </div>
`;

      track.appendChild(card);
    });

    track.dataset.built = "true";
  });
}



const closeBtn = document.getElementById("terminal-btn-close");
const minimizeBtn = document.getElementById("terminal-btn-minimize");
const restoreTerminalBtn = document.getElementById("restore-terminal-btn");
const taskbar = document.getElementById("taskbar");
const terminal = document.getElementById("terminal");

if (closeBtn && terminal) {
  closeBtn.addEventListener("click", () => {
    terminal.classList.add("terminal-closing");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 400);
  });
}

if (minimizeBtn && terminal && taskbar && restoreTerminalBtn) {
  minimizeBtn.addEventListener("click", () => {
    terminal.classList.add("terminal-minimized");
    taskbar.classList.add("taskbar-visible");
  });

  restoreTerminalBtn.addEventListener("click", () => {
    terminal.classList.remove("terminal-minimized");
    taskbar.classList.remove("taskbar-visible");

    if (terminalInput) {
      terminalInput.focus();
    }
  });
}


async function addHTMLCommandOutput(html, showPrompt = true) {
  const line = document.createElement("div");
  line.className = "terminal-line";

  if (showPrompt) {
    const prompt = document.createElement("span");
    prompt.className = "terminal-prompt";
    prompt.textContent = "root@GK:~$ ";
    line.appendChild(prompt);
  }

  const htmlContainer = document.createElement("div");
  htmlContainer.className = "terminal-html-output";
  htmlContainer.innerHTML = html;

  line.appendChild(htmlContainer);
  appendBeforeInput(line);

  terminalBody.scrollTop = terminalBody.scrollHeight;
  await wait(lineDelay);
}




const terminalLines = [
  {
    prompt: "root@GK:~$ ",
    parts: [
      { type: "text", value: "Welcome to my portfolio!" }
    ]
  },
  {
    prompt: "root@GK:~$ ",
    parts: [
      { type: "text", value: "Type or click " },
      { type: "button", id: "help-btn", label: "help" },
      { type: "text", value: " to see the available commands" }
    ]
  }
];

const typingSpeed = 35;
const lineDelay = 400;

let inputRow = null;
let terminalInput = null;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeText(element, text, speed = typingSpeed) {
  for (let i = 0; i < text.length; i++) {
    element.append(text[i]);
    await wait(speed);
  }
}

function appendBeforeInput(element) {
  if (inputRow && inputRow.parentNode === terminalBody) {
    terminalBody.insertBefore(element, inputRow);
  } else {
    terminalBody.appendChild(element);
  }
}

function hideInputRow() {
  if (inputRow) {
    inputRow.style.display = "none";
  }
}

function showInputRow() {
  if (inputRow) {
    inputRow.style.display = "flex";
  }

  if (terminalInput) {
    terminalInput.focus();
  }
}

async function renderTerminalLine(lineData) {
  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prompt";
  prompt.textContent = lineData.prompt;

  const textContainer = document.createElement("span");
  textContainer.className = "terminal-text";

  line.appendChild(prompt);
  line.appendChild(textContainer);
  appendBeforeInput(line);

  for (const part of lineData.parts) {
    if (part.type === "text") {
      await typeText(textContainer, part.value);
    }

    if (part.type === "button") {
      const button = document.createElement("button");
      button.id = part.id;
      button.className = "terminal-inline-btn";
      button.textContent = part.label;
      textContainer.appendChild(button);

      if (part.id === "help-btn") {
        button.addEventListener("click", async () => {
          hideInputRow();
          await handleCommand("help");
        });
      }
    }
  }

  terminalBody.scrollTop = terminalBody.scrollHeight;
  await wait(lineDelay);
}

function createInputRow() {
  inputRow = document.createElement("div");
  inputRow.className = "terminal-line terminal-input-row";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prompt";
  prompt.textContent = "root@GK:~$ ";

  terminalInput = document.createElement("input");
  terminalInput.type = "text";
  terminalInput.id = "terminal-input";
  terminalInput.className = "terminal-input";
  terminalInput.autocomplete = "off";
  terminalInput.spellcheck = false;

  inputRow.appendChild(prompt);
  inputRow.appendChild(terminalInput);
  terminalBody.appendChild(inputRow);

  terminalInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = terminalInput.value.trim();
      if (!command) return;

      if (command.toLowerCase() === "help") {
        hideInputRow();
      }

      await handleCommand(command);
    }
  });

  terminalInput.focus();
}

async function addUserCommandLine(command) {
  const newLine = {
    prompt: "root@GK:~$ ",
    parts: [{ type: "text", value: command }]
  };

  await renderTerminalLine(newLine);
}

async function addCommandOutput(text) {
  const newLine = {
    prompt: "root@GK:~$ ",
    parts: [{ type: "text", value: text }]
  };

  await renderTerminalLine(newLine);
}

async function showHelpLine() {
  const line = document.createElement("div");
  line.className = "terminal-line";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prompt";
  prompt.textContent = "root@GK:~$ ";

  const textContainer = document.createElement("span");
  textContainer.className = "terminal-text";

  line.appendChild(prompt);
  line.appendChild(textContainer);
  appendBeforeInput(line);

  await typeText(textContainer, "Available commands: ");

  for (let i = 0; i < portfolioCommands.length; i++) {
    const cmdBtn = document.createElement("button");
    cmdBtn.className = "terminal-command-btn";
    cmdBtn.textContent = portfolioCommands[i];
    cmdBtn.dataset.command = portfolioCommands[i];

    cmdBtn.addEventListener("click", async () => {
      hideInputRow();
      await handleCommand(cmdBtn.dataset.command);
    });

    textContainer.appendChild(cmdBtn);

    if (i < portfolioCommands.length - 1) {
      textContainer.appendChild(document.createTextNode(" "));
    }
  }

  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quoteLines.length);
  return quoteLines[randomIndex];
}

async function runCommand(command) {
  const cmd = command.toLowerCase().trim();

  if (cmd === "help") {
    await showHelpLine();
    return;
  }

  if (cmd === "cv") {
    await addHTMLCommandOutput(cvHTML, false);
    return;
  }

  if (cmd === "about me") {
    await addCommandOutput(aboutMeText);
    return;
  }

  if (cmd === "skills") {
    await addHTMLCommandOutput(createSkillsCarouselHTML(), false);
    initSkillsCarousel();
    initCarouselTouch(".skills-card");
    return;
  }

  if (cmd === "contact") {
    await addHTMLCommandOutput(contactHTML, false);
    return;
  }

  if (cmd === "projects") {
    await addHTMLCommandOutput(createProjectsCarouselHTML(), false);
  initProjectsCarousel();
  initCarouselTouch(".skills-card");
    return;
  }

  if (cmd === "experience") {
    for (const line of experienceLines) {
      await addCommandOutput(line);
    }
    return;
  }

  if (cmd === "education") {
    for (const line of educationLines) {
      await addCommandOutput(line);
    }
    return;
  }

  if (cmd === "certificates") {
    for (const line of certificatesLines) {
      await addCommandOutput(line);
    }
    return;
  }

  if (cmd === "research") 
  {
    await addHTMLCommandOutput(thesisHTML, false);
    return;
  }

  if (cmd === "resume") {
    await addCommandOutput("Resume section selected.");
    return;
  }

  if (cmd === "quote") {
    await addCommandOutput(getRandomQuote());
    return;
  }

  if (cmd === "clear") 
  {
    terminalBody.innerHTML = "";
    inputRow = null;
    terminalInput = null;
    createInputRow();
    return;
  }

  await addCommandOutput(`Command ${command} not found `);
}

async function handleCommand(command) {
  const cleaned = command.trim();
  if (!cleaned) return;

  if (terminalInput) {
    terminalInput.value = "";
  }

  await addUserCommandLine(cleaned);
  await runCommand(cleaned);

  showInputRow();
}

async function startTerminalIntro() {
  terminalBody.innerHTML = "";

  for (const line of terminalLines) {
    await renderTerminalLine(line);
  }

  createInputRow();
}

startTerminalIntro();