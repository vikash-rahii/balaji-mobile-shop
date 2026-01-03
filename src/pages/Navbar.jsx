import React, { useState } from "react";
import { Phone, MapPin, Clock9, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import DropDown from "../components/DropDown";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  return (
    <header className="w-full sticky top-0 z-50 shadow bg-white">
      <div className="bg-red-900 text-xs sm:text-sm text-gray-100 hidden sm:block overflow-x-hidden">
        <div className="relative w-full overflow-x-hidden">
          <div className="marquee-container flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">+91 8873338001</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">Block Road, Ekma, Saran, Bihar</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock9 className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">Open: 9:00 AM - 7:00 PM</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">+91 8873338001</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">Block Road, Ekma, Saran, Bihar</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock9 className="text-gray-300 flex-shrink-0" size={16} />
              <span className="text-gray-300">Open: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 sm:px-6 py-2 relative">
        <Link to="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={logo}
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain rounded-full shadow-sm"
            />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold tracking-tight">
                Balazi<span className="text-red-900">Mobile</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">Sales & Repair</p>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2 z-50">
          <Link
            to="/"
            className="hover:text-red-900 transition-colors duration-200"
          >
            Home
          </Link>
          <DropDown
            className="shadow-md"
            label="Services"
            items={[
              { label: "Mobile Repair", href: "/repair" },
              { label: "Our Services", href: "/services" },
            ]}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          <DropDown
            className="shadow-md"
            label="Products"
            items={[
              { label: "All Products", href: "/all" },
              { label: "Mobile Sales", href: "/all?category=Mobile" },
              { label: "Charger Sales", href: "/all?category=Charger" },
              { label: "Headphone Sales", href: "/all?category=Headphone" },
              { label: "Mobile Cover", href: "/all?category=Mobile Cover" },
            ]}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <Link
            to="/photo-frame"
            className="hover:text-red-900 transition-colors duration-200"
          >
            Photo Frame
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-900 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-red-900" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Link>
        </div>
        <div
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-6 py-4 space-y-3 border-t">
          <Link 
            to="/" 
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <details>
            <summary className="cursor-pointer py-2">Services</summary>
            <Link 
              to="/repair" 
              className="block pl-4 py-1"
              onClick={() => setIsOpen(false)}
            >
              Mobile Repair
            </Link>
            <Link 
              to="/services" 
              className="block pl-4 py-1"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </Link>
          </details>

          <details>
            <summary className="cursor-pointer py-2">Products</summary>
            <div className="max-h-48 overflow-y-auto">
              <Link 
                to="/all" 
                className="block pl-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                All Products
              </Link>
              <Link 
                to="/all?category=Mobile" 
                className="block pl-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                Mobile Sales
              </Link>
              <Link 
                to="/all?category=Charger" 
                className="block pl-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                Charger Sales
              </Link>
              <Link 
                to="/all?category=Headphone" 
                className="block pl-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                Headphone Sales
              </Link>
              <Link 
                to="/all?category=Mobile Cover" 
                className="block pl-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                Mobile Cover
              </Link>
            </div>
          </details>

          <Link 
            to="/photo-frame" 
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Photo Frame
          </Link>
          <Link 
            to="/contact" 
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className="flex items-center gap-2 py-2"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart className="h-5 w-5" />
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
