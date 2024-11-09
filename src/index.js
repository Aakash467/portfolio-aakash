import project1 from "../src/assets/projects/project-1.jpg";
import project2 from "../src/assets/projects/project-2.jpg";
import project3 from "../src/assets/projects/project-3.jpg";
import project4 from "../src/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const SKILL = `Languages: C, C++, Java(basic), Javascript, Python(basic). Coursework/Subjects: Operating System, Computer Networks, Data Structure and Algorithms, Object Oriented
Programming, Database Management Systems, Software Engineering, Computer Organization and Architecture
`;

export const ACHIEVE = `Certification of Responsive Web Design from FreeCodeCamp.
 Secured a global ranking of 100 out of over 19000 participants in CodeChef starters 109.
 3 Star (Highest Rating 1614) at CodeChef.
 Solved 500+ coding problems on several platforms: (Leetcode, GFG, Codechef).`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    school: "National Institute of Technology",
    location: "Kurukshetra, Haryana, India",
    course: "Bachelor of Technology in Information Technology",
    cgpa:"CGPA: 8.9",
  },
  {
    year: "2021 - 2022",
    school: "Delhi Public School",
    location: "Jind, Haryana, India",
    course: "Secondary Education",
    cgpa:"Percentage: 95.6",
  },
  {
    year: "2019 - 2020",
    school: "Delhi Public School",
    location: "Jind, Haryana, India",
    course: "Primary Education",
    cgpa:"Percentage 95",
  },
];

export const PROJECTS = [
  {
    title: "Online Shopping Website",
    image: project1,
    description:
      "Designed and developed a comprehensive online shopping app as a frontend web application, integrating user-friendly interfaces forsers.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Soil Moisture Detector",
   image: project2,
    description:
      "Developed an IoT project utilizing Arduino and sensors like Ultrasonic sensor and LCD screen to detect soil moisture that helps farmer in irrigation.",
    technologies: ["Arduino", "C++", "Ultrasonic sensor"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Tailwind"],
  },
  {
    title: "Authentication Server",
    image: project4,
    description:
      "Developed an authentication server using Express.js to provide secure user authentication and authorization for web applications.",
    technologies: [ "Express", "NodeJS" , "MongoDB"],
  },
];

export const CONTACT = {
  phone: "+91 7988815518 ",
  email: "aakashkundu467@gmail.com",
};
