import {
    njtransit,
    stevens,
    tutcet,
    scoreio,
    njconnect,
    aipic,
    iphone,
    ui,
    creative,
    ghpage
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
      icon: aipic,
    },
    {
      title: "App Developer",
      icon: iphone,
    },
    {
      title: "UI/UX Designer",
      icon: ui,
    },
    {
      title: "Creative Technologist",
      icon: creative,
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
      name: "More Projects on the Way!",
      description:
        "In the mean time check out some of my other projects on Github! These include more advanced mobile apps, AI projects, etc.",
      tags: [
        {
          name: "Github",
          color: "orange-text-gradient",
        },
      ],
      image: ghpage,
      source_code_link: "https://github.com/sabah-naveed",
    },
    
  ];
  
  export { services, experiences, projects };