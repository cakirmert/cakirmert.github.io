
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mert Cakir",
  initials: "MC",
  location: "Hamburg, Germany",
  locationLink: "https://www.google.com/maps/place/Hamburg",
  about:
    "Electrical and Electronics Engineer studying Information Engineering. Detail-oriented with hands-on experience in electronics from university courses and lab projects.",
  summary:
    "Graduate engineer with hands-on experience in electronics. Currently pursuing a second degree while staying updated with the latest tech advancements to apply fresh insights to my projects. Volunteering in Italy, Lithuania, and Finland has enhanced my ability to work with diverse teams, solve problems efficiently, and provided valuable teaching and counseling experience.",
  avatarUrl: "https://github.com/cakirmert/cakirmert.github.io/blob/gh-pages/mert.JPEG?raw=true",	
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
    },
    {
      school: "Bahcesehir University",
      degree: "Bachelor's Degree in Electrical and Electronics Engineering",
      start: "2015",
      end: "2020",
    },
  ],
  work: [
    {
      company: "NXP Semiconductors",
      link: "https://www.nxp.com",
      badges: ["Working Student"],
      title: "Working Student",
      logo: "",  // Add NXP Semiconductors logo here
      start: "November 2022",
      end: "Present",
      description:
        "Testing & Verification: Ensured software quality through testing and verification. MISRA Compliance: Modified code to adhere to MISRA rules for improved integrity. NUnit Testing: Conducted unit testing using NUnit framework. Jenkins: Utilized Jenkins for automated testing. C# App: Developed a dedicated C# app to support testing team operations.",
    },
    {
      company: "NXP Semiconductors",
      link: "https://www.nxp.com",
      badges: ["Working Student"],
      title: "Working Student",
      logo: "",  // Add NXP Semiconductors logo here
      start: "April 2022",
      end: "August 2022",
      description:
        "Operations & Applications: Documented applications and migrations.",
    },
    {
      company: "Kastamonu Entegre A.S.",
      link: "https://www.kastamonuentegre.com.tr",
      badges: ["Intern"],
      title: "Production Engineering Intern",
      logo: "",  // Add Kastamonu Entegre A.S. logo here
      start: "July 2020",
      end: "August 2020",
      description: "Gained experience in production engineering.",
    },
    {
      company: "Mug Agency",
      link: "https://www.mugagency.com",
      badges: ["Intern"],
      title: "Marketing Intern",
      logo: "",  // Add Mug Agency logo here
      start: "June 2018",
      end: "August 2018",
      description: "Acquired skills in marketing during the internship.",
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
  ],
  projects: [
    {
      title: "Merlin Tattoo",
      techStack: ["Next.js", "React", "Tailwind CSS", "PHP", "Web Development"],
      description: "Developed the website for Merlin Tattoo.",
      logo: "",  // Add Merlin Tattoo logo here
      link: {
        label: "merlintattoo.com",
        href: "https://www.merlintattoo.com/",
      },
    },
    {
      title: "Carbonate System modelling",
      techStack: ["Apache", "HTML", "JavaScript", "Python", "Web Development"],
      description: "Helped develop the website.",
      logo: "",  // Add local business logo here
      link: {
        label: "carbonate-system-modelling.geo.uni-hamburg.de",
        href: "https://carbonate-system-modelling.geo.uni-hamburg.de/",
      },
    },
    {
      title: "Enhanced Weathering Consulting",
      techStack: ["Next.js", "React", "Tailwind CSS", "Web Development"],
      description: "Developed the website for Enhanced Weathering Consulting.",
      logo: "",  // Add local business logo here
      link: {
        label: "enhanced-weathering.de",
        href: "https://enhanced-weathering.de/",
      },
    },
    {
      title: "Break Agency",
      techStack: ["Next.js", "React", "Tailwind CSS",  "Web Development"],
      description: "Developed the website for Break Agency. The website is still under development.",
      logo: "",  // Add ADA Markt logo here
      link: {
        label: "cakirmert.github.io/BreakAgency",
        href: "https://cakirmert.github.io/BreakAgency/",
      },
    },
  ],
  volunteering: [
    {
      title: "Teacher Assistant",
      organization: "AIESEC, Kirkonkylän Koulu, Jyväskylä, Finland",
      start: "Aug 2019",
      end: "Oct 2019",
      description: "Implemented innovative curriculum focused on climate change, engaging students in practical activities. Fostered teamwork within a multicultural team of educators, promoting a harmonious and constructive teaching environment. Delivered compelling workshops to stimulate student engagement, culminating in the creation of climate action plans.",
    },
    {
      title: "ESL Camp Counselor and Instructor",
      organization: "AIESEC, English Summer Camp, Anykščiai, Lithuania",
      start: "Jul 2019",
      end: "Aug 2019",
      description: "Provided ESL instruction to a diverse group of students, employing interactive teaching methods. Managed the campsite, ensuring a safe, clean, and conducive learning environment. Facilitated recreational activities, fostering a sense of community and camaraderie among camp attendees.",
    },
    {
      title: "Global Awareness Educator",
      organization: "AIESEC, Istituto Statale di Istruzione Superiore 'Magrini Marchetti', Udine, Italy",
      start: "Jan 2019",
      end: "Feb 2019",
      description: "Raised awareness of the United Nations' Sustainable Development Goals (SDGs) through interactive instruction and discussions. Facilitated dialogue in English, promoting language skills while encouraging critical thinking about global issues.",
    },
  ],
} as const;
