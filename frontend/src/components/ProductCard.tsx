'use client';
import React, { useState } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';

export default function ProductCard() {
  const [products, setProducts] = useState([
    { name: 'Tomatoes', price: '₹40/kg', description: 'Fresh red tomatoes' },
    { name: 'Onions', price: '₹35/kg', description: 'Best quality onions' },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', description: '' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#ff4e3d]">My Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((prod, i) => (
          <div key={i} className="bg-white/40 p-4 rounded-xl shadow-md border border-white/30">
            <h3 className="text-lg font-bold">{prod.name}</h3>
            <p className="text-sm text-gray-700">{prod.description}</p>
            <p className="mt-1 font-medium">{prod.price}</p>
            <button className="text-xs mt-2 text-[#ff4e3d] hover:underline"><FaEdit className="inline mr-1" /> Edit</button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white/30 p-4 rounded-xl border border-white/30">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-[#ff4e3d]">
          <FaPlus /> Add New Product
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-md border bg-white/70"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            className="p-2 rounded-md border bg-white/70"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 rounded-md border bg-white/70"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
        </div>
        <button onClick={addProduct} className="mt-4 px-4 py-2 bg-[#ff4e3d] text-white rounded-full hover:bg-[#e03b2d] transition">Add Product</button>
      </div>
    </div>
  );
}
