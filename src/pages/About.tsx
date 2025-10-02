import React from "react";
import { useParams } from "react-router-dom";
import { getClubById } from "../data/clubsData";
import Layout from "../components/Layout";

export default function About() {
  const { clubId } = useParams();
  const club = clubId ? getClubById(clubId) : null;

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1
          className="text-2xl font-semibold text-red-600 dark:text-red-400"
          aria-live="polite"
        >
          Club not found
        </h1>
      </div>
    );
  }

  return (
    <Layout clubId={club.id}>
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid gap-8">
          {/* Club Heading */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight transition-colors duration-300">
              About <span className="text-blue-600 dark:text-blue-400">{club.name}</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Learn more about what makes this club special.
            </p>
          </header>

          {/* About Content */}
          <article
            className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-900 
                       shadow-sm hover:shadow-md transition-shadow duration-300 
                       rounded-2xl p-6 md:p-8"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {club.about}
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
