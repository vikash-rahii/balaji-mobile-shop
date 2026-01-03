import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function DropDown({label,items,activeDropdown,setActiveDropdown}) {
  const isOpen = activeDropdown === label.toLowerCase();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) {
          setActiveDropdown(null);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setActiveDropdown]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setActiveDropdown(isOpen ? null : label.toLowerCase());
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <div className='relative cursor-pointer select-none z-50' ref={dropdownRef}>
      <div 
        className='flex items-center gap-1.5 hover:text-red-900 transition-colors duration-200 py-2'
        onClick={handleToggle}
      >
        <span className="text-gray-700 font-medium">{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 text-gray-600 ${isOpen ? 'rotate-180 text-red-900' : ''}`}/>
      </div>
      {isOpen && (
        <div 
          className='absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-lg py-2 min-w-[200px] z-[9999] border border-gray-200 overflow-visible'
          onClick={(e) => e.stopPropagation()}
          style={{ 
            animation: 'fadeInDown 0.2s ease-out',
            willChange: 'opacity, transform'
          }}
        >
          {
            items.map((item,i)=>(
              <Link 
                key={i} 
                to={item.href} 
                className='block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-900 transition-all duration-200 whitespace-nowrap'
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))
          }
        </div>
      )}
    </div>
  )
}

export default DropDown
