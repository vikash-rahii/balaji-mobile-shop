import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  canonical 
}) {
  const location = useLocation();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const currentUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `${siteUrl}/logo.png`;
  const finalImage = image || defaultImage;
  const finalCanonical = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title || 'Balazi Mobile - Sales & Repair | Mobile Phone Services';

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', description, true);
      updateMetaTag('twitter:description', description);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', title || 'Balazi Mobile - Sales & Repair', true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('og:site_name', 'Balazi Mobile', true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || 'Balazi Mobile - Sales & Repair');
    updateMetaTag('twitter:image', finalImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

    // Structured Data - Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Balazi Mobile",
      "image": defaultImage,
      "@id": siteUrl,
      "url": siteUrl,
      "telephone": "+91-8873338001",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Block Road, Ekma",
        "addressLocality": "Ekma",
        "addressRegion": "Saran",
        "postalCode": "841208",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.9167",
        "longitude": "84.7833"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://wa.me/918873338001"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Ekma, Saran, Bihar"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Phone Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Phone Repair",
              "description": "Expert mobile phone repair services for all brands"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Phone Sales",
              "description": "Latest smartphones from top brands"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile Accessories",
              "description": "Chargers, headphones, mobile covers, and more"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Photo Framing",
              "description": "Professional photo framing services"
            }
          }
        ]
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [title, description, keywords, image, type, canonical, currentUrl, siteUrl, defaultImage, finalImage, finalCanonical]);

  return null;
}

export default SEO;

