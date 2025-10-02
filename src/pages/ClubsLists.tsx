import React from "react";
import { clubsData } from "../data/clubsData";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function ClubsList() {
  return (
    <Layout clubId="">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              MKU Clubs & Societies
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Discover and join various clubs and societies at Mount Kenya University
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {clubsData.map((club) => (
              <Card
                key={club.id}
                title={club.name}
                description={club.description}
                initial={club.name.charAt(0)} // show letter in circle
                to={`/clubs/${club.id}`} // clickable
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
