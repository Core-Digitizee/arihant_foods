import React, { useState } from 'react';

interface GetInTouchProps {
  className?: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className={`relative w-full ${className}`}>
      {/* Top Section with Background */}
      <div
        className="relative w-full h-[830px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/spices-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white px-4 z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Jaini Purva' }}
          >
            Get In Touch
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Jaini Purva' }}
          >
            We'd love to hear from you! Whether you have questions about our products, want to place a bulk order, or just want to share your feedback.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 sm:px-8 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Contact Info Cards */}
          <div className="flex flex-col gap-6 max-w-sm h-full justify-between">
            {/* Our Shop */}
            <div className="bg-[#f6edd4] rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6d3121] rounded-full flex items-center justify-center text-white text-xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-[#23180d] text-lg mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Our Shop
                </h3>
                <address className="not-italic text-[#23180d] text-sm" style={{ fontFamily: 'Jaini Purva' }}>
                  1-B, Mahadevi Apartments, Below<br />
                  Khilare Medical Store,<br />
                  Rankala, Kolhapur-416012
                </address>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-[#f6edd4] rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6d3121] rounded-full flex items-center justify-center text-white text-xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-[#23180d] text-lg mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Call Us
                </h3>
                <p className="text-[#23180d] text-sm" style={{ fontFamily: 'Jaini Purva' }}>
                  +91 9130873716<br />
                  +91 9975837640
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-[#f6edd4] rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6d3121] rounded-full flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-[#23180d] text-lg mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Email Us
                </h3>
                <a
                  href="mailto:arihantfoods@gmail.com"
                  className="text-[#23180d] text-sm underline"
                  style={{ fontFamily: 'Jaini Purva' }}
                >
                  arihantfoods@gmail.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-[#f6edd4] rounded-2xl p-6 shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 bg-[#6d3121] rounded-full flex items-center justify-center text-white text-xl">
                🕐
              </div>
              <div>
                <h3 className="font-bold text-[#23180d] text-lg mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Opening Hours
                </h3>
                <p className="text-[#23180d] text-sm" style={{ fontFamily: 'Jaini Purva' }}>
                  10:00 AM - 10:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className=" rounded-2xl p-8 flex-1">
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#f9f0f0] font-semibold mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-[#d0c4a6] bg-white text-[#23180d] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d3121]"
                  style={{ fontFamily: 'Jaini Purva' }}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#f9f0f0] font-semibold mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-[#d0c4a6] bg-white text-[#23180d] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d3121]"
                  style={{ fontFamily: 'Jaini Purva' }}
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-[#f9f0f0] font-semibold mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Your Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-[#d0c4a6] bg-white text-[#23180d] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d3121]"
                  style={{ fontFamily: 'Jaini Purva' }}
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-[#f9f0f0] font-semibold mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  Your Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#d0c4a6] bg-white text-[#23180d] focus:outline-none focus:ring-2 focus:ring-[#6d3121]"
                  style={{ fontFamily: 'Jaini Purva' }}
                  required
                >
                  <option value="General Inquiry">Order Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Product Question">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-[#f9f0f0] font-semibold mb-2" style={{ fontFamily: 'Jaini Purva' }}>
                  How can we help You?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-[#d0c4a6] bg-white text-[#23180d] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d3121] resize-none flex-1"
                  style={{ fontFamily: 'Jaini Purva' }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#f9f0f0] text-[#000000] py-3 px-6 rounded-lg font-semibold hover:bg-[#f6edd4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6d3121] focus:ring-offset-2"
                style={{ fontFamily: 'Jaini Purva' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
