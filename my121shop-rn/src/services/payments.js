/**
 * Payments Services (Razorpay / PayPal)
 */

import axios from "axios";

/**
 * Razorpay order create करता है backend API call करके
 * @param {number} amount
 * @param {string} currency
 */
export const createRazorpayOrder = async (amount, currency = "INR") => {
  const response = await axios.post("/api/razorpay/create-order", { amount, currency });
  return response.data;
};

/**
 * Payment verification
 * @param {Object} paymentData
 */
export const verifyPayment = async (paymentData) => {
  const response = await axios.post("/api/razorpay/verify", paymentData);
  return response.data;
};