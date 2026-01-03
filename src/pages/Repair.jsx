import React from "react";
import { Link, Outlet } from "react-router-dom";
import { brands } from "../assets/assets.js";
import ProductImage from "../components/ProductImage";
import SEO from "../components/SEO";

function Repair() {
  return (
    <>
    <SEO
      title="Mobile Phone Repair by Brand - Apple, Samsung, Vivo, Oppo | Balazi Mobile Ekma"
      description="Expert mobile phone repair services for all major brands: Apple iPhone, Samsung Galaxy, Vivo, Oppo, Redmi, OnePlus, and more. Fast repair service in Ekma, Saran, Bihar."
      keywords="apple repair ekma, samsung repair saran, vivo phone repair, oppo service bihar, mobile brand repair, phone model repair ekma"
    />
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Top <span className="text-red-900">Brands</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        {brands.map((brand,index) => (
          <Link key={index} to={brand.path || `/repair/${brand.name.toLowerCase()}`} className="w-full">
            <div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:scale-105 transition p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer h-28 sm:h-32 w-full"
            >
              {brand.Icon ? (
                <brand.Icon size={40} className={`mb-3 ${brand.className || ""}`} />
              ) : brand.logo ? (
                <ProductImage
                  src={brand.logo}
                  alt={brand.name}
                  type="Mobile"
                  className="h-12 mb-3 object-contain"
                />
              ) : (
                <div className="w-10 h-10 rounded-full border flex items-center justify-center text-base font-semibold text-gray-700 mb-3">
                  {brand.name.slice(0, 1)}
                </div>
              )}

              <h3 className="text-sm font-medium text-gray-800 text-center">
                {brand.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default Repair;
