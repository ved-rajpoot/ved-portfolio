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
  kubernetes,
  cpp,
  java,
  oracle4,
  python,
  mnnit,
  streamverse3
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
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coding Mentor",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon:kubernetes,
  },
  {
    name: "c++",
    icon: cpp
  },
  {
    name: 'java',
    icon: java
  },
  {
    name: 'python',
    icon: python
  }
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Oracle",
    icon: oracle4,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",

      "Deployed Unified Monitoring agent on Oracle Cloud Infrastructure using Docker and Kubernetes.",
      "Conducted thorough integration tests on the agent, ensuring seamless collection of logs and metrics from applications within the Kubernetes cluster, and facilitated their transmission to OCI logging and monitoring services.",
      "Achieved significant efficiency gains by implementing Ansible automation, resulting in a substantial reduction of 5-7 person-days in manual testing efforts."

    ],
  },
  {
    title: "Administrator",
    company_name: "Computer Coding Club MNNIT",
    icon: mnnit,
    iconBg: "#E6DEDD",
    date: " Jan 2023 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Orchestrated and managed various coding events at MNNIT, overseeing the seamless execution of hackathons and coding contests.",
      "Designed challenging problems for coding contests, testing participants' skills.",
      "Provided mentorship and guidance to students, fostering a collaborative learning environment.",
      "Led initiatives to enhance the coding culture in college, fostering an environment that promotes knowledge sharing, skill development, and a passion for coding.",

      
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Streamverse",
    description:
      "A Video streaming website where users effortlessly share and explore content. Enjoy real-time interaction with friends in interactive rooms. Stay connected with favorite creators, and personalize your experience with features like screen sharing and custom playlists. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ved-rajpoot/Streamverse",
  },
  {
    name: "Quizzer",
    description:
      "A user-friendly online quizzing platform with advanced features like leaderboards and timers. Designed for educators, it provides control over quiz access and versatile question types, while also offering performance tracking for effective assessment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "material.ui",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
    ],
    image: streamverse3,
    source_code_link: "https://github.com/ved-rajpoot/QuizApp",
  },
  {
    name: "RideShare",
    description:
      "A carpooling website addressing urban traffic congestion. The platform facilitates ride-sharing to reduce vehicles on the road, easing congestion. Using Machine Learning, RideShare predicts journey prices based on vehicle energy consumption, promoting eco-friendly options.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind ",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ved-rajpoot/RideShare",
  },
];

export { services, technologies, experiences, testimonials, projects };
