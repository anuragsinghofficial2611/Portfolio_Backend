"use client";

import { useState } from "react";

export default function LoginPage() {
  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ secret, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 border rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-bold">Login</h1>

        <div>
          <label className="block mb-1">Secret</label>
          <input
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter secret"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white rounded-md py-2"
        >
          Login
        </button>
      </form>
    </main>
  );
}