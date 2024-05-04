
interface AcceptProps {
    toggleIcon: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

const AddWallet = ({ toggleIcon,  onClose, children }:AcceptProps) => {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center p-4  ${toggleIcon ? "visible bg-black/20" : "invisible"}`}>
          <div className={`bg-white p-4 grid items-center rounded-md ${toggleIcon ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} 
          onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
              X
            </button>
           {children}
          </div>
        </div>
      );
    
}

export default AddWallet
