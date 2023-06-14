// all the constants that we will be using in different parts of our application.
// This is to keep all importants contents in one place.
import { list } from "postcss";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  leetcode,
  angela_yu,
  IT_image,
  Python,
  mySql,
  tindog,
  todo_list,
  ShopEasy,

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Avid Problem Solver",
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
    name: "Python",
    icon: Python
  },
  {
    name: "MySQL",
    icon: mySql
  },
];

const experiences = [
  {
    title: "Data Structure and Algorithm",
    tag: "problem-solving",
    icon: web,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "I have a strong foundation in Data Structures and Algorithms, with in-depth knowledge of various DSA concepts. ",
      "I have also honed my problem-solving skills by solving over 200 problems on LeetCode, which has helped me to become proficient in implementing these concepts in practical scenarios.",
    ],
    proof: leetcode,
  },
  {
    title: "Full Stack Developement",
    tag: "development",
    icon: creator,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "I am a skilled Full-Stack Developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack.",
      " I have gained practical knowledge and hands-on experience through an extensive course by Angela Yu on Udemy, where I learned to build complex applications from scratch.",
      "Furthermore, I have successfully completed four projects which have allowed me to gain a deep understanding of various Full-Stack Development concepts and technologies.",
    ],
    proof: angela_yu,
  },
  {
    title: "Strong Foundation in Course Curriculum Subjects",
    tag: "B.Tech in Information Technology",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2020 - Aug 2024",
    points: [
      "I have a solid foundation and understanding of various B.Tech subjects, including Mathematics, DBMS, OOP, and Operating Systems. ",
      "In Mathematics, I am proficient in Linear Algebra, Probability, Combinatorics, Set Theory, and Graph Theory.",
      " I have also acquired in-depth knowledge of DBMS, including SQL queries, normalization, and indexing.",
      " Additionally, I have gained practical experience in Object-Oriented Programming concepts and design patterns.",
      " Furthermore, I am well-versed in Operating Systems, including process management, memory management, and file systems.",
      " I have thoroughly practiced and strengthened my skills in each of these subjects during my time at college.",
    ],
    proof: IT_image,
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
    name: "TinDog",
    description:
      "Web-based platform that allows users to search and buy dogs as per their desire.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tindog,
    source_code_link: "https://snehashish7.github.io/tindog/",
  },
  {
    name: "To-do List",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      
    ],
    image: todo_list,
    source_code_link: "https://ill-plum-kingfisher-cuff.cyclic.app/",
  },
  {
    name: "ShopEasy",
    description:
      "A custom eCommerce platform loaded with all functionalities including payment",
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
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "orange-text-gradient",
      },
    ],
    image: ShopEasy,
    source_code_link: "https://github.com/Snehashish7/shop_easy",
  },
];

export { services, technologies, experiences, testimonials, projects }; // all the content in out applications
