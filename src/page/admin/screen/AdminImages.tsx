import React from 'react';
import useFirestore from '../../../hooks/useFirestore';

interface Image {
    imageUrl: string;
    createdAt: string; // If createdAt is a timestamp, use `Date` type instead.
}

const AdminImages: React.FC = () => {
    const { docs: images } = useFirestore('images') as { docs: Image[] };

    
    return (
        <div>
            <p className='font-bold text-2xl py-4'>Client Valid IDs</p>
            <div>
                {images.map(image => (
                    <div key={image.imageUrl} className='max-h-[5rem] max-w-[10rem]'>
                        <img src={image.imageUrl} alt="Client Valid ID" />
                        <div>
                            <p>Upload: {new Date(image.createdAt).toDateString()}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminImages;
