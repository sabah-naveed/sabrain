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
    njtransit,
    stevens,
    tutcet,
    scoreio,
    njconnect
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
      title: "AI Enthusiast",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Creative Technologist",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Passcomm Technical Specialist Intern",
      company_name: "NJ Transit",
      icon: njtransit,
      iconBg: "#ffffff",
      date: "June 2023 - Current",
      points: [
        "Pioneered an AI chatbot utilizing LangChain, OpenAI, and NJT APIs to revolutionize user experience for trip planning",
        "Spearhead production deployment of seamless integration with AWS services to make API endpoint for chatbot",
        "Cut transit health checks by 50% by automating investigation and testing of trip planner anomalies in internal tools",
        "Updated GPS data from trains using SQL to improve real-time train tracking for 20K users on the Departure Vision app",
      ],
    },
    {
      title: "Discrete Structures Course Assistant",
      company_name: "Stevens Institute of Technology",
      icon: stevens,
      iconBg: "#a32638",
      date: "September 2021 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SAT Tutor",
      company_name: "The Tutoring Center",
      icon: tutcet,
      iconBg: "#ffffff",
      date: "June 2019 - May 2020",
      points: [
        "Provided one-on-one instruction to students to help them improve performance and confidence in math, science, reading, and writing",
        "Developed and provided test-taking strategies and skill building exercises beyond the given study materials to improve student scores and performance based on personal experience with the SAT"
      ],
    }
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
      name: "NJ Connect",
      description:
        "AI-powered chatbot that enables customers to have a conversational experience when planning trips on NJ Transit.",
      tags: [
        {
          name: "langchain",
          color: "pink-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: njconnect,
      source_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7100948121068744704/",
    },
    {
      name: "Score.IO: Virtual Scoreboard",
      description:
        "Ad-free scoreboard for any sport or game. Whether you're at a sports game, playing a board game with your family, or competing in a challenge with a friend, Score.IO will be the reliable way to keep tabs on each team.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
        {
          name: "XCode",
          color: "white-text-gradient",
        },
      ],
      image: scoreio,
      source_code_link: "https://apps.apple.com/us/app/score-io-virtual-scoreboard/id1642364306",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };