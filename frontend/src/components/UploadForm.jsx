import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handlePredict = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      navigate("/result", { state: result });
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_30px_5px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_10px_rgba(99,102,241,0.5)] transition duration-300 p-12 rounded-3xl w-full max-w-xl min-h-[400px] flex flex-col items-center gap-8 text-center relative animate-fade-in">
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 drop-shadow-lg">
          🧠 Brain Tumor Classifier
        </h1>

        {/* Upload Box */}
        <label className="block border-2 border-dashed border-indigo-400 rounded-xl p-6 cursor-pointer bg-indigo-950/30 hover:bg-indigo-900/40 transition duration-200 hover:shadow-indigo-500/30 hover:shadow-xl">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <p className="text-indigo-300 font-medium">
            Drag & Drop or Click to Upload
          </p>
        </label>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 mx-auto rounded-xl shadow-lg border border-indigo-500"
            />
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mt-4" />
          </div>
        )}

        {/* Predict Button */}
        <button
          onClick={handlePredict}
          disabled={!file || loading}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Predicting..." : "Predict Tumor Class"}
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
