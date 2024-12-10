import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import Tasks from "./pages/Tasks/Tasks.jsx";
import TaskDetails from "./pages/TaskDetails/TaskDetails.jsx";
import TaskAdd from "./pages/TaskAdd/TaskAdd.jsx";
import TaskEdit from "./pages/TaskEdit/TaskEdit.jsx";
import Rewards from "./pages/Rewards/Rewards.jsx";
import RewardDetails from "./pages/RewardDetails/RewardDetails.jsx";
import RewardAdd from "./pages/RewardAdd/RewardAdd.jsx";
import React from "react";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/tasks/add" element={<TaskAdd />} />
          <Route path="/tasks/:id/edit" element={<TaskEdit />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/rewards/:id" element={<RewardDetails />} />
          <Route path="/rewards/add" element={<RewardAdd />} />
          {/* <Route path="/glimmers" element={<Glimmers />} /> */}
          {/* <Route path="/glimmers/add" element={<GlimmerAdd />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
