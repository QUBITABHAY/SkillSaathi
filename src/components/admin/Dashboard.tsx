import React from "react";
import { Button } from "@/components/ui/button";
import './index.css'

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 0.5rem;
  }
}

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header with additional controls */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <Button variant="secondary">Add User</Button>
      </header>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Description for card 1.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Description for card 2.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Description for card 3.</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Card 4</h2>
          <p className="text-gray-600">Description for card 4.</p>
        </div>
      </section>

      {/* Recent Activities Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <ul className="divide-y divide-gray-200">
            <li className="py-2 text-gray-700">User JohnDoe logged in</li>
            <li className="py-2 text-gray-700">
              Settings updated for product X
            </li>
            <li className="py-2 text-gray-700">New order received #1024</li>
            <li className="py-2 text-gray-700">User JaneSmith signed up</li>
          </ul>
        </div>
      </section>

      {/* Footer Action */}
      <div className="mt-8 flex justify-end">
        <Button variant="destructive">Danger Action</Button>
      </div>
    </div>
  );
};

export default Dashboard;