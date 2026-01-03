import React, { useState, useEffect } from 'react';
import { FaMobileAlt, FaHeadphones, FaBolt, FaImage } from 'react-icons/fa';

function ProductImage({ src, alt, type, className = '', fallbackIcon }) {
  const [imgError, setImgError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset error state when src changes
  useEffect(() => {
    setImgSrc(src);
    setImgError(false);
  }, [src]);

  const getDefaultIcon = () => {
    if (fallbackIcon) return fallbackIcon;
    
    switch (type?.toLowerCase()) {
      case 'mobile':
        return <FaMobileAlt className="text-gray-400" size={60} />;
      case 'charger':
        return <FaBolt className="text-gray-400" size={60} />;
      case 'headphone':
        return <FaHeadphones className="text-gray-400" size={60} />;
      case 'mobile cover':
        return <FaImage className="text-gray-400" size={60} />;
      case 'photo frame':
        return <FaImage className="text-gray-400" size={60} />;
      default:
        return <FaImage className="text-gray-400" size={60} />;
    }
  };

  const handleError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(null);
    }
  };

  // If no src or image failed to load, show default icon
  if (!imgSrc || imgError || !src || src === '') {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        {getDefaultIcon()}
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt || 'Product image'}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}

export default ProductImage;

