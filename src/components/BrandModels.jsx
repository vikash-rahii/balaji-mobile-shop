import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductImage from "./ProductImage";
import SEO from "./SEO";

import {
  apple,
  samsung,
  oppo,
  vivo,
  redmi,
  infinix,
  huawei,
  micromax,
  asus,
  lenovo,
  motorola,
  nokia,
  oneplus,
  sony,
  realme,
  honor,
  lg,
} from "../assets/assets.js";

function BrandModels() {
  const { brandName } = useParams();
  const [searchTerm, setSerachTerm] = useState("");

  const brandData = {
    apple,
    samsung,
    oppo,
    vivo,
    redmi,
    infinix,
    huawei,
    micromax,
    asus,
    lenovo,
    motorola,
    nokia,
    oneplus,
    sony,
    realme,
    honor,
    lg,
  };

  const brandKey = brandName.toLowerCase();
  const models = brandData[brandKey] || [];

  const slugify = (str) => {
    let slug = str.toLowerCase();
    slug = slug.replaceAll(" ", "-");
    slug = slug.replaceAll("_", "-");
    return slug;
  };

  const filteredModels = models.filter((b) => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const FallbackBadge = ({ label }) => (
    <div className="w-14 h-14 rounded-full border flex items-center justify-center text-lg font-semibold text-gray-700 bg-gray-100">
      {label.slice(0, 1)}
    </div>
  );

  return (
    <>
    <SEO
      title={`${brandName.charAt(0).toUpperCase() + brandName.slice(1)} Phone Repair - All Models | Balaji Mobile Ekma`}
      description={`Expert ${brandName} mobile phone repair services in Ekma, Saran, Bihar. Repair all ${brandName} models - screen replacement, battery, camera, charging port. Fast and reliable service.`}
      keywords={`${brandName} repair ekma, ${brandName} phone service saran, ${brandName} mobile repair bihar, ${brandName} model repair`}
    />
    <div className="container mx-auto px-6 py-12">
      <h3 className="text-3xl md:text-4xl text-red-900 font-bold mb-8 capitalize">
        {brandName} <span className="text-gray-800">Repair & Replacement</span>
      </h3>
      <div className="flex  flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-600 ">
          <Link to="/" className="hover:text-red-900 transition">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/repair" className="hover:text-red-900 transition">
            Repair Mobile Phone
          </Link>
          <IoIosArrowForward />
          <span className="font-medium text-gray-800 capitalize">
            {brandName}
          </span>
        </div>
        <div className="relative w-full sm:w-72">
          <input
            type="search"
            value={searchTerm}
            placeholder="Search model..."
            onChange={(e)=>setSerachTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
          />
          <svg
            className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </div>
      </div>
      <h4 className="my-6 text-xl font-semibold text-red-900">
        Select Your {brandName.charAt(0).toUpperCase() + brandName.slice(1)}
        Model
      </h4>

      {filteredModels.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {filteredModels.map((b, i) => (
            <Link key={i} to={`/repair/${brandKey}/${slugify(b.name)}`} className="w-full max-w-[140px] sm:max-w-[160px] flex justify-center">
              <div className="bg-white w-full aspect-square flex flex-col items-center justify-center shadow-md rounded-xl hover:scale-105 transition duration-300 cursor-pointer p-4">
                {b.image ? (
                  <ProductImage src={b.image} alt={b.name} type="Mobile" className="w-14 h-14 object-contain" fallbackIcon={b.Icon ? <b.Icon size={40} className={`mx-auto ${b.className || ""}`}/> : <FallbackBadge label={b.name} />} />
                ) : b.Icon ? (
                  <b.Icon size={40} className={`mx-auto ${b.className || ""}`}/>
                ) : (
                  <FallbackBadge label={b.name} />
                )}
                <h3 className="mt-3 text-sm font-medium text-gray-800 text-center">{b.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p  className="text-center text-gray-500 mt-10">
          No Models found for "<span>{searchTerm}</span>"
        </p>
      )}
    </div>
    </>
  );
}

export default BrandModels;
