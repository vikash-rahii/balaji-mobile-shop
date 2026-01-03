import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mobiles, SAMPLE_CHARGERS, SAMPLE_HEADPHONES, mobileCovers } from "../assets/assets";
import { FaStar } from "react-icons/fa";
import ProductImage from '../components/ProductImage';
import SEO from '../components/SEO';

function AllProducts() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';

  const initialProducts = useMemo(
    () => [
      ...(mobiles || []).map((p)=>({...p,type:"Mobile"})),
      ...(SAMPLE_CHARGERS || []).map((p)=>({...p,type:"Charger"})),
      ...(SAMPLE_HEADPHONES || []).map((p)=>({...p,type:"Headphone"})),
      ...(mobileCovers || []).map((p)=>({...p,type:"Mobile Cover"})),
    ],
    []
  );
  const [query,setQuery] = useState("");
  const [brandFilter,setBrandFilter] = useState("All");
  const [sortBy,setSortBy] = useState("popularity");

  const brands = useMemo(()=>{


    const setB = new Set(initialProducts.map((p)=>p.brand).filter(Boolean));
    return["All",...Array.from(setB)]
  },[initialProducts]);

  const filtered = useMemo(()=>{
    let list = initialProducts.filter((p)=>{
      const nameStr = `${p.brand || ""} ${p.model || ""} ${p.name || ""} `;
      const matchesQuery = nameStr.toLowerCase().includes(query.toLowerCase());
      const matchesBrand = brandFilter === "All" || p.brand === brandFilter;
      const matchesCategory = categoryFilter === "All" || p.type === categoryFilter;
      return matchesQuery && matchesBrand && matchesCategory;

    });
    const numPrice = (price) => {
  if (!price) return 0;

  let str = price.toString();
  let digits = "";

  for (let ch of str) {
    if (ch >= "0" && ch <= "9") {
      digits += ch;
    }
  }

  return digits ? Number(digits) : 0;
};


if (sortBy === "price-asc") {
  list = [...list].sort((a, b) => numPrice(a.price) - numPrice(b.price));
} 
else if (sortBy === "price-desc") {
  list = [...list].sort((a, b) => numPrice(b.price) - numPrice(a.price));
} 
else if (sortBy === "rating") {
  list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));
}
   return list;
  },[initialProducts,query,brandFilter,sortBy,categoryFilter])

  const getPageTitle = () => {
    if (categoryFilter === 'Mobile') return 'Mobile Phones for Sale - Latest Smartphones | Balazi Mobile Ekma';
    if (categoryFilter === 'Charger') return 'Mobile Chargers - Fast Charging Cables & Adapters | Balazi Mobile';
    if (categoryFilter === 'Headphone') return 'Headphones & Earphones - Wireless & Wired | Balazi Mobile';
    if (categoryFilter === 'Mobile Cover') return 'Mobile Covers & Cases - Protection for All Phones | Balazi Mobile';
    return 'All Products - Mobiles, Chargers, Headphones, Covers | Balazi Mobile Ekma';
  };

  const getPageDescription = () => {
    if (categoryFilter === 'Mobile') return 'Buy latest smartphones from top brands: Apple iPhone, Samsung Galaxy, Vivo, Oppo, Redmi, OnePlus and more. Best prices in Ekma, Saran, Bihar.';
    if (categoryFilter === 'Charger') return 'Buy genuine mobile chargers, fast charging cables, and adapters for all phone brands. Original chargers available at Balazi Mobile, Ekma.';
    if (categoryFilter === 'Headphone') return 'Premium headphones and earphones: wireless, wired, noise-cancelling. Best audio accessories at affordable prices in Ekma, Bihar.';
    if (categoryFilter === 'Mobile Cover') return 'Protect your phone with premium mobile covers and cases. Shockproof, transparent, and designer covers for all phone models.';
    return 'Shop mobile phones, chargers, headphones, and mobile covers at Balazi Mobile, Ekma. Best deals on smartphones and accessories in Saran, Bihar.';
  };

  return (
    <>
    <SEO
      title={getPageTitle()}
      description={getPageDescription()}
      keywords={`mobile phones ekma, smartphone sales saran, mobile accessories bihar, phone chargers, headphones, mobile covers, ${categoryFilter !== 'All' ? categoryFilter.toLowerCase() + ' ekma' : 'mobile products ekma'}`}
    />
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to bg-white px-4 py-8'>
      <div className='max-w-7xl mx-auto'>
        <header className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-extrabold text-red-900'>
              All Products
            </h1>
            <p className='text-sm text-slate-500'>Mobiles,Charger & Headphones – find the best deals</p>
          </div>
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full'>
            <input aria-label='Search products' value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full sm:w-64 rounded-lg px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900' placeholder='Search by brand or name...'/>
          
          <select value={brandFilter} onChange={(e)=>setBrandFilter(e.target.value)} className='rounded-lg px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900'>
            {brands.map((b)=>(
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className='rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-900'>
            <option value = "popularity" >Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          </div>
        </header>
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching your search. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setBrandFilter("All");
                  setSortBy("popularity");
                }}
                className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {
            filtered.map((p)=>(
              <div key={`${p.type}-${p.id}`} className='bg-white rounded-xl shadow p-4 flex flex-col items-center text-center hover:scale-105 transition-shadow
               '> 

              {p.tag && (
                <div className={`text-white text-xs px-3 rounded-full py-1 ${p.tagColor || "bg-red-900"} self-end mb-2`}>{p.tag}</div>
              )}
  
              <ProductImage src={p.img} alt={p.model || p.name} type={p.type} className='h-40 w-full object-contain mb-3'/>
              <h2 className='text-xl font-semibold'>{p.brand ? `${p.brand} ${p.model || p.name}` : p.name}</h2>
              <p className='text-sm text-gray-600 mb-2'>{p.type}</p>
              <div className='flex items-center justify-center gap-1 mb-4'>
                {
                  Array.from({length:Math.round(p.rating || 0)}).map((_,i)=>(
                  <FaStar key={i} className='text-yellow-400'/>
                  ))
                }
                {
                  p.rating&&(
                    <span className='text-gray-600 text-sm ml-1'>({p.rating})</span>
                  )
                }
              </div>
              {
                p.features && (
                  <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-700 mb-4 w-full'>
                    {p.features.map((f,i)=>(
                      <li key={i} className='flex items-start justify-start'>✧ {f}</li>
                    ))}
                  </ul>
                )
              }
              <div className='w-full flex items-center justify-between mb-2'>
                <div className='flex flex-col text-start'>
                  <p className='text-xl font-bold text-red-900'>{p.price}</p>
                  {
                    p.oldPrice && (
                      <p className='text-gray-400 line-through'>{p.oldPrice}</p>
                    )
                  }
                </div>
                {p.save && <p className='text-red-900 font-medium'>{p.save}</p>}
              </div>
        <div className='flex w-full justify-center'>
                <a
                  href={`https://wa.me/918873338001?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(p.brand ? `${p.brand} ${p.model || p.name}` : p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-full py-2 rounded-lg text-white text-lg flex items-center justify-center bg-gradient-to-r from-red-300 to-red-900 cursor-pointer hover:opacity-90 transition'
                >
              Book Now
                </a>
              </div>
              </div>
            ))
          }
        </div>
        )}
      </div>
    </div>
    </>
  )
}

export default AllProducts
