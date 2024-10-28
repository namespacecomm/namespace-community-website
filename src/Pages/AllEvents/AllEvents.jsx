import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import AdvancedGallery from "../../components/Gallery/AdvancedGallery";
import {
  Galleryimages,
  images,
  hackhazardsImages,
} from "../../constants/constants";
import { PastEvents } from "./eventsConstants";
import Hackgallery from "../../components/Gallery/Hackgallery";
import EventCard from "../../utils/EventCard";
import { motion } from "framer-motion";
import css from "./AllEvents.css";

const AllEvents = () => {
  const eventTypes = [
    "HACKATHON",
    "BOOTCAMP",
    "SEMINAR",
    "WEBINAR",
    "WORKSHOP",
    "MEETUP",
    "CONTEST",
    "LEARNATHON",
    "PARTNERSHIP",
    "IDEATHON",
    "HACKTOBERFEST",
  ];

  const [selectedType, setSelectedType] = useState("");
  const [activeTab, setActiveTab] = useState("events");

  const getTypeColor = (type) => {
    const colors = {
      HACKATHON: "bg-gradient-to-r from-red-500 to-red-600",
      BOOTCAMP: "bg-gradient-to-r from-blue-500 to-blue-600",
      SEMINAR: "bg-gradient-to-r from-green-500 to-green-600",
      WEBINAR: "bg-gradient-to-r from-purple-500 to-purple-600",
      WORKSHOP: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      MEETUP: "bg-gradient-to-r from-pink-500 to-pink-600",
      CONTEST: "bg-gradient-to-r from-teal-500 to-teal-600",
      LEARNATHON: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      PARTNERSHIP: "bg-gradient-to-r from-orange-500 to-orange-600",
      IDEATHON: "bg-gradient-to-r from-cyan-500 to-cyan-600",
      HACKTOBERFEST: "bg-gradient-to-r from-purple-600 to-purple-700",
    };
    return colors[type] || "bg-gradient-to-r from-gray-300 to-gray-400";
  };

  const getLocationBadge = (location) => {
    const badges = {
      VIRTUAL: "bg-gradient-to-r from-green-400 to-green-500",
      "IN-PERSON": "bg-gradient-to-r from-blue-400 to-blue-500",
      HYBRID: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    };
    return badges[location] || "bg-gradient-to-r from-gray-300 to-gray-400";
  };

  const filteredEvents = selectedType
    ? PastEvents.filter((event) => event.type === selectedType)
    : PastEvents;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-4 px-4">
      {/* Hero Section */}
      <div className="mb-12">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 animate-pulse"></div>
         */}
        <div className="mx-auto py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto"
          >
            Join us in our journey of innovation and learning through various
            events designed to enhance your skills and expand your network.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="mx-auto mb-8 z-10">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Past Events
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "gallery"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>

        {/* Gallery or Events Section */}
        {activeTab === "gallery" && (
          <div className="mx-auto mt-20">
            <div className="grid grid-cols-1 gap-8">
              <Hackgallery images={images} />
              <Hackgallery images={Galleryimages} />
              <Hackgallery images={hackhazardsImages} />
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div className="mx-auto mt-20">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType("")}
                className={`px-4 py-2 rounded-full transition-all duration-300 min-w-[120px] text-sm ${
                  selectedType === ""
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                All Events
              </motion.button>
              {eventTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 min-w-[120px] text-sm ${
                    selectedType === type
                      ? getTypeColor(type)
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid gap-6 z-25">
              {filteredEvents.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-lg border border-gray-700"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`px-4 py-2 rounded-full text-sm text-center font-semibold min-w-[150px] ${getTypeColor(
                          event.type
                        )}`}
                      >
                        {event.type}
                      </div>
                      <h3 className="text-xl font-semibold">{event.name}</h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-gray-400">{event.date}</span>
                      <div
                        className={`px-4 py-2 text-center rounded-full text-sm font-semibold min-w-[150px] ${getLocationBadge(
                          event.location
                        )}`}
                      >
                        {event.location}
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gray-400 cursor-pointer"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
