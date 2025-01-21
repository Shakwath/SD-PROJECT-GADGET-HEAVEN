import React from 'react';
import { useEffect } from 'react';
import image from '../../assets/image.png';
import imagesec from '../../assets/image2.png';
import imagetr from '../../assets/image3.webp';
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
  const reviews = [
    {
      name: "Emily Watson",
      rating: 5,
      reviewText:
        "I bought a smart fitness tracker and wireless headphones from Gadget Haven. Both gadgets are amazing! The tracker has helped me stay active, and the headphones have incredible sound quality. Highly recommend this website!",
      image: "https://i.ibb.co/ZYW3VTp/emily-avatar.jpg",
    },
    {
      name: "James Miller",
      rating: 4,
      reviewText:
        "The selection of gadgets is top-notch, and the prices are competitive. My MacBook Pro arrived in perfect condition, but the shipping took a bit longer than expected. Overall, a great experience!",
      image: "https://i.ibb.co.com/mBHcWkN/image2.png",
    },
    {
      name: "Sophia Brown",
      rating: 5,
      reviewText:
        "Absolutely love shopping at Gadget Haven! I’ve bought multiple items like the Dell XPS 13 and Apple Watch Series 8. The descriptions are accurate, and the quality is excellent.",
      image: "https://i.ibb.co.com/2Mx8z3R/image3.webp",
    },
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
   
    <h2 className='text-3xl'>Reviews Of Customers</h2>
    <div className="avatar-group -space-x-6 rtl:space-x-reverse items-center">
    <div className="avatar">
      <div className="w-12">
        <img src={imagesec}/>
      </div>
    </div>
    <div className="avatar">
      <div className="w-12">
      <img src={imagetr}/>
      </div>
    </div>
    <div className="avatar">
      <div className="w-12">
      <img src={image}/>
      </div>
    </div>
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content w-12">
        <span>+99</span>
      </div>
    </div>
    </div>
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl text-center font-bold text-[#9538E2] mb-8">
        What Our Customers Are Saying
      </h2>
      <div className="flex flex-col items-center space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 w-4/5 md:w-1/2"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full border-2 border-[#9538E2] mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{review.name}</h3>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={imagetr}/>
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
  </div>
  );
};

export default PriceVsProductChart;
