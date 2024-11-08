import React from 'react';
import { useEffect } from 'react';
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
    { name: "Dell XPS 13", price: 1200, total: 1200, rating: 4.8 },
    { name: "Google Pixel 7", price: 700, total: 700, rating: 4.4 },
    { name: "MacBook Pro 14", price: 1800, total: 1800, rating: 4.9 },
    { name: "Apple Watch Series 8", price: 400, total: 400, rating: 4.9 },
    { name: "Samsung Galaxy Watch 5", price: 350, total: 350, rating: 4.4 },
    { name: "iPhone 14", price: 999, total: 999, rating: 4.7 },
    { name: "Wireless Noise-Cancelling Headphones", price: 199.99, total: 199.99, rating: 4.7 },
    { name: "Smart Fitness Tracker", price: 49.99, total: 49.99, rating: 4.8 },
    { name: "Samsung Galaxy S22", price: 850, total: 850, rating: 4.8 },
    { name: "HP Spectre x360", price: 1500, total: 1500, rating: 4.6 }
  ];
  

const PriceVsProductChart = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget-Haven";
      }, []);
  return (
    <div>
     <div className="text-white bg-[#9538E2] px-48 text-center flex flex-col items-center gap-4 py-10">
                <h2 className="text-3xl">Statistics</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    </div>
    
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Area type="monotone" dataKey="price" fill="#9538E2BB" stroke="#8884d8" />
        <Bar dataKey="price" barSize={30} fill="#9538E2" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
    </div>
  );
};

export default PriceVsProductChart;
