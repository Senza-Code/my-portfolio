import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Museum from "./pages/Museum";
import Timeline from "./pages/Timeline";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/museum" element={<Museum />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}
