import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users,
  Gift,
  Rocket,
  ClipboardList,
  Star,
  Globe,
  Building,
  Target,
  Network,
  Shield,
  Award,
  Heart,
  Zap,
} from "lucide-react";

const CommunityPartner = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Partnership Benefits",
      icon: Gift,
      color: "from-emerald-600 to-teal-600",
      items: [
        "Co-branded events and workshops",
        "Access to our diverse tech talent pool",
        "Exclusive promotional opportunities",
        "Priority access to nameSpace flagship events",
        "Joint content creation and knowledge sharing",
        "Cross-promotion across our social media platforms",
        "Collaborative community building initiatives",
        "Strategic networking opportunities"
      ]
    },
    {
      title: "Collaboration Areas",
      icon: Rocket,
      color: "from-blue-600 to-cyan-600",
      items: [
        "Technical Workshops & Training Sessions",
        "Hackathons & Innovation Challenges",
        "Industry Expert Speaking Opportunities",
        "Mentorship Programs",
        "Research & Development Projects",
        "Community Events & Meetups",
        "Student Placement Initiatives",
        "Open Source Project Collaborations"
      ]
    },
    {
      title: "Partner Requirements",
      icon: ClipboardList,
      color: "from-violet-600 to-purple-600",
      items: [
        "Commitment to tech community growth",
        "Alignment with nameSpace's mission and values",
        "Active participation in community initiatives",
        "Resources for collaborative events",
        "Dedicated point of contact",
        "Regular engagement with community members"
      ]
    },
    {
      title: "Impact & Reach",
      icon: Globe,
      color: "from-orange-600 to-red-600",
      items: [
        "Access to 16,000+ tech enthusiasts",
        "Presence across multiple campuses",
        "Direct engagement with student innovators",
        "Industry-academia bridge building",
        "Contribution to skill development",
        "Social impact through tech education"
      ]
    }
  ];

  const benefits = [
    { icon: Building, text: "Brand Visibility" },
    { icon: Target, text: "Market Reach" },
    { icon: Network, text: "Tech Network" },
    { icon: Shield, text: "Trust Building" },
    { icon: Award, text: "Recognition" },
    { icon: Heart, text: "Social Impact" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden py-20 px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-blue-600/20 to-purple-600/20" />
        
        <div className="max-w-7xl my-12 md:my-4 mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <HeartHandshake className="w-16 h-16 mx-auto mb-8 text-emerald-400" />
            <h1 className="text-5xl md:text-6xl h-40 md:h-20 font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
              Become a Community Partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join forces with nameSpace to empower the next generation of tech innovators
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToForm}
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Partner With Us
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
                <benefit.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
            Ready to Transform Tech Education?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply for Partnership
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
                src="https://lu.ma/embed/event/evt-MTDWUPGm194wVNu/simple"
                className="w-full h-[800px] md:h-[600px] border-0"
                title="Community Partnership Application Form"
              />
            </div>
          </motion.div>
          
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://lu.ma/event/evt-MTDWUPGm194wVNu", "_blank")}
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

export default CommunityPartner;