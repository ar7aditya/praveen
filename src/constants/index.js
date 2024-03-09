import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  cpp,
  bash,
  ffmpeg,
  mui,
  antD,
  sql,
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
  jb,
  mmm,
  meta,
  hbf,
  sf,
  starbucks,
  tesla,
  shopify,
  carrent,
  cryptoverse,
  nodebus,
  realtor,
  jobit,
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
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "C++",
    icon: cpp,
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
    name: "Material UI",
    icon: mui,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "FFMPEG",
    icon: ffmpeg,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "JustBaat AI",
    icon: jb,
    iconBg: "#383E56",
    date: "July 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Metahuman videos Upgradation: Transcode , add subtitles , edit and scale videos using FFMPEG and NodeJS and helped company to produce more than 1000 videos per day.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Analyzed data using BigQuery, and Firebase and rendered using API.",
    ],
  },
  {
    title: "Contributor (Open Source)",
    company_name: "Hacktoberfest",
    icon: hbf,
    iconBg: "#383E56",
    date: "Oct 2022 - Oct 2022",
    points: [
      "I have established and effectively managed a repository, ensuring its smooth operation.",
      "I have made valuable contributions to open source projects, demonstrating my skills and expertise in the community.",
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
    name: "CryptoVerse",
    description:
      "I have built a real-time cryptocurrency application using ReactJS and RapidAPI. The application fetches live exchange rates and updates for more than 50 cryptocurrencies. It presents this data in an intuitive manner using Chart.js, allowing users to easily visualize the trends and fluctuations.And also it has a news section which fetches the latest news from RapidAPI and displays it in a card format.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "reduxToolkit",
        color: "green-text-gradient",
      },
      {
        name: "AntDesign",
        color: "pink-text-gradient",
      },
      {
        name: "Rapid API",
        color: "orange-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/Kaswa_praveen/Cryptoverse",
  }
];

export { services, technologies, experiences, testimonials, projects };
