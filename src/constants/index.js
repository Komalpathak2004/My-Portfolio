import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blockchain,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Blockchain",
    icon: blockchain,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "hackEDCode 2.0",
    company_name: "Winner",
    icon: starbucks,
    iconBg: "#383E56",
    date: "27 April 2024",
    points: [
      "Won hackathon with an innovative face recognition project.Developed cutting-edge technology for secure and accurate facial authentication.",
      "Implemented real-time facial recognition for secure access.Enhanced security measures with advanced algorithms for reliable identity verification.",
      "Showcased advanced algorithms for precise identification.Delivered a robust solution for preventing unauthorized access and maintaining event integrity.",
    ],
  },
  {
    title: "BUILD WITH DELHI",
    company_name: "Participated",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "29 June 2024",
    points : [
      "Developed and maintained AI-powered health applications for predicting diabetes and heart disease.",
      "Leveraged advanced algorithms to deliver accurate health predictions and recommendations.",
      "Collaborating with cross-functional teams to enhance MedPulse AI features.",
      "Implementing responsive design for seamless user interaction on various devices.",
    ],
  },
];
const projects = [
  {
    name: "Medpulse AI",
    description:
      "Discover the best alternatives for your medications with MedPulseAI! Our advanced AI-powered recommender system analyzes a wide range of medicines to provide you with accurate and personalized recommendations. Whether you're seeking alternatives or exploring new options.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Komalpathak2004/MedPulse-AI",
  },
  {
    name: "Systematiks",
    description:
      "This project is a full-stack e-commerce website built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes functionalities for user authentication, product management, cart management, and an admin panel for managing users and products.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Komalpathak2004/E-Commerce-Website-MERN",
  },
  {
    name: "CharConnect",
    description:
      "CharConnect is a platform that connects donors and NGOs through secure, transparent blockchain technology. It simplifies the donation process, ensuring that contributions are impactful causes efficiently. Whether you're a donor or an NGO, making every transaction meaningful.",
    tags: [
      {
        name: "Solidity",
        color: "brown-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, projects };
