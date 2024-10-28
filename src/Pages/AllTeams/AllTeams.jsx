import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Founder from "./AllTeams";

// Dummy data for core team members
const coreTeamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Organizer",
    image: "",
    bio: "Full-stack developer with 5 years of experience in building scalable applications.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Community Lead Organizer",
    image: "",
    bio: "Passionate about building inclusive tech communities and fostering collaboration.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Community Lead Organizer",
    image: "",
    bio: "Content strategist with expertise in technical writing and documentation.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Director - Outreach",
    image: "",
    bio: "Experienced in organizing tech conferences and community meetups.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Director - Operations",
    image: "",
    bio: "Creative designer skilled in visual communication and branding.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    role: "Director - Technical",
    image: "",
    bio: "Backend expert with a knack for building efficient data systems.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 7,
    name: "Emma Brown",
    role: "Director - Events",
    image: "",
    bio: "Digital marketer passionate about engagement and brand growth.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 8,
    name: "Tommy Nguyen",
    role: "Lead - Marketing",
    image: "",
    bio: "Frontend enthusiast focused on creating interactive web experiences.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 9,
    name: "Sophia Kim",
    role: "Lead - Collaborations",
    image: "",
    bio: "Analyst who loves turning data into actionable insights.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 10,
    name: "Carlos Rivera",
    role: "Lead - Design",
    image: "",
    bio: "Product visionary with experience in launching successful tech solutions.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 11,
    name: "Laura Sanchez",
    role: "Lead - Logistics",
    image: "",
    bio: "User-centered designer skilled in wireframing and prototyping.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 12,
    name: "John Green",
    role: "Lead - Public Relations",
    image: "",
    bio: "Cybersecurity expert focused on risk assessment and protection.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 13,
    name: "Linda Park",
    role: "Lead - Social Media",
    image: "",
    bio: "Efficient operations lead with experience in project management.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 14,
    name: "Akash Mehta",
    role: "Lead - Webmaster",
    image: "",
    bio: "DevOps specialist passionate about automation and CI/CD.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 15,
    name: "Hannah White",
    role: "Lead - Event",
    image: "",
    bio: "Skilled content creator with a background in video editing and animation.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 16,
    name: "David Kim",
    role: "Program Manager",
    image: "",
    bio: "Experienced in cross-functional program management and project delivery.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 17,
    name: "Rachel Adams",
    role: "Program Manager",
    image: "",
    bio: "Specialist in agile project management and team coordination.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 18,
    name: "Mark Wilson",
    role: "Program Manager",
    image: "",
    bio: "Background in resource planning and execution across multiple teams.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 19,
    name: "Sophie Turner",
    role: "Program Manager",
    image: "",
    bio: "Enthusiastic about bringing structure and focus to innovative projects.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 20,
    name: "Ethan Brooks",
    role: "Program Manager",
    image: "",
    bio: "Proven success in managing budgets and timelines for tech programs.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 21,
    name: "Isabella Garcia",
    role: "Program Manager",
    image: "",
    bio: "Experienced in facilitating communication and alignment across teams.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20">
      <div className="relative">
        {/* Profile Image with Overlay */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        </div>

        {/* Social Links - Always visible but animated */}
        <div className="absolute top-4 right-4 flex flex-col space-y-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
          {member.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-sm font-medium bg-pink-600/20 text-pink-400 rounded-full">
            {member.role}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

const AllTeams = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-20 mx-auto mb-24">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">
          Meet Our Team
        </h1>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Core Team</h2>
            <p className="mt-4 text-xl text-gray-400">
              Meet the amazing people who make nameSpace possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
