import image from '../../../assets/line.svg';

const Find = () => {
    return (
        <section className="min-h-[2rem] bg-[--text-extra] py-20 flex md:flex-row items-center justify-center relative">
            <div
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                }}
            >
                <div className="grid justify-center items-center h-[10rem] mx-[2rem]">
                    <p className='mx-auto font-bold text-3xl text-[--text-extra]'>Find out more about <span className='text-[--button-color]'>what we do</span> </p>
                </div>
            </div>
        </section>
    );
}

export default Find;
