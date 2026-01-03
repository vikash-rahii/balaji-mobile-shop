import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { MdSensors, MdBatteryChargingFull, MdCable } from "react-icons/md";
import { IoIosMic } from "react-icons/io";
import { RxSpeakerLoud } from "react-icons/rx";
import { LuRadioReceiver } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ProductImage from "./ProductImage";
import SEO from "./SEO";
import {
  apple,
  samsung,
  oppo,
  vivo,
  redmi,
  asus,
  motorola,
  lenovo,
  sony,
  realme,
  honor,
  lg,
  micromax,
  huawei,
  nokia,
  infinix,
  oneplus,
} from "../assets/assets.js";

function ModelDetails() {
  const { brandName, modelName } = useParams();

  const brandData = {
    apple,
    samsung,
    oppo,
    vivo,
    redmi,
    asus,
    motorola,
    lenovo,
    sony,
    realme,
    honor,
    lg,
    micromax,
    huawei,
    nokia,
    infinix,
    oneplus,
  };

  const models = brandData[brandName.toLocaleLowerCase()] || [];

  const slugify = (str) => {
    let slug = str.toLowerCase();
    slug = slug.replaceAll(" ", "-");
    slug = slug.replaceAll("_", "-");
    return slug;
  };

  const model = models.find((m) => slugify(m.name) === modelName);

  const services = [
    { name: "Screen", price: 2199, original: 2800, icon: FaMobileAlt },
    { name: "Proximity Sensor", price: 1649, original: 1900, icon: MdSensors },
    {
      name: "Battery",
      price: 1649,
      original: 1900,
      icon: MdBatteryChargingFull,
    },
    { name: "Receiver", price: 1649, original: 1900, icon: LuRadioReceiver },
    { name: "Charging Jack", price: 1649, original: 1900, icon: MdCable },
    { name: "Mic", price: 815, original: 1019, icon: IoIosMic },
    { name: "Speaker", price: 1649, original: 1900, icon: RxSpeakerLoud },
  ];
  if (!model) {
    return (
      <div>
        <h2>Model not found. Please go back to {""}</h2>
        <Link to={`/brands/${brandName}`} className="text-red-900 underline">
          {brandName} models
        </Link>
      </div>
    );
  }
  return (
    <>
    <SEO
      title={`${model.name} Repair Services - Screen, Battery, Camera | Balazi Mobile Ekma`}
      description={`Expert ${model.name} repair services in Ekma, Saran, Bihar. Screen replacement, battery replacement, camera repair, charging port, and more. Fast service with warranty.`}
      keywords={`${model.name} repair ekma, ${model.name} screen replacement, ${model.name} battery repair, ${brandName} ${model.name} service`}
    />
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-red-900">
          Home
        </Link>{" "}
        ›{" "}
        <Link
          to={`/repair/${brandName}`}
          className="hover:text-red-900 capitalize"
        >
          {brandName}
        </Link>{" "}
        › <span className="text-red-900 font-semibold">{model.name}</span>
      </nav>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-10">
        <ProductImage
          src={model.image}
          alt={model.name}
          type="Mobile"
          className="w-32 h-48 sm:w-40 sm:h-60 object-contain bg-gray-100 rounded-xl shadow-md hover:scale-105 cursor-pointer"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            {model.name}{" "}
            <span className="text-red-900">Repair & Replacement</span>
          </h1>
        </div>
      </div>
        <div >
        <h2 className="text-xl font-semibold mb-6">Pick Your Repair Service</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service,index)=>(
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 hover:bg-gray-50 p-3 sm:p-2 rounded-md gap-3 sm:gap-0">
              <div className="flex items-center gap-3 flex-1">
                <service.icon className="text-2xl sm:text-3xl text-red-900 flex-shrink-0"/>
                <p className="font-medium text-sm sm:text-base">{service.name}</p>
                <AiOutlineInfoCircle className="text-red-900 cursor-pointer flex-shrink-0" />
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
                <div className="text-right">
                  <p className="text-base sm:text-lg font-semibold text-gray-800"> ₹{service.price}</p>
                  <p className="line-through text-gray-500 text-xs sm:text-sm"> ₹{service.original}</p>
                </div>
                <a
                  href={`https://wa.me/918873338001?text=Hi%20I%20need%20${encodeURIComponent(service.name)}%20service%20for%20${encodeURIComponent(model.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-900 text-white rounded-md px-3 py-1.5 sm:px-2 sm:py-1 text-sm sm:text-base font-medium hover:bg-red-950 inline-block whitespace-nowrap"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ModelDetails;
