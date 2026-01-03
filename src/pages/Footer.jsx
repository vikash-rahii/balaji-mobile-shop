import React from "react";
// import {
//   FaMobileAlt,

// } from "react-icons/fa";
import {
  FaMobileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-red-900 text-gray-200  mt-9 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Balazi Mobile Logo"
                className="h-12 w-12 object-contain  rounded-full shadow-lg"
              />
              <div className="leading-tight flex flex-col">
                <h2 className="flex text-lg font-semibold tracking-wide">
                  Vishal Kumar Kushwaha
                </h2>
                <p className="text-sm opacity-80">Sales & Repair</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              Your trusted partner for all mobile phone needs. Get quality
              repairs, genuine accessories, and the latest smartphones at
              affordable prices.
            </p>
            <div className="flex items-center gap-2 text-yellow-200 font-medium">
              <FaMobileAlt className="text-yellow-200 mt-1 w-6 h-6" />
              <span>5+ Years Experience</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold border-b border-yellow-200 inline-block pb-1">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Screen Replacement</li>
              <li>Battery Replacement</li>
              <li>Camera Repair</li>
              <li>Water Damage Repair</li>
              <li>Software Issues</li>
              <li>Data Recovery</li>
              <li>New Phone Sales</li>
              <li>Mobile Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-200 inline-block pb-1">
              Contact Info
            </h4>
              <div className="space-y-4 text-sm opacity-90">
            <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-200 mt-1" />
                <span>
                  Block Road, Ekma, Saran, Bihar
                  <br />
                  Pin-code - 841208
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-200" />

                <span>+91-8873338001</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-200" />

                <span>vvishal2300@gmail.com</span>
              </div>
            </div>
          </div>
           <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-200 inline-block pb-1">Store Hours</h4>
           <div>
            <div className="flex gap-3 text-center ">
              <FaClock className="text-yellow-200 mt-1 gap-3"/>
              <span>Open Daily</span>
            </div>
            <div className="flex gap-3">
              <p>Mon - Sat :</p>
              <p className="text-yellow-200 font-medium">9:00 AM - 7:00 PM</p>
            </div>
            <div className="flex gap-3">
              <p>Sunday :</p>
              <p className="text-yellow-200 font-medium">10:00 AM - 6:00 PM</p>
            </div>
           </div>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
