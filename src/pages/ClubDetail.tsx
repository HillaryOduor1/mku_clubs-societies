/*import React from "react";
import { useParams } from "react-router-dom";
import { clubs } from "../data/clubs";
import { Club } from "../types/club";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club: Club | undefined = clubs.find((c) => c.id === id);

  if (!club) {
    return <p className="p-6 text-red-500">Club not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={club.logo} alt={club.name} className="w-24 h-24 mb-4" />
      <h1 className="text-2xl font-bold mb-2" style={{ color: club.color }}>
        {club.name}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{club.description}</p>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">About</h2>
        <p>{club.about}</p>
      </section>

      <section className="mb-4">
        <h2 className="text-lg font-semibold">Blog</h2>
        <p>{club.blog}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Contact</h2>
        <p>{club.contact}</p>
      </section>
    </div>
  );
};

export default ClubDetail;*/
/*
import React from "react";
import { useParams } from "react-router-dom";
import { clubs } from "../data/clubsData";
import { Club } from "../types/club";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club: Club | undefined = clubs.find((c: Club) => c.id === id);

  if (!club) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-600">Club Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <img src={club.logo} alt={club.name} className="w-24 h-24 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{club.name}</h1>
      <p className="mb-2">{club.about}</p>
      <p className="mb-2 text-sm text-gray-600">{club.blog}</p>
      <p className="font-medium">Contact: {club.contact}</p>
    </div>
  );
};

export default ClubDetail;*/
import { useParams, Link, Outlet } from "react-router-dom";
import { clubs } from "../data/clubsData";
import { Club } from "../types/club";

const ClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const club: Club | undefined = clubs.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-600">Club Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <img src={club.logo} alt={club.name} className="w-24 h-24 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{club.name}</h1>
      <p className="mb-4">{club.description}</p>

      {/* Sub-navigation for nested routes */}
      <nav className="flex gap-4 mb-6">
        <Link to="about" className="text-blue-600 hover:underline">
          About
        </Link>
        <Link to="contact" className="text-blue-600 hover:underline">
          Contact
        </Link>
        <Link to="blog" className="text-blue-600 hover:underline">
          Blog
        </Link>
      </nav>

      {/* Nested content */}
      <Outlet />
    </div>
  );
};

export default ClubDetail;
