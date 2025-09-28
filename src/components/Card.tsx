/*import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className = '', ...props }: CardProps) => {
  return (
    <div 
      className={`rounded-lg border bg-white dark:bg-gray-800 text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;*/
/*
import React from "react";
import { Club } from "../types/club";
import { Link } from "react-router-dom";

interface CardProps {
  club: Club;
}

const Card: React.FC<CardProps> = ({ club }) => {
  return (
    <div
      className="rounded-2xl shadow-md p-4 transition-transform hover:scale-105"
      style={{ borderTop: `4px solid ${club.color}` }}
    >
      <img src={club.logo} alt={club.name} className="w-16 h-16 mb-3" />
      <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {club.description}
      </p>
      <Link
        to={`/clubs/${club.id}`}
        className="text-primary-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default Card;*/
import { Link } from "react-router-dom";
import { Club } from "../types/club";

interface CardProps {
  club: Club;
}

export default function Card({ club }: CardProps) {
  return (
    <Link
      to={`/clubs/${club.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
    >
      <img
        //src={club.image}
        alt={club.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{club.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{club.description}</p>
      </div>
    </Link>
  );
}
