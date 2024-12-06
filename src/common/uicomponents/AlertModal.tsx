import React from 'react';

const AlertModal = ({ isOpen, title, message, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-md p-6 w-[90%] max-w-xs">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-sm text-gray-700 mb-6">{message}</p>
        <button
          className="w-full py-2 bg-[#E4087F] text-white rounded-md hover:bg-[#ac0660] cursor-pointer"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
