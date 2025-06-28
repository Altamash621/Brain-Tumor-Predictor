import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/gradient-technology-background.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showPortal, setShowPortal] = useState(false);

  const handleEnter = () => {
    setShowPortal(true);
    setTimeout(() => navigate("/upload"), 3000); // portal animation duration
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
         style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      {!showPortal && (
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold text-indigo-400 mb-8 drop-shadow-lg">
            Brain Tumor Predictor
          </h1>
          <button
            onClick={handleEnter}
            className="relative px-10 py-4 text-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg
                       bg-indigo-700 hover:bg-indigo-800
                       before:absolute before:inset-0 before:rounded-full before:blur-lg
                       before:bg-indigo-500/30 before:animate-pulse"
          >
            Enter
          </button>
        </div>
      )}

      {/* Portal transition */}
      <AnimatePresence>
        {showPortal && (
          <motion.div
            className="absolute inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <Starfield />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ⭐ Starfield component for space portal effect
function Starfield() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {[...Array(150)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 0.5,
            height: Math.random() * 2 + 0.5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            filter: "drop-shadow(0 0 4px white)",
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default LandingPage;
