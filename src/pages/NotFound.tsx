import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
