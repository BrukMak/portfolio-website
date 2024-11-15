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
    main_pic
  } from "../assets";
  
  export const navLinks = [
    {
      id: "",
      title: "Home",
    },

    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
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
      title: "Head of Academy (Deputy)",
      company_name: "A2SV | Africa to Silicon Valley (Backed by Google)",
      icon: a2sv,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - present",
      points: [
        "Oversaw a software engineering academy for competitive programming, and software development.",
        "Supervised a team of 25+ instructors (Heads of Education) who are teaching 250+ students.",
        "Developed script to automate instructor and student management.",
      ],
    },
    {
      title: "Head of Education",
      company_name: "A2SV | Africa to Silicon Valley (Backed by Google)",
      icon: a2sv,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Nov 2023",
      points: [
        "Instructed a cohort of over 30 software engineering and computer science students in competitive programming and professional software development.",
        "Delivered lessons covering competitive programming techniques and principles of professional software development.",
        "Developed an automation script to enhance data analytics and improve operational efficiency.",
      ],
    },
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
    // {
    //   title: "Competitive Programming",
    //   company_name: "Africa to Silicon Valley",
    //   icon: a2sv,
    //   iconBg: "#E6DEDD",
    //   date: "Dec 2021 - Nov 2022",
    //   points: [
    //     "One year of dedicated learning at Africa to Silicon Valley Data Structures and Algorithms Academy.",
    //     "Strong proficiency in Python, used extensively for competitive programming.",
    //     "Covered a wide range of topics, from basics to advanced data structures and algorithms.",
    //     "Applied various problem-solving techniques learned during the program.",
    //     "In-depth knowledge of key algorithms, including sorting, searching, and graph algorithms.",
    //     "Expertise in data structures such as arrays, linked lists, trees, and graphs.",
    //     "Active participation and problem-solving on online judge platforms (e.g., Codeforces, LeetCode, HackerRank).",
        
    //   ],
    // },
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