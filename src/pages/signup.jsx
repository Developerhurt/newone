"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup() {
   const router = useRouter();
  const [accountType, setAccountType] = useState("artist");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    description: "",
    gender: "",
    skills: "",
    company: "",
    designation: "",
    companycategory: "",
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await axios.post(`${API_URL}/api/auth/signup`, { ...formData, accountType }, { timeout: 10000 });
      setMessage({ text: "Account created successfully!", type: "success" });

      setFormData({
        name: "",
        email: "",
        phoneno: "",
        password: "",
        description: "",
        gender: "",
        skills: "",
        company: "",
        designation: "",
        companycategory: "",
      });

      setTimeout(() => router.push("/login"), 1200);
    } catch (error) {
      console.error("Signup error (frontend):", error?.response?.data || error.message || error);
      setMessage({ text: error.response?.data?.message || "Something went wrong!", type: "error" });
    } finally {
      setLoading(false);
    }
  };
  
  const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Left Side - Form Area */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-10">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">
          Create Your Account
        </h1>

        {/* Account Type Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {["artist", "professional", "guest", "admin"].map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAccountType(type)}
              className={`px-5 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                accountType === type
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={accountType}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Grid for 2-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="number"
                  name="phoneno"
                  value={formData.phoneno}
                  onChange={handleChange}
                  className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Artist-specific fields */}
              {accountType === "artist" && (
                <>
                  <div>
                    <label className="block mb-1">Gender</label>
                    <input
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Skills</label>
                    <input
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="e.g. Painting, Music, Dance"
                      className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                </>
              )}

              {/* Professional-specific fields */}
              {accountType === "professional" && (
                <>
                  <div>
                    <label className="block mb-1">Company</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Designation</label>
                    <input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1">Company Category</label>
                    <input
                      name="companycategory"
                      value={formData.companycategory}
                      onChange={handleChange}
                      className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </>
              )}

              {/* Description (full width) */}
              <div className="md:col-span-2">
                <label className="block mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-white/10 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              disabled={loading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold mt-4 transition-all"
            >
              {loading ? "Creating..." : "Sign Up"}
            </motion.button>

            {message.text && (
              <p
                className={`text-center mt-3 font-medium ${
                  message.type === "error"
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {message.text}
              </p>
            )}
          </motion.form>
        </AnimatePresence>

        {/* Already have account? */}
        <p className="text-sm mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>

      {/* Right Side - Animated Background */}
      <div className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [10, 0, 10] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center z-10"
        >
          Join Our <span className="text-blue-400">Creative</span> World
        </motion.h2>
      </div>
    </div>
  );
}
