import React from "react";
import hero from "../assets/hero-banner.jpg";
import { Link } from "react-router-dom";
import { tools, workHistory, repairServices } from "../assets/assets.js";
import { FaStar, FaCheckCircle, FaArrowRight, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Services from "../components/Services.jsx";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
    <SEO
      title="Balazi Mobile - Mobile Phone Repair & Sales in Ekma, Saran, Bihar | Expert Services"
      description="Balazi Mobile offers expert mobile phone repair services, latest smartphone sales, genuine accessories, and photo framing in Ekma, Saran, Bihar. Visit Block Road, Ekma. Call +91-8873338001"
      keywords="mobile repair ekma, mobile shop saran bihar, phone repair service, smartphone sales ekma, mobile accessories, phone service near me, ekma mobile repair, saran mobile shop, bihar phone service"
    />
    
    {/* Hero Section */}
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Balazi Mobile - Mobile Phone Repair and Sales Shop in Ekma, Saran, Bihar"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/80 to-red-900/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-2 bg-yellow-200/20 backdrop-blur-sm rounded-full border border-yellow-200/30 mb-4">
              <span className="text-yellow-200 text-sm font-semibold">🏆 Trusted Mobile Service Provider</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Trusted{" "}
              <span className="block text-yellow-200 mt-2">Mobile Partner</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
              Expert mobile phone repairs and premium device sales.{" "}
              <span className="text-yellow-200 font-semibold">Fast, reliable</span>{" "}
              and trusted services for all your mobile needs in Ekma, Saran, Bihar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/918873338001?text=Hi%20I%20want%20to%20get%20a%20repair%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-yellow-200 text-red-900 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                Get Repair Quote
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/all"
                className="group px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-900 transition-all duration-300 text-lg inline-flex items-center justify-center gap-2"
              >
                View Products
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {tools.map((tool, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <tool.Icon size={28} className="text-yellow-200" />
                  <span className="text-sm font-medium text-center">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-8 text-yellow-200 text-center">
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                {workHistory.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-6 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-4xl font-bold text-yellow-200 min-w-[80px]">
                      {item.stat}
                    </div>
                    <div>
                      <p className="font-bold text-yellow-200 text-lg">
                        {item.title}
                      </p>
                      <p className="text-sm text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>

    {/* Stats Section - Mobile View */}
    <section className="lg:hidden bg-gradient-to-r from-red-900 to-red-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
          {workHistory.map((item, i) => (
            <div 
              key={i} 
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <div className="text-3xl font-bold text-yellow-200 mb-2">
                {item.stat}
              </div>
              <p className="text-sm font-semibold text-yellow-200">{item.title}</p>
              <p className="text-xs text-white/70 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Contact Bar */}
    <section className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a 
            href="tel:+918873338001" 
            className="flex items-center gap-2 hover:text-yellow-200 transition-colors"
          >
            <FaPhoneAlt />
            <span>+91 8873338001</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Block Road, Ekma, Saran, Bihar</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>Open: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Services Section */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-900">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional mobile repair services with quality guarantee and fast turnaround time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {repairServices.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-red-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                  <service.Icon className="text-red-900 text-3xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <FaClock className="text-xs" />
                    {service.time}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-red-900 font-bold">{service.price}</span>
                <a
                  href={`https://wa.me/918873338001?text=Hi,%20I%20need%20${encodeURIComponent(service.title)}%20service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors text-sm font-semibold flex items-center gap-2"
                >
                  Book Now
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
          >
            View All Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>

    {/* Services Component */}
    <Services/>

    {/* Trust Indicators */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
            <div className="text-5xl font-bold text-red-900 mb-2">5+</div>
            <div className="text-gray-700 font-semibold mb-1">Years Experience</div>
            <div className="text-sm text-gray-600">Trusted mobile service</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
            <div className="text-5xl font-bold text-yellow-600 mb-2">1000+</div>
            <div className="text-gray-700 font-semibold mb-1">Happy Customers</div>
            <div className="text-sm text-gray-600">Satisfied with our service</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
            <div className="text-5xl font-bold text-green-600 mb-2">24hr</div>
            <div className="text-gray-700 font-semibold mb-1">Fast Repair</div>
            <div className="text-sm text-gray-600">Most repairs in 24 hours</div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-r from-red-900 to-red-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today for expert mobile repair services or browse our latest products
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918873338001?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-200 text-red-900 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center gap-2"
          >
            Contact Us on WhatsApp
            <FaArrowRight />
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-900 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center gap-2"
          >
            Visit Our Store
            <FaMapMarkerAlt />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
