interface AcceptProps {    
    onClose: () => void;
    onClick: () => void;
    children: React.ReactNode;
}

const LoanModal = ({ children, onClose, onClick }: AcceptProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg h-[20rem] grid justify-center items-center">
                <div className="grid w-[20rem] gap-2">
                    {children}
                    <button
                        onClick={onClose}
                        className="bg-[--bg-color] hover:bg-[var(--button-color)] text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Close
                    </button>
                    <button
                        onClick={onClick}
                        className="bg-[--bg-color] hover:bg-[var(--button-color)] text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        Return Back Home
                    </button>
                </div>            
            </div>
        </div>
    );
}

export default LoanModal;
