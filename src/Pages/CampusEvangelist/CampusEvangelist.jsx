import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Gift,
  Rocket,
  ClipboardList,
  ChevronDown,
  Star,
  Trophy,
  Target,
  Network,
  Code,
  Award,
  Heart,
  BookOpen,
} from "lucide-react";

const CampusEvangelist = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Roles & Responsibilities",
      icon: Users,
      color: "from-violet-600 to-purple-600",
      items: [
        "Create and Manage Public Groups: Foster a collaborative environment for members.",
        "Promote Public Events and Meetups: Actively market our events, ensuring high participation.",
        "Expand Community Reach: Engage students from various branches to build a diverse network.",
        "Collaboration Opportunities: Collaborate with other tech communities in upcoming events.",
        "Active Involvement: Work with the nameSpace core team to formulate community policies and initiatives.",
        "Lead the pack: Become a leader by guiding your campus community."
      ]
    },
    {
      title: "Perks & Benefits",
      icon: Gift,
      color: "from-blue-600 to-cyan-600",
      items: [
        "Selection Letter and Completion Certificate",
        "Expand your network within a dynamic community",
        "Leadership Experience under the nameSpace Community brand",
        "Exclusive Invitations to public meetups and flagship events",
        "Dedicated training on soft skills and technical guidance",
        "Access to community resources and member-only initiatives",
        "Organize national-level technical events",
        "Work on community open source projects"
      ]
    },
    {
      title: "Why Join Us",
      icon: Rocket,
      color: "from-emerald-600 to-teal-600",
      items: [
        "Career Advancement: Boost your resume with valuable experience",
        "Skill Development: Enhance leadership and project management skills",
        "Mentorship: Receive guidance from experienced professionals",
        "Be a Changemaker: Shape the future of tech communities",
        "Open a chapter: Priority for opening nameSpace chapters"
      ]
    },
    {
      title: "Eligibility Criteria",
      icon: ClipboardList,
      color: "from-orange-600 to-red-600",
      items: [
        "Current Enrollment: 2nd or 3rd-year bachelor's degree student",
        "Community Passion: Genuine interest in building tech communities",
        "Leadership Qualities: Ability to inspire and guide others",
        "Technical Proficiency: Strong development skills",
        "Enthusiasm to learn and contribute towards society"
      ]
    }
  ];

  const benefits = [
    { icon: Trophy, text: "Leadership Experience" },
    { icon: Target, text: "Career Growth" },
    { icon: Network, text: "Network Building" },
    { icon: Code, text: "Technical Skills" },
    { icon: Award, text: "Recognition" },
    { icon: Heart, text: "Community Impact" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden py-20 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        
        <div className="max-w-7xl my-12 md:my-4 mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-8 text-blue-400" />
            <h1 className="text-5xl md:text-6xl h-40 md:h-20 font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Become a Campus Evangelist
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join our elite team of campus leaders and shape the future of tech communities
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join the Movement
            </motion.button>
          </motion.div>

          {/* Quick Benefits */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-4 text-center"
              >
                <benefit.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <p className="text-sm font-medium text-gray-300">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className={`bg-gradient-to-r ${feature.color} p-8 rounded-3xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {feature.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Star className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                      <p className="text-white/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Ready to Make an Impact?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>

        {/* Form Section */}
        <div ref={formRef} className="mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdPV56Mxv10dj2rqYXGmQHUpa9H-8bgoc6AomecRFQVOxdbDg/viewform?embedded=true"
                className="w-full h-[800px] border-0"
                title="Application Form"
              />
            </div>
          </motion.div>
          
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdPV56Mxv10dj2rqYXGmQHUpa9H-8bgoc6AomecRFQVOxdbDg/viewform", "_blank")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-lg transition-all duration-300"
            >
              Open Form in New Tab
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusEvangelist;