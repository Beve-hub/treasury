import React from 'react';

interface Props {
  showAddAddressModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AddAddressModal = ({ showAddAddressModal,  onClose, children }:Props) => {
  
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center ${showAddAddressModal ? "visible bg-black/20" : "invisible"}`}>
      <div className={`bg-white p-4 rounded-md ${showAddAddressModal ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} 
      onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
          X
        </button>
       {children}
      </div>
    </div>
  );
};

export default AddAddressModal;
