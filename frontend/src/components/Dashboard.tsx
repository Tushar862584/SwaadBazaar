'use client';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3000/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessage(data.message || 'Error loading dashboard');
    };
    fetchDashboard();
  }, []);

  return <h1>{message}</h1>;
}

export default Dashboard;