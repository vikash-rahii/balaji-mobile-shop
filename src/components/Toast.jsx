import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 min-w-[200px]">
        <FaCheckCircle className="text-xl" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

export default Toast;

