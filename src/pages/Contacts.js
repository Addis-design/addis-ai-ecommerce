import React from 'react';

export default function Contacts() {
  return (
    <section className="bg-gray-100 text-gray-700 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.</p>
        </div>
        <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p className="text-lg">You can also contact us through the following methods:</p>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">muchuimakumi0@gmail.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+254713129924</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">123 Addis AI St, CBD, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
