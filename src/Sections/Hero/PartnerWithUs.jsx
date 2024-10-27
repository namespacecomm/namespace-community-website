import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  HeartHandshake,
  UserCheck,
  Globe,
  Network,
  Package,
  Users,
  Megaphone,
  Briefcase,
  GraduationCap,
  Award,
  UserPlus,
  ChevronDown,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PartnerWithUs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const partnerTypes = [
    {
      title: "Sponsors",
      icon: Building2,
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      accentColor: "purple",
      path: "/sponsor",
      benefits: [
        {
          title: "Brand Visibility",
          description:
            "Showcase your brand to a diverse audience through event promotions and marketing materials.",
          icon: Globe,
        },
        {
          title: "Networking Opportunities",
          description:
            "Connect with industry professionals, startups, and emerging talent in the tech community.",
          icon: Network,
        },
        {
          title: "Customized Sponsorship Packages",
          description:
            "Tailored packages to meet your company's needs and goals, including booth space, workshops, and promotional materials.",
          icon: Package,
        },
        {
          title: "Engagement with Participants",
          description:
            "Interact directly with attendees through exclusive sponsor events, webinars, or Q&A sessions.",
          icon: Users,
        },
        {
          title: "Social Media Promotion",
          description:
            "Leverage our community's online presence to enhance your brand recognition and reach a wider audience.",
          icon: Megaphone,
        },
      ],
    },
    {
      title: "Community Partners",
      icon: HeartHandshake,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      accentColor: "blue",
      path: "/communitypartner",
      benefits: [
        {
          title: "Collaborative Initiatives",
          description:
            "Work together on events, workshops, and campaigns that drive mutual benefits and community engagement.",
        },
        {
          title: "Shared Resources",
          description:
            "Access to a network of resources, expertise, and contacts to enhance your community initiatives.",
        },
        {
          title: "Cross-Promotion",
          description:
            "Benefit from promotional support across our platforms, increasing visibility for both partners.",
        },
        {
          title: "Event Participation",
          description:
            "Opportunity to co-host events, providing your community with valuable learning experiences and exposure.",
        },
        {
          title: "Strengthened Community Impact",
          description:
            "Join forces to create a larger impact on the tech ecosystem, fostering innovation and inclusivity.",
        },
      ],
    },
    {
      title: "Campus Evangelists",
      icon: UserCheck,
      gradient: "from-emerald-600 via-green-600 to-lime-600",
      accentColor: "emerald",
      path: "/campusevangelist",
      benefits: [
        {
          title: "Leadership Opportunities",
          description:
            "Become a representative of your institution, developing your leadership and communication skills.",
          icon: Briefcase,
        },
        {
          title: "Mentorship Programs",
          description:
            "Access to mentorship from industry leaders, enhancing your knowledge and career prospects.",
          icon: GraduationCap,
        },
        {
          title: "Skill Development Workshops",
          description:
            "Participate in exclusive workshops designed to strengthen your technical and soft skills.",
          icon: UserPlus,
        },
        {
          title: "Networking with Peers",
          description:
            "Build connections with like-minded students and professionals in the tech community.",
          icon: Network,
        },
        {
          title: "Incentives and Recognition",
          description:
            "Earn certificates, awards, and other recognition for your contributions, enhancing your resume and career profile.",
          icon: Award,
        },
      ],
    },
  ];

  return (
    <div
      className="w-full rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4"
      style={{
        marginTop: "10%",
        width: window.innerWidth >= 1024 ? "80vw" : "90vw",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-xl"
          >
            Join our growing ecosystem of innovators and change-makers
          </motion.p>
        </div>

        <div className="space-y-6">
          {partnerTypes.map((type, typeIndex) => (
            <motion.div
              key={typeIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: typeIndex * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <motion.button
                onClick={() =>
                  setActiveSection(
                    activeSection === typeIndex ? null : typeIndex
                  )
                }
                className={`w-full bg-gradient-to-r ${type.gradient} p-8 relative overflow-hidden`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <type.icon className="w-6 h-6 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="">
                      <h3 className="text-xl lg:text-2xl font-bold text-white text-left">
                        {type.title}
                      </h3>
                      <div className="w-20 h-1 bg-white/50 rounded-full mt-2"></div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSection === typeIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 p-2 rounded-full backdrop-blur-sm"
                  >
                    <ChevronDown className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {activeSection === typeIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gradient-to-b from-white to-gray-50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                      {type.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`group p-6 rounded-2xl bg-white border border-gray-100
                            hover:border-${type.accentColor}-200 transition-all duration-300
                            hover:shadow-xl`}
                        >
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                            {benefit.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Added Navigation Link */}
                    <div className="px-8 pb-8">
                      <Link to={type.path}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full bg-gradient-to-r ${type.gradient} text-white py-4 px-6 rounded-xl font-semibold 
                          flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <span>
                            Learn more about becoming a{" "}
                            {type.title.slice(0, -1)}
                          </span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>

              <div className="relative z-10 space-y-6">
                <div className="mx-auto w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  Connect with us to explore partnership opportunities and join
                  our community of innovators
                </p>
                <div className="flex justify-center items-center">
                  <motion.a
                    href="mailto:contact@namespacecomm.in"
                    className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Write to us at contact@namespacecomm.in
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnerWithUs;
