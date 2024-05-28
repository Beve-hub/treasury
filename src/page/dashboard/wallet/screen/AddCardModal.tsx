import { Oval } from 'react-loader-spinner';

interface AddCardModalProps {
  showAddCardModal: boolean;
  onClose: () => void;
  addCard: () => void;
  cardNum: string;
  expiryDate: string;
  cvv: string;
  onCardNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpiryDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCvvChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
 
  errors: {
    cardNum?: string;
    expiryDate?: string;
    cvv?: string;
  };
  
}

const AddCardModal: React.FC<AddCardModalProps>  = ({ showAddCardModal, onClose, cardNum,  expiryDate,  cvv,  addCard,  onCardNumChange,  onExpiryDateChange,  onCvvChange,  errors,  loading, }) => {
  if (!showAddCardModal) return null;
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center ${showAddCardModal ? "visible bg-black/20" : "invisible"}`}>
      <div className={`bg-white p-4 rounded-md ${showAddCardModal ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center">
          X
        </button>
        <div className='grid gap-4'>
                                    <div>
                                        <label htmlFor="cardNum">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNum"
                                            name="cardNum"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Enter card number"
                                            value={cardNum} // Bind value to state
                                            onChange={onCardNumChange}
                                        />
                                         {errors.cardNum && <span className='text-[#f30000] text-sm'>{errors.cardNum}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="MM/YY"
                                            value={expiryDate} // Bind value to state
                                            onChange={onExpiryDateChange}
                                        />
                                         {errors.expiryDate && <span className='text-[#f30000] text-sm'>{errors.expiryDate}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="123"
                                            value={cvv} // Bind value to state
                                            onChange={onCvvChange}
                                        />
                                         {errors.cvv && <span className='text-[#f30000] text-sm'>{errors.cvv}</span>}
                                    </div>
                                    <button
                                       type="submit"
                                       onClick={addCard}
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color] " >
                                      {loading ? <Oval visible={true}  height="20"  width="20"  color="#ffff"  ariaLabel="oval-loading"  wrapperStyle={{}}  wrapperClass=""/> : 'Update Password'}
                                     </button> 

                </div>
      </div>
    </div>
  );
};

export default AddCardModal;