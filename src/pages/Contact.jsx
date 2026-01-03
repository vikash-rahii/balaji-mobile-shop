import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import SEO from "../components/SEO";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}%0A%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Service Type: ${formData.serviceType || "Not specified"}%0A%0A` +
      `Message: ${formData.message}`;
    
    window.open(`https://wa.me/918873338001?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <SEO
      title="Contact Us - Balazi Mobile | Visit Our Store in Ekma, Saran, Bihar"
      description="Contact Balazi Mobile for mobile phone repair and sales. Visit us at Block Road, Ekma, Saran, Bihar - Pin 841208. Call +91-8873338001 or WhatsApp us. Open 9 AM - 7 PM"
      keywords="contact balazi mobile, mobile shop ekma address, phone repair shop saran, visit mobile store bihar, ekma mobile contact"
    />
      <section className="py-20 bg-gray-50 w-full h-full">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-red-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {" "}
              Get in touch with us for all your mobile needs. We're here to
              help!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-900">
                  <FaMapMarkerAlt className="h-5 w-5 text-red-900" /> Visit Our
                  Store
                </h3>
                <p className="text-gray-600 mb-4">
                  Block Road, Ekma, Saran, Bihar
                  <br />
                  Pin-code - 841208
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Block+Road+Ekma+Saran+Bihar+841208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
                  >
                    <FaMapMarkerAlt className="h-4 w-4" /> Open in Google Maps
                  </a>
                  <a
                    href="https://wa.me/918873338001?text=Hi%20I%20need%20directions%20to%20your%20store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-yellow-200 hover:text-red-900 transition"
                  >
                    <FaPaperPlane className="h-4 w-4" /> Get Directions via WhatsApp
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-900">
                  <FaClock className="h-5 w-5 text-red-900" />
                  Store Hours
                </h3>

                <div className="space-y-2 text-gray-600 ">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-bold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-bold">10:00AM - 6:00PM</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition ">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <FaPhoneAlt className="h-5 w-5 text-red-900" />
                  </div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <a
                    href="tel:+918873338001"
                    className="text-sm text-gray-600 mb-3 hover:text-red-900 transition-colors"
                  >
                    +91-8873338001
                  </a>
                  <a
                    href="tel:+918873338001"
                    className="w-full block text-center bg-red-900 text-white px-2 py-2 rounded-lg hover:bg-primary/90 transition mt-2"
                  >
                    Call Now
                  </a>
                </div>
                <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition ">
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <FaWhatsapp className="h-5 w-5  " />
                  </div>
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-sm text-gray-600 mb-3">Quick Response</p>
                  <a
                    href="https://wa.me/918873338001?text=Hello%20I%20need%20help%20with%20my%20mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border cursor-pointer border-green-600 text-green-600 px-2 py-2  rounded-lg hover:bg-green-600 hover:text-white transition flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition">
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-900 mb-4">
                  <FaEnvelope className="h-6 w-6 text-red-900 inline-block mr-2" />
                  Send Us a Message
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaEnvelope className="h-4 w-4" />
                  <a 
                    href="mailto:vvishal2300@gmail.com" 
                    className="hover:text-red-900 transition-colors"
                  >
                    vvishal2300@gmail.com
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name" 
                      required 
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number" 
                      required 
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  
                  </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required 
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Service Type</label>
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-2 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value = "repair">Mobile Repair</option>
                      <option value = "purchase">Buy New Phone</option>
                      <option value = "accessories">Accessories</option>
                      <option value = "photo-frame">Photo Frame</option>
                      <option value = "other">Other</option>
                    </select>

                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your mobile issue or requirements..." 
                    required 
                    className="w-full px-3 py-2 border rounded-lg min-h-[100px] focus:ring-2 focus:ring-primary outline-none"
                  />
                  </div>
                  <button type="submit" className="w-full bg-red-900 text-white px-2 py-2 rounded-lg font-semibold hover:bg-primary/90 transition">Send Message via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
