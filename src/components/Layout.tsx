/*import * as React from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Navigation from "./Navigation";

interface LayoutProps {
  children?: React.ReactNode;
  clubId?: string;
}

export default function Layout({ children, clubId }: LayoutProps) {
  const location = useLocation();

  // Detect if this is a club page
  const isClubPage = clubId && location.pathname.startsWith(`/clubs/${clubId}`);

  // Club navigation items (only for club pages)
  const navItems = [
    { name: "Home", path: `/clubs/${clubId}` },
    { name: "About", path: `/clubs/${clubId}/about` },
    { name: "Events", path: `/clubs/${clubId}/events` },
    { name: "Team", path: `/clubs/${clubId}/team` },
    { name: "Contact", path: `/clubs/${clubId}/contact` },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {isClubPage ? (
        // ✅ Full club navigation
        <Navigation navItems={navItems} />
      ) : (
        // ✅ Just theme toggle (before club is selected)
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
      )}

      <main>{children}</main>
    </div>
  );
}*/
import * as React from "react";
import { useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Navigation from "./Navigation";

interface LayoutProps {
  children?: React.ReactNode;
  clubId?: string;
}

export default function Layout({ children, clubId }: LayoutProps) {
  const location = useLocation();

  // Detect if this is a club page
  const isClubPage = clubId && location.pathname.startsWith(`/clubs/${clubId}`);

  // Club navigation items (only for club pages)
  const navItems = [
    { name: "Home", path: `/clubs/${clubId}` },
    { name: "About", path: `/clubs/${clubId}/about` },
    { name: "Events", path: `/clubs/${clubId}/events` },
    { name: "Team", path: `/clubs/${clubId}/team` },
    { name: "Contact", path: `/clubs/${clubId}/contact` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header/Nav */}
      {isClubPage ? (
        <Navigation navItems={navItems} />
      ) : (
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        Powered by{" "}
        <a
          href="https://hillaryoduor.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          Hillary
        </a>
      </footer>
    </div>
  );
}

