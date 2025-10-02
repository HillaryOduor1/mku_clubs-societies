/*
import * as React from "react";
import { Link } from "react-router-dom";
import { Club } from "../data/clubsData";

interface CardProps {
  club: Club;
}

export default function Card({ club }: CardProps) {
  return React.createElement(
    Link,
    {
      to: `/clubs/${club.id}`,
      className: "block"
    },
    React.createElement(
      "div",
      {
        className: "rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
      },
      React.createElement(
        "div",
        { className: "aspect-video overflow-hidden" },
        React.createElement("img", {
          src: club.logo,
          alt: club.name,
          className: "w-full h-48 object-cover"
        })
      ),
      React.createElement(
        "div",
        { className: "p-6" },
        React.createElement(
          "h3",
          { className: "text-xl font-semibold mb-2" },
          club.name
        ),
        React.createElement(
          "p",
          { className: "text-gray-600 text-sm line-clamp-2" },
          club.description
        )
      )
    )
  );
}*/
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description?: string;
  subtitle?: string; // role, date, etc.
  image?: string; // for avatars or event images
  initial?: string; // for icon circle
  to?: string; // optional link
}

export default function Card({
  title,
  description,
  subtitle,
  image,
  initial,
  to,
}: CardProps) {
  const content = (
    <div className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-200 dark:border-gray-700">
      {/* Image / Icon Circle */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
      ) : initial ? (
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">
            {initial}
          </span>
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
