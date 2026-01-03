import React from "react";
import hero from "../assets/hero-banner.jpg";
import { Link } from "react-router-dom";
import { tools, workHistory } from "../assets/assets.js";
import { ImInsertTemplate } from "react-icons/im";
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
    <section
      id="home"
      className="relative min-h-screen bg-red-900 flex
     items-center bg-gradient-to-br from-primary via-primary/90 to-primary-dark overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Balazi Mobile - Mobile Phone Repair and Sales Shop in Ekma, Saran, Bihar"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 leading-tight drop-shadow-lg">
              Your Trusted{" "}
              <span className="block text-yellow-200"> Mobile Partner</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 max-w-lg">
              Expert mobile phone repairs and premium device sales.
              <span className="text-accent font-semibold">Fast,reliable</span>{" "}
              and trusted services for all your mobile needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/918873338001?text=Hi%20I%20want%20to%20get%20a%20repair%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3  bg-yellow-200 text-red-400 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 font-semibold inline-block text-center"
              >
                Get Repair Quote
              </a>
              <Link to="/all">
                <button className="px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-red-800 transition-all duration-300 rounded-md">
                  View Products
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
              {tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-2 ">
                  <tool.Icon size={22} />
                  <span>{tool.label}</span>
                </div>
              ))}
            </div>

          </div>
            <div className="hidden lg:block justify-end align-end">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border  border-white/20 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-8 text-yellow-200 text-center">
                  Why Choose Us?
                </h3>
                <div className="space-y-8">
                  {workHistory.map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="text-3xl font-semibold text-yellow-200">
                        {item.stat}
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-200">
                          {item.title}
                        </p>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
        </div>
      </div>
    </section>
      <Services/>
      </>
  );
}

export default Home;
