import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ClubsList from "./pages/ClubsLists";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/club" element={<ClubsList />} />
      <Route path="/clubs/:clubId" element={<Home />} />
      <Route path="/clubs/:clubId/about" element={<About />} />
      <Route path="/clubs/:clubId/events" element={<Events />} />
      <Route path="/clubs/:clubId/team" element={<Team />} />
      <Route path="/clubs/:clubId/contact" element={<Contact />} />
    </Routes>
  );
}
