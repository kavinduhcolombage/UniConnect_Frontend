import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const searchFields = [
    { title: 'Job Title', icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
    { title: 'Location', icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
    { title: 'Skills', icon: IconRecharging, options: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Node.js', 'Python', 'Java', 'Ruby', 'PHP', 'SQL', 'MongoDB', 'PostgreSQL', 'Git', 'API Development', 'Testing and Debugging', 'Agile Methodologies', 'DevOps', 'AWS', 'Azure', 'Google Cloud'] },
]

const talents = [
    {
      name: "Nuwan Perera",
      role: "Software Engineer",
      company: "WSO2",
      topSkills: ["Angular", "Java", "PostgreSQL"],
      about: "As a Software Engineer at WSO2, I focus on developing robust and efficient enterprise solutions. I have hands-on experience in building full-stack applications using Angular for the front-end and Java for the backend. My database of choice is PostgreSQL due to its reliability and performance. I am committed to delivering clean code, scalable systems, and impactful solutions tailored to business needs in the Sri Lankan and global markets.",
      expectedCtc: "LKR 3.6M - 4.8M",
      location: "Colombo, Sri Lanka",
      image: "avatar"
    },
    {
      name: "Sachini Fernando",
      role: "Frontend Developer",
      company: "99x",
      topSkills: ["Vue.js", "Tailwind CSS", "TypeScript"],
      about: "I am a Frontend Developer at 99x with a passion for designing modern and responsive user interfaces. I specialize in building UI components with Vue.js and Tailwind CSS while maintaining accessibility and performance standards. I thrive in collaborative environments and enjoy transforming design concepts into interactive user experiences.",
      expectedCtc: "LKR 2.4M - 3.2M",
      location: "Negombo, Sri Lanka",
      image: "avatar"
    },
    {
      name: "Tharindu Jayasena",
      role: "DevOps Engineer",
      company: "Zone24x7",
      topSkills: ["Docker", "Kubernetes", "AWS"],
      about: "I am a DevOps Engineer currently working at Zone24x7, focusing on CI/CD pipelines, cloud infrastructure, and container orchestration. My expertise lies in automating workflows, optimizing deployment processes, and ensuring scalable infrastructure on AWS using tools like Docker and Kubernetes. I aim to bridge the gap between development and operations.",
      expectedCtc: "LKR 4.2M - 5.5M",
      location: "Kandy, Sri Lanka",
      image: "avatar"
    },
    {
      name: "Isuri Madushani",
      role: "Data Analyst",
      company: "ICTA Sri Lanka",
      topSkills: ["Python", "Power BI", "SQL"],
      about: "As a Data Analyst at ICTA Sri Lanka, I am passionate about turning data into actionable insights. I work with Python for data processing, SQL for data extraction, and Power BI for visual storytelling. My role supports strategic decision-making for digital transformation projects across Sri Lanka.",
      expectedCtc: "LKR 2.8M - 3.6M",
      location: "Galle, Sri Lanka",
      image: "avatar"
    }
  ];
  

export {searchFields , talents};