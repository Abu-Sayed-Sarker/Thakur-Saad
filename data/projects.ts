import project1 from "@/assets/projects/1.png";
import project3 from "@/assets/projects/2.png";
import project4 from "@/assets/projects/3.png";
import project5 from "@/assets/projects/4.png";
import project6 from "@/assets/projects/5.png";
import project2 from "@/assets/projects/6.png";
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
    "id": 1,
    "title": "Smile Palm Desert",
    "description": "A compassionate dental practice focused on creating confident smiles. Offering expert dental care with a focus on comfort, care, and precision. Whether you need cosmetic or general dentistry, your smile is in great hands.",
    "image": project1,
    "technologies": ["Cosmetic Dentistry", "Comfort Care", "Precision", "Dental Services"],
    "category": "Healthcare",
    "link": "https://smilepalmdesert.jvai.site/"
  },
  {
    "id": 2,
    "title": "The Conversation Crew",
    "description": "A program designed to help kids and teens build real-life social confidence. It offers a safe, supportive space for young people to practice communication skills, improve social interactions, and form lasting friendships.",
    "image": project2,
    "technologies": ["Social Confidence", "Youth Program", "Communication Skills", "Social Interaction"],
    "category": "Youth Development",
    "link": "https://theconversationcrew.com/"
  },
  {
    "id": 3,
    "title": "Storm Intel",
    "description": "A data-driven consultancy blending marketing expertise with cutting-edge IT solutions. Specializing in transforming data into actionable insights that drive business growth. From audience analysis to data architecture, they provide smart solutions for business success.",
    "image": project3,
    "technologies": ["Data Analytics", "IT Solutions", "Marketing Expertise", "Business Growth"],
    "category": "Consultancy",
    "link": "https://storm-intel.com/"
  },
  {
    "id": 4,
    "title": "Great Canadian Sims",
    "description": "Custom-designed golf simulators and entertainment solutions that cater to both functionality and design. Helping clients create unique spaces that combine the thrill of golf with high-end entertainment features, perfect for any home or venue.",
    "image": project4,
    "technologies": ["Golf Simulators", "Entertainment Solutions", "Custom Design", "Home Entertainment"],
    "category": "Sports & Entertainment",
    "link": "https://greatcanadiansims.ca/"
  },
  {
    "id": 5,
    "title": "Alternate Power Solutions",
    "description": "A Cape Town-based service provider offering comprehensive solutions in electrical, solar, property maintenance, and plumbing. APS ensures energy-efficient and reliable services that help businesses and homes thrive sustainably.",
    "image": project5,
    "technologies": ["Electrical Solutions", "Solar Power", "Plumbing", "Property Maintenance"],
    "category": "Energy & Utilities",
    "link": "https://alternate-power-sn-6zpr.vercel.app/"
  },
  {
    "id": 6,
    "title": "OTK Event Production",
    "description": "A premium event production service trusted by major clients such as the Oscars. OTK specializes in creating spectacular events with cutting-edge technology and flawless execution, ensuring every event is a success.",
    "image": project6,
    "technologies": ["Event Production", "Technology Integration", "Live Events", "Client Management"],
    "category": "Event Services",
    "link": "https://otk.jvai.site/"
  }
]

