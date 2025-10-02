/*import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 safe-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-in">Hi, I'm <span className="text-primary-600">Hillary Oduor</span></h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8 animate-slide-in">Software Engineer & Web Developer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in">
            I create beautiful, functional, and responsive web applications with a focus on user experience and clean code.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in">
            <Link 
              to="/projects" 
              className="inline-flex items-center justify-center rounded-md font-medium h-10 py-2 px-4 bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md font-medium h-10 py-2 px-4 border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;*/
/*
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  { image: "/images/it-club.jpg", text: "Welcome to MKU Clubs & Societies" },
  { image: "/images/business-club.jpg", text: "Explore Opportunities & Leadership" },
  { image: "/images/journalism-club.jpg", text: "Discover, Connect, and Grow" },
  { image: "", text: "Join a Community. Shape Your Future." }, // fallback: gradient background
];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Manual controls
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Swipe gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide(); // swipe left
    if (touchEndX - touchStartX > 50) prevSlide(); // swipe right
  };

  const slide = slides[current];
  const hasImage = slide.image && slide.image.trim() !== "";

  return (
    <div
      className="relative h-screen flex items-center justify-center text-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background /}
      {hasImage ? (
        <img
          src={slide.image}
          alt={slide.text}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
      )}

      {/* Overlay /}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content /}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
          {slide.text}
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Get Started
        </button>
      </div>

      {/* Controls /}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
};

export default Home;*
import * as React from "react";
import { useParams } from "react-router-dom";
import { getClubById } from "../data/clubsData";
import Layout from "../components/Layout";

export default function Home() {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubId ? getClubById(clubId) : null;

  if (!club) {
    return React.createElement(
      "div",
      { className: "container mx-auto px-4 py-8" },
      React.createElement(
        "h1",
        { className: "text-2xl font-bold text-red-600" },
        "Club not found"
      )
    );
  }

  return React.createElement(
    Layout,
    { clubId: club.id },
    club.hero ? React.createElement(
      "section",
      { className: "bg-blue-600 text-white" },
      React.createElement(
        "div",
        { className: "container mx-auto px-4 py-20 text-center" },
        React.createElement(
          "h1",
          { className: "text-4xl font-bold mb-4" },
          club.hero.title
        ),
        React.createElement(
          "p",
          { className: "text-xl mb-8" },
          club.hero.subtitle
        ),
        React.createElement(
          "button",
          {
            className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          },
          "Join Our Club"
        )
      )
    ) : null,
    React.createElement(
      "section",
      { className: "container mx-auto px-4 py-12" },
      React.createElement(
        "div",
        { className: "text-center mb-12" },
        React.createElement(
          "h2",
          { className: "text-3xl font-bold mb-4" },
          "Welcome to ",
          club.name
        ),
        React.createElement(
          "p",
          { className: "text-gray-600 max-w-2xl mx-auto" },
          club.description
        )
      )
    )
  );
}*/
import * as React from "react";
import { useParams } from "react-router-dom";
import { getClubById } from "../data/clubsData";
import Layout from "../components/Layout";

export default function Home() {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubId ? getClubById(clubId) : null;

  if (!club) {
    return (
      <div className="grid place-items-center min-h-screen bg-white dark:bg-gray-900 px-4">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Club not found
        </h1>
      </div>
    );
  }

  return (
    <Layout clubId={club.id}>
      {/* Hero Section */}
      {club.hero && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900" />
          <div className="relative container mx-auto px-4 py-24 text-center grid gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {club.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              {club.hero.subtitle}
            </p>
            <div>
              <button
                className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-md hover:shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-100 dark:text-blue-900 dark:hover:bg-gray-200 transition-all duration-300"
              >
                Join Our Club
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">
        <div className="grid gap-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Welcome to {club.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {club.description}
          </p>
        </div>
      </section>
    </Layout>
  );
}
