import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}