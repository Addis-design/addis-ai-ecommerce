import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ai from "../../assets/AI.png"
import portfolio from "../../assets/portfolio.png"
import web from "../../assets/web.png"
import ecomerce from "../../assets/ecomerce.png"
import pos from "../../assets/POS.png"
import hp from "../../assets/hp.png"
import app from "../../assets/mobileapp.png"
import Writing from "../../assets/writting.png"
import dell from "../../assets/dell.png"
import lenovo from "../../assets/lenovo.png"
// Mock product data (replace this with your actual product data)
const mockProducts = [
  { id: 1, name: "High-Performance Workstation", category: "Computers", price: 25000, image: hp },
  { id: 2, name: "Professional POS Software", category: "Software", price: 10000, image: pos },
  { id: 3, name: "E-commerce Website Package", category: "Websites", price: 50000, image:ecomerce },
  { id: 4, name: "Portfolio Website Template", category: "Portfolio Websites", price: 50000, image: portfolio },
  { id: 5, name: "Custom Mobile App Development", category: "Mobile Apps", price: 80000, image: app },
  { id: 6, name: "Premium Writing Account", category: "Writing Accounts", price: 150000, image: Writing },
  { id: 7, name: "AI Fundamentals Course", category: "Online Courses", price: 20000, image: ai },
  { id: 2, name: "Lenovo t480", category: "Computers", description:"corei5 8th gen 8gb 256ssd ",price: 28000, image:lenovo},
,
, { id: 2, name: "Dell 5410", category: "Computers", description:"corei5 10th gen 8gb 256ssd ",price: 35000, image:dell}

];

const ProductCard = ({ product }) => {
  const categoryPath = product.category.toLowerCase().replace(/ /g, '-');
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-blue-600 font-bold">KES{product.price.toFixed(2)}</p>
        <Link 
          to={`/${categoryPath}`}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 inline-block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default function Products() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSortedProducts = mockProducts
    .filter(product => category === "All" || product.category === category)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="category" className="mr-2">Filter by:</label>
          <select 
            id="category"
            className="p-2 border rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Computers">Computers</option>
            <option value="Software">Software</option>
            <option value="Websites">Websites</option>
            <option value="Portfolio Websites">Portfolio Websites</option>
            <option value="Mobile Apps">Mobile Apps</option>
            <option value="Writing Accounts">Writing Accounts</option>
            <option value="Online Courses">Online Courses</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select 
            id="sort"
            className="p-2 border rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}