import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function LandingPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen 
        bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
        
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-6">
          Welcome to MKU Clubs & Societies
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-center mb-10 max-w-xl text-gray-600 dark:text-gray-300">
          Explore different clubs, meet like-minded students, and grow your skills with 
          vibrant communities at Mount Kenya University.
        </p>

        {/* CTA Button */}
        <Link
          to="/club"
          className="px-6 py-3 rounded-2xl text-lg font-semibold shadow-md
          bg-blue-600 text-white hover:bg-blue-700 
          dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          Explore Clubs
        </Link>
      </div>
    </Layout>
  );
}
