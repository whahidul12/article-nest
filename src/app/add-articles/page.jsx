"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AddItemPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Item added successfully!");
        router.push("/items");
        router.refresh();
      } else {
        toast.error("Failed to add item");
      }
    } catch (error) {
      toast.error("Error connecting to server");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Add New Item</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Item Name</label>
          <input
            name="name"
            required
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            rows="4"
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              name="price"
              type="number"
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image URL (Optional)</label>
            <input
              name="image"
              type="text"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition"
        >
          Submit Item
        </button>
      </form>
    </div>
  );
}
