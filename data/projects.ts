import project1 from "@/assets/projects/1.png";
import project2 from "@/assets/projects/2.png";
import project3 from "@/assets/projects/3.png";
import project4 from "@/assets/projects/4.png";
import project5 from "@/assets/projects/5.png";
import project6 from "@/assets/projects/6.png";
import { StaticImageData } from "next/image";

type Projects = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  category: string;
  link: string;
}[];

export const projects: Projects = [
  {
    id: 1,
    title: "Math Detectives",
    description:
      "AI-powered tutoring chatbot built on OpenAI's advanced O1 model. Delivers personalised, one-on-one support with step-by-step guidance, instant feedback, and handwritten assignment analysis through photo uploads.",
    image: project1,
    technologies: ["OpenAI O1", "AI Tutoring", "Computer Vision", "React"],
    category: "Education",
    link: "https://mathaidetectives.com/",
  },
  {
    id: 2,
    title: "Bowlers Network",
    description:
      "Platform for bowling enthusiasts offering advanced performance tracking, expert coaching, exclusive content, and a vibrant community. Perfect for players of all levels to elevate their skills.",
    image: project2,
    technologies: [
      "React",
      "Performance Analytics",
      "Community Platform",
      "Node.js",
    ],
    category: "Sports Platform",
    link: "https://bowler-website-5j7q.vercel.app/",
  },
  {
    id: 3,
    title: "Poop Alert",
    description:
      "Lighthearted soundboard app packed with hilarious, toilet-themed sound effects. From flushing toilets to fart noises, designed to add humor to any situation and keep things fun.",
    image: project3,
    technologies: [
      "React Native",
      "Audio Processing",
      "Mobile App",
      "JavaScript",
    ],
    category: "Entertainment",
    link: "https://poop-alert.com/",
  },
  {
    id: 4,
    title: "MED World",
    description:
      "Health management platform designed to help users manage and track their health information effectively with modern interface and comprehensive tracking features.",
    image: project4,
    technologies: ["React", "Health Analytics", "Data Management", "UI/UX"],
    category: "Healthcare",
    link: "https://www.figma.com/design/l4VmxRvfwCrcliptwoepJj/MED-World?node-id=0-1&p=f",
  },
  {
    id: 5,
    title: "VaznzaMyCost.it",
    description:
      "Comprehensive travel and booking platform allowing users to effortlessly plan and book trips. Features flights, hotels, car rentals, and unique travel experiences with competitive prices.",
    image: project5,
    technologies: [
      "React",
      "Booking APIs",
      "Travel Platform",
      "Payment Integration",
    ],
    category: "Travel Platform",
    link: "https://www.figma.com/design/3GpcVGOIn68o7hUdyLaEZz/frework-dd?node-id=0-1&p=f",
  },
  {
    id: 6,
    title: "AI PDF Transformer",
    description:
      "AI-powered PDF transformation platform allowing users to upload and enhance documents. Features modern, user-friendly design with login, AI tools, reviews, FAQs, and contact form.",
    image: project6,
    technologies: [
      "AI Processing",
      "PDF APIs",
      "React",
      "Document Enhancement",
    ],
    category: "Business Tool",
    link: "https://www.figma.com/design/sahMNTiBCHroRo3XX4zhbG/Digi?node-id=0-1&p=f",
  },
];
