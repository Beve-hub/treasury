import  { useState } from 'react';
import img1 from '../../../assets/image_test1.png';
import img2 from '../../../assets/image_test2.png';
import img3 from '../../../assets/image_test3.png';
import img4 from '../../../assets/image_test4.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      image: img1,
      text: "I recently switched to Anthstone and I'm extremely happy with the results. Their customer service is outstanding - they're always willing to go that extra mile to make sure I'm satisfied. "
    },
    {
      image: img2,
      text: "I've been a customer of Anthstone for over 5 years now and I'm still delighted with their service. Their customer support team is always helpful and willing to go the extra mile."
    },
    {
      image: img3,
      text: "I've been using Anthstone for a few months now and I can confidently say that they are the best in the market. Their customer service is top-notch and their products are always reliable. "
    },
    {
        image: img4,
        text: " I'm impressed with the quality of their product and recommend them to anyone looking for a reliable financial solution.The features they offer are top-notch and their fees are very reasonable. "
      }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    const testimonialElements = document.querySelectorAll('.testimonial-slide');
    testimonialElements.forEach((element, index) => {
      if (index === currentSlide + 3) {
        element.classList.remove('opacity-100');
        element.classList.add('opacity-0');
      }
    });
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
    const testimonialElements = document.querySelectorAll('.testimonial-slide');
    testimonialElements.forEach((element, index) => {
      if (index === currentSlide - 1) {
        element.classList.add('opacity-100');
        element.classList.remove('opacity-0');
      } 
    });
  };
  return (
    <section className="min-h-[30rem] bg-[--text-extra] py-20 flex items-center justify-center">
      <div className="max-w-[1100px] w-full px-4 relative">
        <div className='text-center mb-8'>
          <p className='font-semibold text-[--text-color]'>TESTIMONIAL</p>
          <div className='w-[3rem] py-1 mx-auto border-b-4 border-[--button-color]'></div>
         
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[--bg-color] py-2 px-4 rounded-full  border-0 text-xl text-[--button-color]  focus:outline-none " onClick={prevSlide}>
            &#10094;
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[--bg-color] py-2 px-4 rounded-full  border-0 text-xl text-[--button-color] focus:outline-none" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="flex justify-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-slide ${index >= currentSlide && index < currentSlide + 3 ? 'opacity-100' : 'opacity-0 absolute'} transition-opacity duration-500 m-2`}>
                <div className='drop-shadow-xl border-2 w-[17rem] py-4 mx-auto rounded-lg'>
                  <div className='flex justify-center'>
                    <img src={testimonial.image} alt='' className='w-[3.6rem] h-[3.9rem]' />
                  </div>
                  <div className='mt-6 mx-2'>
                    <p className='text-sm'>
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`pagination-dot ${index >= currentSlide && index < currentSlide + 2 ? 'bg-gray-800' : 'bg-gray-400'} rounded-full w-1 h-1 mx-2 cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
