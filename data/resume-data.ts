import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Mert Cakir",
  initials: "MC",
  location: "Hamburg, Germany",
  about:
    "Electrical and Electronics Engineer specializing in embedded systems and web development. Detail-oriented problem solver with a passion for innovative technology solutions.",
  summary:
    "Dedicated Electrical and Electronics Engineer with a passion for technology and innovation. Currently pursuing a second degree in Information Engineering to expand my technical expertise. I combine strong analytical skills with hands-on experience in electronics and software development. My international volunteering experiences across Europe have enhanced my cross-cultural communication, problem-solving abilities, and leadership skills, allowing me to thrive in diverse team environments.",
  avatarUrl: "https://github.com/cakirmert/cakirmert.github.io/blob/gh-pages/Mert.PNG?raw=true",
  personalWebsiteUrl: "https://www.linkedin.com/in/mert-cakir-0603481a7",
  contact: {
    email: "mert-cakir@outlook.com",
    tel: "+4917681120222",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cakirmert",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mert-cakir-0603481a7",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hamburg University of Applied Sciences",
      degree: "Bachelor's Degree in Information Engineering",
      start: "2021",
      end: "Present",
      logo: "/HAW.svg",
      link: "https://www.haw-hamburg.de/en/university/",
      description: "A seven-semester, ASIIN-accredited program with a strong practical focus. The curriculum includes lab work, student projects, and a 20-week industry placement. Early years cover mathematics, electrical engineering, software construction, and intercultural skills. Later semesters focus on signals and systems, analog/digital electronics, computer science, management, and a Bachelor thesis.",
      location: "Hamburg, Germany"
    },
    {
      school: "Bahcesehir University",
      degree: "Bachelor's Degree in Electrical and Electronics Engineering",
      start: "2015",
      end: "2020",
      logo: "/bau.svg",
      link: "https://www.bau.edu.tr/",
      description: `A rigorous, internationally-oriented program covering electronics, power systems, automation, and control. The curriculum includes foundational courses in mathematics, programming (C), and physics, followed by advanced topics such as circuit theory, digital design, microcontrollers, signals and systems, electronics, and communication systems. Practical experience is emphasized through laboratory work, mandatory internship, and a two-part capstone project. <br><br>Participated in a university-organized exchange at <a href="https://exchange.bau.edu.tr/bau-roma/" target="_blank" rel="noopener" style="text-decoration:underline">BAU Rome</a>, a campus of the <a href="https://bauglobal.com/" target="_blank" rel="noopener" style="text-decoration:underline">BAU Global network</a>, gaining international perspective and exposure to Italian culture.`,
      location: "Istanbul, Turkey / Rome, Italy (BAU Rome Exchange)",
      subItems: [
        {
          title: "BAU Rome Exchange",
          link: "https://bauglobal.com/",
          description: `Studied at <a href="https://exchange.bau.edu.tr/bau-roma/" target="_blank" rel="noopener" style="text-decoration:underline">BAU Rome</a>, part of the <a href="https://bauglobal.com/" target="_blank" rel="noopener" style="text-decoration:underline">BAU Global network</a>. Focused on broadening academic and cultural horizons through international coursework and collaboration.`,
          location: "Rome, Italy",
          address: "Via IV Novembre 114 – 1st floor – 00187 Rome",
        }
      ]
    },
  ],
  work: [
    {
      company: "NXP Semiconductors",
      link: "https://www.nxp.com",
      location: "Hamburg, Germany",
      badges: ["Intern"],
      title: "Engineering Intern",
      logo: "/nxp.svg",
      start: "May 2025",
      end: "Present",
      description:
        "Internship in engineering at NXP Semiconductors. Supporting ongoing projects in embedded systems, testing, and software development. Gaining hands-on experience with industry tools and collaborating with multidisciplinary teams.",
    },
    {
      company: "NXP Semiconductors",
      link: "https://www.nxp.com",
      location: "Hamburg, Germany",
      badges: ["Working Student"],
      title: "Working Student",
      logo: "/nxp.svg",
      start: "November 2022",
      end: "May 2025",
      description:
        "Software QA and embedded systems testing for secure chips. Focused on I2C, NFC, and ISO/IEC 14443 protocols. Improved code quality for MISRA compliance, created unit tests with NUnit, and supported the team with a custom C# app. Used Jenkins for CI/CD and worked with FPGAs and ICs for hardware validation.",
    },
    {
      company: "NXP Semiconductors",
      link: "https://www.nxp.com",
      location: "Hamburg, Germany",
      badges: ["Working Student"],
      title: "Working Student",
      logo: "/nxp.svg",
      start: "April 2022",
      end: "August 2022",
      description:
        "Documented application migration processes and supported knowledge transfer. Collaborated with cross-functional teams to ensure smooth system updates and operational continuity.",
    },
    {
      company: "Kastamonu Entegre A.S.",
      link: "https://www.kastamonuentegre.com.tr",
      location: "Kastamonu, Turkey (Remote)",
      badges: ["Intern"],
      title: "Production Engineering Intern",
      logo: "/kastamonu.svg",
      start: "July 2020",
      end: "August 2020",
      description:
        "Remote internship during COVID-19. Supported production engineering and quality control by analyzing process data, preparing reports, and learning about manufacturing workflows through virtual meetings and online resources.",
    },
    {
      company: "Mug Agency",
      link: "https://www.mugagency.com",
      location: "Rome, Italy",
      badges: ["Intern"],
      title: "Marketing Intern",
      logo: "mug.png",
      start: "June 2018",
      end: "August 2018",
      description:
        "Assisted with market research, collected competitor data, and helped with basic office tasks. Gained first exposure to marketing and agency operations as a student intern.",
    },
  ],
  skills: [
    "Agile Methodologies",
    "C",
    "C#",
    "C++",
    "Java",
    "Python",
    "SQL",
    "Embedded Systems",
    "Git",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "Tailwind CSS",
    "English (Fluent)",
    "German (Intermediate)",
    "Turkish (Native)",
    "Spanish (Basic)",
    "Italian (Basic)",
    "TypeScript",
    "Jenkins",
    "Unit Testing",
    "FPGA",
    "I2C",
    "NFC",
    "ISO/IEC 14443",
    "Teamwork",
    "Problem Solving",
    "Cross-cultural Communication"
  ],
  projects: [
    {
      title: "Carbonate System Modeling",
      techStack: ["Apache", "HTML", "JavaScript", "Python"],
      description:
        "Developed a scientific web app for carbonate system modeling. Created interactive data visualizations and worked with researchers to ensure clear, accurate scientific content.",
      logo: "https://www.uni-hamburg.de/favicon.ico",
      link: {
        label: "carbonate-system-modelling.geo.uni-hamburg.de",
        href: "https://carbonate-system-modelling.geo.uni-hamburg.de/",
      },
    },
    {
      title: "Enhanced Weathering Consulting",
      techStack: ["Next.js", "React", "Tailwind CSS", "GitHub Actions"],
      description:
        "Designed a website for Enhanced Weathering Consulting to present environmental services and expertise. Prioritized clear structure, modern design, and reliable deployment.",
      logo: "https://enhanced-weathering.de/favicon.ico",
      link: {
        label: "enhanced-weathering.de",
        href: "https://enhanced-weathering.de/",
      },
    },
    {
      title: "Break Agency",
      techStack: ["Next.js", "React", "Tailwind CSS", "GSAP"],
      description:
        "Developed a dynamic website for Break Agency with portfolio showcases, service details, and testimonials. Used GSAP for advanced animations and interactive features.",
      logo: "https://break.agency/favicon.ico",
      link: {
        label: "break.agency",
        href: "https://break.agency/",
      },
    },
    {
      title: "Merlin Tattoo",
      techStack: ["Next.js", "React", "Tailwind CSS", "PHP"],
      description:
        "Built a modern, responsive website for Merlin Tattoo with an interactive gallery, artist profiles, and online booking. Focused on user experience and mobile accessibility.",
      logo: "https://www.merlintattoo.com/favicon.ico",
      link: {
        label: "merlintattoo.com",
        href: "https://www.merlintattoo.com/",
      },
    },
    {
      title: "Living Illustrations Tattoo",
      techStack: ["PHP", "WordPress", "JavaScript", "Klaviyo"],
      description:
        "Maintained and improved the Living Illustrations Tattoo website. Integrated Klaviyo for email marketing and built a custom form for client inquiries and bookings.",
      logo: "https://www.livingillustrationstattoo.com/favicon.ico",
      link: {
        label: "livingillustrationstattoo.com",
        href: "https://www.livingillustrationstattoo.com/",
      },
    },
  ],
  volunteering: [
    // Overall volunteering explanation
    {
      title: "AIESEC Volunteering Overview",
      organization: "AIESEC",
      location: "Global",
      start: "",
      end: "",
      link: "https://aiesec.org/",
      description: `Volunteered through AIESEC, an international student organization that connects young people with global opportunities. Each project below was facilitated by AIESEC, providing a platform for cultural exchange, personal growth, and impactful community service.`
    },
    {
      title: "Teacher Assistant",
      organization: "Laukaan Kirkonkylän Koulu",
      location: "Laukaa, Jyväskylä, Central Finland, Finland",
      start: "Aug 2019",
      end: "Oct 2019",
      link: "https://peda.net/laukaa/kirkonkylankoulu",
      description: `Supported teachers and students at Kirkonkylän Koulu (Laukaa), Finland. Helped implement a climate-focused curriculum, led practical activities, and fostered teamwork in a multicultural environment. Developed age-appropriate educational materials and organized the "Green Planet Day" event to promote environmental awareness.`
    },
    {
      title: "ESL Camp Counselor and Instructor",
      organization: "English Summer Camp",
      location: "Anykščiai, Utena County, Lithuania",
      start: "Jul 2019",
      end: "Aug 2019",
      link: "https://www.anglustudija.lt",
      description: `Provided ESL instruction to a diverse group of students using interactive teaching methods. Managed the campsite, facilitated recreational activities, and fostered a sense of community. Conducted lectures and workshops, and presented on global cultures to enhance students' awareness.`
    },
    {
      title: "Global Awareness Educator",
      organization: "Istituto Statale di Istruzione Superiore 'Magrini Marchetti'",
      location: "Udine, Friuli Venezia Giulia, Italy",
      start: "Jan 2019",
      end: "Feb 2019",
      link: "https://www.isismagrinimarchetti.edu.it/",
      description: `Raised awareness of the United Nations' Sustainable Development Goals (SDGs) through interactive instruction and discussions. Facilitated English dialogue, encouraged critical thinking, and used multimedia resources to present diverse cultures and global issues.`
    },
  ],
} as const
