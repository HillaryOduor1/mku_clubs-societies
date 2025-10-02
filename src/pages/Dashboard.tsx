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
/*import React from "react";
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

export default Dashboard;*/
import * as React from "react";
import Layout from "../components/Layout";

export default function Dashboard() {
  return React.createElement(
    Layout,
    { clubId: "" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen" },
      React.createElement(
        "h1",
        { className: "text-3xl font-bold text-gray-900 dark:text-white mb-6" },
        "Dashboard"
      ),
      React.createElement(
        "p",
        { className: "text-gray-600 dark:text-gray-300" },
        "Welcome to your dashboard. This page is under development."
      )
    )
  );
}

