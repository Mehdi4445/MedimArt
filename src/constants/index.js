import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    adobe,
    nodejs,
    wp,
    php,
    laravel,
    git,
    figma,
    angular,
    ionic,
    oscar,
    DL,
    DS,
    BS,
    twassil,
    hydro,
    drone,
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
      title: "CMS Developer",
      icon: mobile,
    },
    {
      title: "UX/UI Designer",
      icon: backend,
    },
    {
      title: "Brand Designer",
      icon: web,
    },
    {
      title: "Hybrid App",
      icon: mobile,
    },
    {
      title: "Community Manager",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Print Designer",
      icon: mobile,
    },
   
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Ionic",
      icon: ionic,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "WordPress",
      icon: wp,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
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
      name: "Adobe creative cloud",
      icon: adobe,
    },
   
  ];
  
  const experiences = [
    {
      title: "WordPress Developer & Brand Designer",
      company_name: "Drone Logistique - SAS",
      icon: DL,
      iconBg: "#fff",
      date: "February 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using WordPress, PHP and other related technologies.",
        "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Creating a new brand that goes with the company's values and current trend",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Angular Developer & UX/UI Designer",
      company_name: "Data Scientist - STARTUP ",
      icon: DS,
      iconBg: "#fff",
      date: "February 2021 - May 2021",
      points: [
        "Developing web platform using Angular, REST Api, TypeScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility and user centric design.",
        "Creating a visual identiy for the platform that goes with the company's values and current trend",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Barthauer Software - GmbH",
      icon: BS,
      iconBg: "#fff",
      date: "August 2020 - September 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Teacher",
      company_name: "Oscar pour la formation",
      icon: oscar,
      iconBg: "#fff",
      date: "February 2022 - May 2022",
      points: [
        "Part-time trainer to train young people entrepreneurs in the field of oriented infographics company."
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
      name: "Twassil Food",
      description:
        "Web-based hybrid application that allows customers to customize their fast food and place their orders online for delivery as part of a freelance project.",
      tags: [
        {
          name: "Angular",
          color: "orange-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: twassil,
      source_code_link: "https://github.com/Mehdi4445/TwassilFoodApp",
      presentation_link: "https://www.behance.net/gallery/153352343/TWASSIL-FOOD",
    },
    {
      name: "Hydrolife",
      description:
        "As part of my graduation project, we carried out a Hydrolife startup project in pairs. It is a management platform for hydrotherapy centers and booking, research for customers",
      tags: [
        {
          name: "Angular",
          color: "orange-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
      ],
      image: hydro,
      source_code_link: "https://github.com/Mehdi4445/HydroLife",
      presentation_link: "https://www.behance.net/gallery/153134119/HydroLife-End-of-studies-project",
    },
    {
      name: "Drone Logistique",
      description:
        "The project consisted in finding a new identity for the company. Giving the company a modern and recognizable visual identity that reflects the company values and a new website.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "PHP",
          color: "violet-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: drone,
      source_code_link: "https://drone-log360.fr",
      presentation_link: "https://www.behance.net/gallery/165892621/Drone-Logistique-Rebranding-visual-identity",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };