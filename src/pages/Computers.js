import React, { useState } from 'react';
import hp_11g6 from "./../assets/hp11g6.jpeg"
import hp from "./../assets/hp.png"
import envy from "./../assets/envy.jpeg"
import dell from "./../assets/dell.png"
import lenovo from "./../assets/lenovo.png"


// Mock product data (replace this with your actual product data)
const mockProducts = [
  { id: 1, name: "HP 11G6 TOUCHSCREEN X360", category: "HP",description:"COREI3 10TH GEN 8GB 128SSD", price: 21000, image: hp_11g6} ,
  { id: 2, name: "HP 840G6", category: "HP", description:"COREI5 8TH GEN 8GB 256SSD",price: 30000, image:hp},
  { id: 2, name: "HP ENVY X360 TOUCHSCREEN", category: "HP", description:"RYZEN 5 8GB 512SSD 2GB RADEON GRAPHICS",price: 50000, image:envy},
  { id: 1, name: "Hp elitebook 840 G7", category: "HP",description:"10th generation 16gb/512ssd", price:53000, image: hp},
  { id: 2, name: "Hp elitebook 840g7", category: "HP", description:"corei7 8th 32GB/512ssd ",price: 55000, image:hp},
  { id: 2, name: "HP 650 G5", category: "HP", description:"COREI5 8TH GEN 8GB 256SSD ",price: 28000, image:hp}
,
{ id: 1, name: "Hp 1030X360G3", category: "HP",description:"COREI5 8TH GEN 16GB 256SSD TOUCHSCREEN", price: 39000, image: hp },
  { id: 2, name: "Hp 840g5 corei7", category: "HP", description:"8TH GEN 16GB 256SSD TOUCHSCREEN ",price: 40000, image:hp},
  { id: 2, name: "Lenovo t480", category: "LENOVO ", description:"corei5 8th gen 8gb 256ssd ",price: 28000, image:lenovo},
  { id: 1, name: "lenovo corei7", category: "LENOVO",description:"8th gen 16gb 512ssd", price: 35000, image:lenovo },
  { id: 2, name: "lenovo t490", category: "LENOVO", description:"corei5 8th gen 16gb 256ssd ",price: 30000, image:lenovo},
  { id: 2, name: "Lenovo t480", category: "LENOVO ", description:"corei5 8th gen 8gb 256ssd ",price: 28000, image:lenovo},
  { id: 1, name: "lenovo corei7", category: "LENOVO",description:"8th gen 16gb 512ssd", price: 35000, image: lenovo },
  { id: 1, name: "lenovo T480", category: "LENOVO",description:"corei7 8th gen 16gb 512ssd", price: 35000, image: lenovo },
  { id: 2, name: "Lenovo T490s corei7", category: "LENOVO", description:"8th gen 16gb 512ssd touchscreen ",price: 40000, image:lenovo},
  { id: 2, name: "Dell 5400", category: "DELL", description:"Corei5 8th gen 8gb 256ssd",price: 27000, image:dell}
  ,{ id: 2, name: "Dell 3410", category: "DELL", description:"Corei5 10th gen 16gb 256ssd ",price: 35000, image:dell}
 , { id: 2, name: "Dell 5410", category: "DELL", description:"corei5 10th gen 8gb 256ssd ",price: 35000, image:dell}
  ,{ id: 2, name: "Dell 7410", category: "DELL", description:"Corei7 10th gen 16gb 512ssd ",price: 45000, image:dell}
  ,{ id: 2, name: "lenovo x280 ", category: "LENOVO ", description:"corei5 8th gen 8gb 256ssd touchscreen ",price: 28000, image:lenovo},
  { id: 1, name: "Lenovo x28", category: "LENOVO",description:"corei7 8th gen 16gb 256ssd", price: 30000, image: lenovo },
  { id: 2, name: "HP 840 G4", category: "HP", description:"COREI5 7TH GEN 16GB 256SSD TOUCHSCREEN ",price: 26000, image:hp},
 

]
;

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-600 font-bold">KES {product.price.toFixed(2)}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
        View Details
      </button>
    </div>
  </div>
);

export default function Computers() {
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
       <h1 className="text-3xl font-bold mb-8 text-center">High-Performance Laptops</h1>
        
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
              <option value="DELL">DELL</option>
              <option value="HP">HP</option>
              <option value="MacBooks">MacBooks</option>
              <option value="LENOVO">LENOVO</option>
              <option value="SSD and HDD">SSD and HDD</option>
              <option value="Batteries">Batteries</option>
              <option value="Mouses">Mouses</option>
              <option value="Laptop Charger">Laptop Charger</option>
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