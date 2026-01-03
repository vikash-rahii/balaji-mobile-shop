import React, { useRef } from "react";
import { services } from "../assets/assets.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  const scrollRef = useRef(null);
  const scroll = (direction) =>{
    if(scrollRef.current){
      const {scrollLeft,clientWidth} = scrollRef.current;
      const scrollAmount = clientWidth - 100;
      scrollRef.current.scrollTo({
        left:direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,behavior:"smooth",
      })
    }
  }
  return (
    <div className="container mx-auto px-6 py-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        Services Available
      </h2>
      <button onClick={()=>scroll("left")} className="hidden sm:block absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100">
        <FaChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <Link to={"/repair"}>
        <div ref={scrollRef} className="flex space-x-4 sm:space-x-6 overflow-x-auto scroll-smooth pb-2 scrollbar-hide">
          {services.map((service) => (
            <div key={service.id} className="min-w-[120px] sm:min-w-[150px] bg-white flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer flex-shrink-0">
              <service.icon className="w-12 h-12 text-red-900 mb-4" />
              <h3 className="mt-4 text-sm font-medium text-gray-700 text-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </Link>
      <button onClick={()=>scroll("right")} className="hidden sm:block absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100">
        <FaChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

export default Services;
