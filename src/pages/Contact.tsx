/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/Contact.tsx
import * as React from "react";
import { useParams } from "react-router-dom";
import { getClubById } from "../data/clubsData";
import Layout from "../components/Layout";

export default function Contact() {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubId ? getClubById(clubId) : null;

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 animate-pulse">
          Club not found
        </h1>
      </div>
    );
  }

  // ✅ Use brandColors instead of settings
  const brand = club.brandColors?.primary || "#3B82F6";
  const neutral = club.brandColors?.neutral || "#F9FAFB";
  const contrast = club.brandColors?.contrast || "#111827";

  return (
    <Layout clubId={club.id}>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Contact {club.name}
          </h1>

         {/* Info Card */}
          <div className="rounded-2xl shadow-lg p-10 mb-12 transition-transform duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6">
              We'd love to hear from you! Reach out through the form below or email us directly.
            </p>
            <p className="font-medium">
              📧{" "}
              <span className="font-semibold" style={{ color: brand }}>
                {club.contact}
              </span>
            </p>
          </div>
          {/* Contact Form */}
<div className="rounded-2xl shadow-lg p-10 mb-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
  <form className="space-y-6">
    <div>
      <label className="block text-sm font-medium mb-1">Name</label>
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 
                   bg-gray-50 dark:bg-gray-700 
                   text-gray-900 dark:text-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--brand)]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 
                   bg-gray-50 dark:bg-gray-700 
                   text-gray-900 dark:text-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--brand)]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Message</label>
      <textarea
        rows={4}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 
                   bg-gray-50 dark:bg-gray-700 
                   text-gray-900 dark:text-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--brand)]"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 px-6 rounded-lg font-semibold shadow-md 
                 transition-transform duration-300 hover:scale-[1.02] 
                 text-white"
      style={{ backgroundColor: brand }}
    >
      Send Message
    </button>
  </form>
</div>


         
        </div>
      </section>
    </Layout>
  );
}
