import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function DropDown({label,items,activeDropdown,setActiveDropdown}) {
  const isOpen = activeDropdown === label.toLowerCase();
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState('bottom');
  const location = useLocation();

  // Close dropdown when route changes (only if dropdown is open)
  useEffect(() => {
    if (isOpen) {
      setActiveDropdown(null);
    }
  }, [location.pathname, location.search]); // Close on pathname or search param change

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Check if click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    // Use a small delay to ensure toggle click processes first
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, setActiveDropdown]);

  // Smart positioning: check if dropdown would go off-screen
  useEffect(() => {
    if (isOpen && dropdownRef.current && dropdownMenuRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 400; // max height
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
  }, [isOpen]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setActiveDropdown(isOpen ? null : label.toLowerCase());
  };

  // Close dropdown immediately when link is clicked
  const handleLinkClick = useCallback((e) => {
    // Close dropdown immediately - no delay
    setActiveDropdown(null);
    // Don't prevent default - let Link handle navigation
    // Don't stop propagation - allow navigation to proceed
  }, [setActiveDropdown]);

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
          ref={dropdownMenuRef}
          className={`absolute ${dropdownPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} left-0 bg-white shadow-2xl rounded-lg min-w-[220px] max-w-[280px] z-[9999] border border-gray-200 overflow-hidden`}
          onMouseDown={(e) => e.stopPropagation()}
          style={{ 
            animation: 'fadeInDown 0.2s ease-out',
            willChange: 'opacity, transform',
            maxHeight: '70vh',
          }}
        >
          <div className='max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-gray-100 hover:scrollbar-thumb-red-300'>
            {
              items.map((item,i)=>(
                <Link 
                  key={i} 
                  to={item.href} 
                  className='block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-900 transition-all duration-200 whitespace-nowrap border-b border-gray-100 last:border-b-0'
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown
