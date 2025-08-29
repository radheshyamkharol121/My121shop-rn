/**
 * Admin Dashboard Page
 * Sales, Orders, Users summary दिखाता है
 */
import React, { useEffect, useState } from "react";
import { fetchAdminSummary } from "../../services/admin";

const Dashboard = () => {
  const [summary, setSummary] = useState({ orders: 0, users: 0, sales: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAdminSummary();
      setSummary(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>Orders: {summary.orders}</div>
      <div>Users: {summary.users}</div>
      <div>Total Sales: ₹{summary.sales}</div>
    </div>
  );
};

export default Dashboard;