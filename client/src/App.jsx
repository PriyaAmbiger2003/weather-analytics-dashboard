import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🌤️ Weather Analytics Dashboard
      </h1>
      <Dashboard />
    </div>
  );
}
