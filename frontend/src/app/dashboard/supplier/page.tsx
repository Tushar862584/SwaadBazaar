'use client';
import React, { useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import OrderTable from '../../../components/OrderTable';
import RatingOverview from '../../../components/RatingOverview';
import KYCStatus from '../../../components/KYCStatus';
import AddProductForm from '../../../components/AddProductForm';

const tabs = ['My Products', 'Orders', 'Reviews', 'KYC'];

export default function SupplierDashboard() {
  const [activeTab, setActiveTab] = useState('My Products');

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff3ec] to-[#ffe9e3] px-6 py-10 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#ff4e3d]">Supplier Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition backdrop-blur-md ${
                activeTab === tab
                  ? 'bg-[#ff4e3d]/90 text-white border-[#ff4e3d]'
                  : 'bg-white/40 text-[#ff4e3d] border-white/60 hover:bg-white/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
<div className="bg-white/60 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg">
  {activeTab === 'My Products' && (
    <>
      
      <div className="mt-6">
        <ProductCard />
        
      </div>
    </>
  )}
  {activeTab === 'Orders' && <OrderTable />}
  {activeTab === 'Reviews' && <RatingOverview />}
  {activeTab === 'KYC' && <KYCStatus />}
</div>
      </div>
    </main>
  );
}
