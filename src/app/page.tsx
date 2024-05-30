"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/health');
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setMessage('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-24">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 relative">
        <h1 className="text-2xl font-bold mb-4">API Health Check</h1>
        <button
          className="absolute top-5 right-6 text-blue-500 hover:text-blue-700 transition-colors duration-300 text-2xl"
          onClick={fetchData}
          aria-label="Refresh"
        >
          &#x21bb;
        </button>
        <div className="mb-2">
          <span className="font-medium text-gray-700">GET: </span>
          <a href="/api/health" className="text-blue-500 hover:text-blue-700">
            <code>/api/health</code>
          </a>
        </div>
        <div className="mt-4">
          <span className="text-gray-700">Response:</span>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 flex items-center">
            {loading ? (
              <div className="w-6 h-6 border-4 border-gray-200 border-t-black rounded-full animate-spin mr-2" />
            ) : (
              message
            )}
          </pre>
        </div>
      </div>
    </main>
  );
}
