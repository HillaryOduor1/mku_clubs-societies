import React from "react";
import { clubs } from "../data/clubsData";
import { Link } from "react-router-dom";

const ClubLanding: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Clubs</h1>
      <ul className="list-disc pl-6 space-y-2">
        {clubs.map((club) => (
          <li key={club.id}>
            <Link to={`/clubs/${club.id}`} className="text-blue-600 underline">
              {club.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubLanding;
