'use client';
import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: parseInt(age) }), // Convert age to number
    });

    if (response.ok) {
      alert("User added successfully!");
    } else {
      alert("Failed to add user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <label className="block mb-2">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full text-black focus:outline-none focus:border-blue-500" // Updated styles
        required
      />

      <label className="block mb-2">Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 mb-4 w-full text-black focus:outline-none focus:border-blue-500" // Updated styles
        required
      />
      <center><button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button></center>
    </form>
  );
}