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

// src/pages/Admin/Dashboard.jsx में stats cards update करें
const statsCards = [
  {
    title: 'Total Sales',
    value: `₹${stats.totalSales.toLocaleString()}`,
    icon: IndianRupee,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Total Orders',
    value: stats.totalOrders,
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Total Products',
    value: stats.totalProducts,
    icon: Package,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Out of Stock',
    value: stats.outOfStock,
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Dropshipping',
    value: stats.dropshippingProducts,
    icon: Truck,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Total Users',
    value: stats.totalUsers,
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
]

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