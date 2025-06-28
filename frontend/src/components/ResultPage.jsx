import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tumorInfo = {
  glioma: {
    description:
      "Gliomas are tumors that originate in the glial cells of the brain or spine. They can be aggressive and often require a combination of treatments.",
    riskFactors: [
      "Genetic disorders (e.g., Li-Fraumeni syndrome)",
      "Exposure to radiation",
      "Age (more common in adults)",
    ],
  },
  meningioma: {
    description:
      "Meningiomas form in the membranes that surround the brain and spinal cord. Most are benign but can still cause problems by pressing on the brain.",
    riskFactors: [
      "Older age",
      "Female sex hormones",
      "Radiation exposure",
      "Neurofibromatosis type 2",
    ],
  },
  pituitary: {
    description:
      "Pituitary tumors grow in the pituitary gland and may affect hormone production. Most are noncancerous but can affect vital body functions.",
    riskFactors: [
      "Family history of MEN1",
      "Hormonal imbalances",
      "Certain genetic syndromes",
    ],
  },
  no_tumor: {
    description:
      "No tumor was detected in the uploaded brain scan. If symptoms persist, consult a neurologist for further evaluation.",
    riskFactors: [],
  },
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-2xl mb-4">No prediction result found.</h2>
        <button
          onClick={() => navigate("/upload")}
          className="bg-indigo-600 px-6 py-2 rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  const info = tumorInfo[result.predicted_class];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative px-4">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveStars ${3 + Math.random() * 5}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Result Card */}
      <motion.div
        className="relative z-10 p-10 w-full max-w-2xl rounded-3xl backdrop-blur-xl border border-indigo-500/20 bg-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)] text-white text-center animate-fade-in"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-indigo-400 mb-4 animate-pulse">
          🧠 Prediction Result
        </h1>

        <p className="text-2xl font-semibold text-indigo-300 mb-4">
          Tumor Type:
          <span className="relative ml-3 px-4 py-2 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white font-bold shadow-lg animate-glow-border">
          {result.predicted_class.replace("_", " ")}
          </span>
        </p>

        {info && (
          <>
            <p className="text-white text-md mb-4 px-2 sm:px-6 leading-relaxed">
              <span className="font-semibold text-indigo-300">Description:</span>{" "}
              {info.description}
            </p>

            {info.riskFactors.length > 0 && (
              <div className="text-white text-md px-2 sm:px-6 text-left">
                <span className="font-semibold text-indigo-300">
                  Common Risk Factors:
                </span>
                <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-indigo-100 space-y-1">
                  {info.riskFactors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate("/upload")}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg shadow-md transition duration-300 hover:scale-105"
          >
            Upload Another Image
          </button>
        </div>
      </motion.div>

      {/* Custom animation for stars */}
      <style>{`
        @keyframes moveStars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
             box-shadow: 0 0 20px rgba(236, 72, 153, 0.7), 0 0 40px rgba(139, 92, 246, 0.6);
          }
          100% {
             box-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(168, 85, 247, 0.4);
          }
        }

        .animate-glow-border {
          animation: glowPulse 3s ease-in-out infinite;
        }

      `}</style>
    </div>
  );
};

export default ResultPage;
