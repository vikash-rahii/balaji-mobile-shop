import React, { useState } from "react";
import { FaImage, FaPalette, FaRuler, FaShoppingCart, FaStar, FaCheckCircle } from "react-icons/fa";
import ProductImage from '../components/ProductImage';
import { MdPhotoSizeSelectActual, MdPhotoLibrary } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

function PhotoFrame() {
  const [selectedFrame, setSelectedFrame] = useState(null);
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);

  const frameTypes = [
    {
      id: 1,
      name: "Classic Wooden",
      price: "₹299 - ₹899",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop",
      description: "Elegant wooden frames with natural finish",
      popular: true,
      sizes: ["4x6", "5x7", "8x10", "11x14"],
    },
    {
      id: 2,
      name: "Modern Metal",
      price: "₹399 - ₹1,199",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Sleek metal frames with contemporary design",
      popular: false,
      sizes: ["4x6", "5x7", "8x10", "11x14", "16x20"],
    },
    {
      id: 3,
      name: "Vintage Ornate",
      price: "₹599 - ₹1,499",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Ornate frames with intricate designs",
      popular: false,
      sizes: ["5x7", "8x10", "11x14"],
    },
    {
      id: 4,
      name: "Minimalist Glass",
      price: "₹499 - ₹1,299",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Clean glass frames with minimal borders",
      popular: true,
      sizes: ["4x6", "5x7", "8x10", "11x14", "16x20"],
    },
    {
      id: 5,
      name: "Collage Multi",
      price: "₹799 - ₹2,499",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      description: "Multi-photo frames for memories",
      popular: false,
      sizes: ["8x10", "11x14", "16x20"],
    },
    {
      id: 6,
      name: "Digital LED",
      price: "₹2,999 - ₹5,999",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Modern digital frames with LED display",
      popular: true,
      sizes: ["7 inch", "10 inch", "15 inch"],
    },
  ];

  const features = [
    {
      icon: FaImage,
      title: "Premium Quality",
      description: "High-quality materials for lasting memories",
    },
    {
      icon: FaPalette,
      title: "Custom Design",
      description: "Personalized frames to match your style",
    },
    {
      icon: FaRuler,
      title: "All Sizes",
      description: "Available in various sizes and formats",
    },
    {
      icon: HiSparkles,
      title: "Fast Service",
      description: "Quick framing service within 24 hours",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Beautiful frames at affordable prices. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "The quality is excellent and the service is very fast.",
    },
    {
      name: "Amit Singh",
      rating: 4,
      comment: "Great selection of frames. Very satisfied with my purchase.",
    },
  ];

  return (
    <>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MdPhotoLibrary className="text-4xl sm:text-5xl md:text-6xl text-yellow-200" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Beautiful Photo <span className="text-yellow-200">Framing</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white/90 px-4">
              Preserve your precious memories with our premium photo framing services.
              Professional quality frames for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#frame-types"
                className="px-8 py-4 bg-yellow-200 text-red-900 rounded-lg font-semibold hover:bg-yellow-300 transition-transform duration-300 hover:scale-105 shadow-lg inline-block text-center"
              >
                Browse Frames
              </a>
              <a
                href="https://wa.me/918873338001?text=Hi%20I%20want%20to%20get%20a%20quote%20for%20photo%20framing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-300 inline-block text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-red-900 p-4 rounded-full">
                    <feature.icon className="text-2xl text-yellow-200" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frame Types Section */}
      <section id="frame-types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your <span className="text-red-900">Frame Style</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our wide range of photo frames, from classic to modern designs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameTypes.map((frame) => (
              <div
                key={frame.id}
                className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedFrame === frame.id ? "ring-4 ring-red-900" : ""
                }`}
                onClick={() => setSelectedFrame(frame.id)}
              >
                {frame.popular && (
                  <div className="absolute top-4 right-4 bg-red-900 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Popular
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <ProductImage
                    src={frame.image}
                    alt={frame.name}
                    type="Photo Frame"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {frame.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{frame.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <FaRuler className="text-red-900" />
                    <span className="text-sm text-gray-600">
                      Sizes: {frame.sizes.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-900">
                      {frame.price}
                    </span>
                    <button
                      onClick={() => {
                        addToCart({
                          id: frame.id,
                          name: frame.name,
                          price: frame.price,
                          img: frame.image,
                          type: 'Photo Frame',
                          description: frame.description,
                          sizes: frame.sizes,
                        });
                        setToast('Frame added to cart!');
                      }}
                      className="px-4 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-colors duration-200 flex items-center gap-2"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Custom <span className="text-red-900">Framing Options</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Personalize your frame with our customization options
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <MdPhotoSizeSelectActual className="text-2xl text-yellow-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Size Options</h3>
                </div>
                <ul className="space-y-3">
                  {["4x6 inches", "5x7 inches", "8x10 inches", "11x14 inches", "16x20 inches", "Custom sizes available"].map((size, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="text-red-900" />
                      <span className="text-gray-700">{size}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-900 p-3 rounded-lg">
                    <FaPalette className="text-2xl text-yellow-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Material Options</h3>
                </div>
                <ul className="space-y-3">
                  {["Premium Wood", "Metal Alloy", "Glass & Acrylic", "Vintage Ornate", "Modern Minimalist", "Eco-friendly Materials"].map((material, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="text-red-900" />
                      <span className="text-gray-700">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-red-900">Customers Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-gray-800 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-4">
              Ready to Frame Your Memories?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90 px-4">
              Visit our store or contact us for a custom quote. We're here to help you
              preserve your precious moments beautifully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918873338001"
                className="px-8 py-4 bg-yellow-200 text-red-900 rounded-lg font-semibold hover:bg-yellow-300 transition-transform duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <FaImage />
                Call Now: +91-8873338001
              </a>
              <a
                href="https://wa.me/918873338001?text=Hi%20I%20want%20to%20frame%20my%20photos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default PhotoFrame;

