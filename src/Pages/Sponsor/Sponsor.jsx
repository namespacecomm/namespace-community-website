import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  BarChart3,
  Users,
  Globe,
  Zap,
  Heart,
  Star,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Award,
  Rocket,
  Building,
  Trophy,
} from "lucide-react";

const Sponsor = () => {
  const stats = [
    { icon: Users, value: "16,000+", label: "Participants Reached" },
    { icon: Globe, value: "250+", label: "Institutions Touched" },
    { icon: TrendingUp, value: "100+", label: "Total Events" },
    { icon: Trophy, value: "25+", label: "Previous Sponsors" },
  ];

  const benefits = [
    {
      title: "Brand Amplification",
      icon: Target,
      description:
        "Reach a highly engaged audience of tech enthusiasts, developers, and future innovators through our multi-channel platforms",
      points: [
        "Premium brand visibility across digital platforms",
        "Recognition in event promotions and materials",
        "Social media spotlight campaigns",
        "Featured stories and partnership highlights",
      ],
      color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      title: "Talent Pipeline",
      icon: Users,
      description:
        "Connect with top tech talent and build meaningful relationships with future industry leaders",
      points: [
        "Direct access to skilled developers",
        "Early recruitment opportunities",
        "Networking with tech enthusiasts",
        "Student ambassador programs",
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      title: "Innovation & Impact",
      icon: Zap,
      description:
        "Drive technological advancement and contribute to the growth of the developer ecosystem",
      points: [
        "Support cutting-edge projects",
        "Foster innovation through hackathons",
        "Enable tech education initiatives",
        "Shape future tech leaders",
      ],
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      title: "Community Engagement",
      icon: Heart,
      description:
        "Create lasting impact through meaningful community initiatives and educational programs",
      points: [
        "Host specialized workshops",
        "Mentor aspiring developers",
        "Lead industry sessions",
        "Build lasting partnerships",
      ],
      color: "bg-gradient-to-br from-rose-500 to-pink-500",
    },
  ];

  const pastSponsors = [
    {
      category: "Technology Partners",
      logos: [
        { name: "TechCorp", year: "2023" },
        { name: "InnovateX", year: "2023" },
        { name: "DevStream", year: "2022" },
        { name: "CloudPeak", year: "2022" },
      ],
    },
    {
      category: "Educational Partners",
      logos: [
        { name: "EduTech", year: "2023" },
        { name: "LearnHub", year: "2023" },
        { name: "SkillForge", year: "2022" },
      ],
    },
    {
      category: "Industry Leaders",
      logos: [
        { name: "Enterprise Solutions", year: "2023" },
        { name: "GlobalTech", year: "2023" },
        { name: "FutureStack", year: "2022" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Sparkles className="w-20 h-20 mx-auto mb-8 text-yellow-400" />
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                Power Innovation Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join nameSpace in building the future of technology and empowering
              the next generation of innovators
            </p>
            <motion.a
              href="https://namespacecomm.in"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Partner With Us?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className={`${benefit.color} rounded-3xl p-8 shadow-xl`}
            >
              <benefit.icon className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/90 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Past Sponsors Section */}
      {/* <div className="bg-white/5 backdrop-blur-lg py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Valued Partners
          </motion.h2>

          <div className="space-y-16">
            {pastSponsors.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {category.logos.map((logo, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-6 text-center"
                    >
                      <Building className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="font-semibold text-gray-300">{logo.name}</p>
                      <p className="text-sm text-gray-500">{logo.year}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 py-32 px-6 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Connect with us to discuss partnership opportunities and create
            lasting impact in the tech community
          </p>
          <motion.a
            href="https://namespacecomm.in"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsor;
