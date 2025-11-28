import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Museum from "./pages/Museum";
import Timeline from "./pages/Timeline";
import LionLinkOverview from "./lionlink/LionLinkOverview";
import Checkpoint1 from "./lionlink/Checkpoint1";
import Checkpoint2 from "./lionlink/Checkpoint2";
import Checkpoint3 from "./lionlink/Checkpoint3";
import Checkpoint4 from "./lionlink/Checkpoint4";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/museum" element={<Museum />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/lionlink" element={<LionLinkOverview />} />
      <Route path="/lionlink/checkpoint-1" element={<Checkpoint1 />} />
      <Route path="/lionlink/checkpoint-1" element={<Checkpoint1 />} />
      <Route path="/lionlink/checkpoint-2" element={<Checkpoint2 />} />
      <Route path="/lionlink/checkpoint-3" element={<Checkpoint3 />} />
      <Route path="/lionlink/checkpoint-4" element={<Checkpoint4 />} />

    </Routes>
  );
}
