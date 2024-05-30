"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => {
        console.log(response)
        response.text()
      })
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-center">{message}</p>
    </main>
  );
}
