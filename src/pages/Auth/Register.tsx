import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match. Please ensure both passwords are the same." });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Registration successful! Redirecting to login page..." });
        setTimeout(() => navigate("/login"), 2000);
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({ type: "error", text: "An unexpected error occurred. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
      </div>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold">
            <span className="block italic">EVENT</span>
            <span className="block">FUNDLY</span>
          </h1>
        </div>
        {/* Message Animation */}
        {message && (
          <div
            className={`p-4 mb-4 rounded-lg text-center transition-all duration-300 ${
              message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-[#252547] p-8 rounded-lg shadow-xl">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#2a2a4a] border-none text-white placeholder-gray-400 rounded"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#2a2a4a] border-none text-white placeholder-gray-400 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#2a2a4a] border-none text-white placeholder-gray-400 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#2a2a4a] border-none text-white placeholder-gray-400 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-bold rounded hover:bg-gray-200"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "SIGN UP"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/Signin")}
            className="text-gray-400 hover:text-white text-sm"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
