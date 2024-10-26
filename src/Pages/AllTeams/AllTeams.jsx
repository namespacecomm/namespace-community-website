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

const founderImages = [
  { url: "./img/founder1.png", alt: "Pradeepto 1" },
  { url: "./img/founder2.png", alt: "Pradeepto 2" }
];

// Dummy data for core team members
const coreTeamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Technical Lead",
    image: "/api/placeholder/400/400",
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
    role: "Community Manager",
    image: "/api/placeholder/400/400",
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
    role: "Content Lead",
    image: "/api/placeholder/400/400",
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
    role: "Event Coordinator",
    image: "/api/placeholder/400/400",
    bio: "Experienced in organizing tech conferences and community meetups.",
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

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative h-auto overflow-hidden rounded-xl shadow-2xl shadow-pink-500/20">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50" />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              A Note From Our Founder
            </h2>
            <div className="prose prose-lg text-gray-300 text-justify">
              <p>
                It is always exciting to witness the growth and vibrancy of our
                community. What started as a small group of tech enthusiasts has
                blossomed into a dynamic and supportive network of learners,
                innovators, and professionals from around the Delhi-NCR region.
                Our journey began with a simple yet powerful vision: to create a
                space where budding technologists could explore, learn, and
                excel in various domains of technology. Today, we continue to
                build on that vision, driven by our core values of inclusivity,
                collaboration, and innovation.
              </p>
              <br />
              <p>
                Our goal is to provide a clear path for those just starting
                their tech journeys, helping them navigate through the diverse
                fields of competitive programming, web development, machine
                learning, and more. I am immensely proud of what we have
                achieved together. Our community website, our flagship events,
                various internal programs and all our online events and
                resources are testaments to our collective efforts and shared
                passion for technology.
              </p>
              <br />
              <p>
                Looking ahead, we are excited to continue expanding our reach
                and impact. We are exploring new initiatives, enhancing our
                existing programs, and constantly seeking ways to better serve
                our community members. Your feedback and participation are
                invaluable to us, and I encourage you to stay engaged, share
                your ideas, and help us shape the future of the nameSpace
                Community. Thank you for being an integral part of this journey.
                Together, we will continue to learn, grow, and make a difference
                in the tech world.
              </p>
              <br />
              <p className="font-semibold flex items-center gap-2">
                ~{" "}
                <a
                  href="https://pradeeptosarkar.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors duration-300 flex items-center gap-1"
                >
                  Pradeepto Sarkar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>
          </div>

          <ImageSlider images={founderImages} />
        </div>

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
