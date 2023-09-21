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
    python,
    aau,
    zte,
    a2sv,
    mosdetector,
    leo_clothing,
    tripguide,
    threejs,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "ZTE Corporation",
      icon: zte,
      iconBg: "#383E56",
      date: "April 2022 - July 2022",
      points: [
        "With the guidance of my technical mentor, I built a virtual machine,moved the data and services from a broken server, and broughtback the client's service.",
        "I gained Linux server management skills.",
        "Collaborating with cross-functional teams including Ethio Telecom ISP team.",
      ],
    },
    {
      title: "Competitive Programming",
      company_name: "Africa to Silicon Valley",
      icon: a2sv,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Nov 2022",
      points: [
        "One year of dedicated learning at Africa to Silicon Valley Data Structures and Algorithms Academy.",
        "Strong proficiency in Python, used extensively for competitive programming.",
        "Covered a wide range of topics, from basics to advanced data structures and algorithms.",
        "Applied various problem-solving techniques learned during the program.",
        "In-depth knowledge of key algorithms, including sorting, searching, and graph algorithms.",
        "Expertise in data structures such as arrays, linked lists, trees, and graphs.",
        "Active participation and problem-solving on online judge platforms (e.g., Codeforces, LeetCode, HackerRank).",
        
      ],
    },
    {
      title: "ML/Flutter Developer",
      company_name: "Addis Ababa University",
      icon: aau,
      iconBg: "#383E56",
      date: "March 2023 - July 2023",
      points: [
        "Developed a multi-species audio classification project for mosquito wingbeat sound as my graduation project.",
        "Employed machine learning (ML) audio classification techniques to train a robust machine learning model for mosquito species identification.",
        "Implemented a Flask backend to serve as the core of the application, handling audio data processing and classification.",
        "Designed and developed a Flutter mobile app that allows users to record audio samples of mosquito wingbeats.",
        "Integrated the trained ML model into the mobile app for real-time audio detection and species identification.",
        "Contributed to scientific research by creating a tool that aids in the identification of mosquito species, which can be crucial for disease control and epidemiological studies."
      ],
    },
    {
      title: "Head of Education and Web Developer",
      company_name: "Africa to Silicon Valley",
      icon: a2sv,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Present",
      points: [
        "Head of Education for 30 students at Africa to Silicon Valley, teaching programming basics and data structures/algorithms.",
        "Part of the React.js web development team for \"Afiyalense,\" a healthcare-focused computer vision project.",
        "Contributing to React.js development, UI/UX, and feature implementation for \"Afiyalense.\"",
        "Collaborating on a cutting-edge healthcare technology project with potential industry impact.",
        "Active participation in the full software development lifecycle, from concept to deployment."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mos Detector",
      description:
        "A robust machine learning model for mosquito species identification using wingbeat sounds.Integrated with a mobile app with audio recording and classification, facilitating scientific research for mosquito-borne diseases and species identification.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "machine_learning",
          color: "pink-text-gradient",
        },
      ],
      image: mosdetector,
      source_code_link: "https://github.com/BrukMak/Multi-Species-Mosquito-Detection-with-Audio-Classification",
    },
    {
      name: "Leo Clothing",
      description:
        "A dynamic e-commerce platform for clothing enthusiasts to browse and shop for the latest fashion trends, featuring user-friendly navigation, detailed product listings, and seamless checkout.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: leo_clothing,
      source_code_link: "https://github.com/BrukMak/Leo-clothing",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };