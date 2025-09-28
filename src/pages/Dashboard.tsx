/*import React from "react";
import { clubs } from "../data/clubs";
import Card from "../components/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {clubs.map((club) => (
        <Card key={club.id} club={club} />
      ))}
    </div>
  );
};

export default Dashboard;*/
import React from "react";
import { clubs } from "../data/clubsData";
import Card from "../components/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {clubs.map((club) => (
        <Card key={club.id} club={club} />
      ))}
    </div>
  );
};

export default Dashboard;

