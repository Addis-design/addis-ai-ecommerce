import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from "./../assets/user.png"
import client2 from "./../assets/programmer.png"
import community from "./../assets/community.jpg"
import solutions from "./../assets/solution.png"
import business from "./../assets/Business.jpg"
import envy from "./../assets/envy.png"
const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };
      
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          <div>
            <div className="text-center">
              <img src={solutions} alt="Addis AI Solutions" className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Addis AI and Software Solutions</h1>
              <p className="text-xl mb-8">Empowering businesses with cutting-edge technology</p>
              <Link to="/products" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Explore Our Products</Link>
            </div>
          </div>
          <div>
            <div className="text-center">
            <img src={business} alt="Addis AI business" className="w-full h-64 object-cover mb-4 rounded-lg" />

              <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovative Solutions for Your Business</h1>
              <p className="text-xl mb-8">Discover the power of AI and software development</p>
              <Link to="/services" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Our Services</Link>
            </div>
          </div>
          <div>
            <div className="text-center">
            <img src={community} alt="Addis AI Community" className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Community</h1>
              <p className="text-xl mb-8">Collaborate and grow with like-minded professionals</p>
              <Link to="/contact" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Contact Us</Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Computers", desc: "High-performance machines for every need", link: "/computers", icon: "💻" },
              { title: "Software", desc: "Innovative POS and custom solutions", link: "/software", icon: "🖥️" },
              { title: "Websites", desc: "Stunning and functional web presence", link: "/websites", icon: "🌐" },
              { title: "Portfolio Websites", desc: "Showcase your work beautifully", link: "/portfolio-websites", icon: "🎨" },
              { title: "Mobile Apps", desc: "Engaging apps for iOS and Android", link: "/mobile-apps", icon: "📱" },
              { title: "Writing Accounts", desc: "Premium accounts for writers", link: "/writing-accounts", icon: "✍️" },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
                <Link to={category.link} className="text-blue-600 hover:underline">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md flex">
            <img src={client1} alt="John Doe" className="w-16 h-16 rounded-full mr-4 object-cover" />
            <div>
              <p className="text-xl italic mb-4">"Addis AI transformed our business with their innovative solutions. Their expertise in AI and software development is unparalleled."</p>
              <p className="font-semibold">- John Doe, CEO of TechCorp</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md flex">
            <img src={client2} alt="Jane Smith" className="w-16 h-16 rounded-full mr-4 object-cover" />
            <div>
              <p className="text-xl italic mb-4">"The team at Addis AI is exceptional. Their dedication and expertise helped us achieve our goals with ease."</p>
              <p className="font-semibold">- Jane Smith, CTO of Innovate Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8">Discover how Addis AI and Software Solutions can help you achieve your goals.</p>
          <Link to="/contact" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;