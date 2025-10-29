"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        { email, password }
      );
      const userData = res.data;

      localStorage.setItem("authToken", userData.token); // Save JWT
      localStorage.setItem("userData", JSON.stringify(userData));

      setMessage({ text: "Login successful! Redirecting...", type: "success" });

      // Redirect based on role
      switch (userData.accountType) {
        case "admin":
          router.push("/dashboard");
          break;
        case "guest":
          router.push("/");
          break;
        case "artist":
          router.push("/artist/dashboard");
          break;
        case "professional":
          router.push("/professional/dashboard");
          break;
        default:
          router.push("/dashboard");
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || "Invalid email or password!";
      setMessage({ text: errMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Animated Background */}
      <motion.div
        className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-64 h-64 bg-white rounded-full opacity-20 animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
      {/* Right Side Form */}
      <div className="md:w-1/2 flex items-center justify-center p-10 bg-white">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <h1 className="text-4xl font-bold text-indigo-700">Welcome Back 👋</h1>
          <p className="text-gray-600 mb-6">Login to access your personalized dashboard.</p>
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Message */}
          {message.text && (
            <p
              className={`text-sm ${
                message.type === "error" ? "text-red-500" : "text-green-600"
              }`}
            >
              {message.text}
            </p>
          )}
          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
            >
              ← Return to Landing Page
            </button>
          </div>
          {/* Signup Link */}
          <p className="text-gray-500 text-center mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
