import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from '../../assets/HomeImage/Review1.jpg'
import Review2 from '../../assets/HomeImage/Review2.jpg'
import Review3 from '../../assets/HomeImage/Review3.jpg'
import Review4 from '../../assets/HomeImage/Review4.jpg'

const reviews = [
  {
    name: "Aarthy V",
    image: Review1,
    review: "I've been using HOPC for 6 months for hair & scalp health. This Zero-Dandruff Oil helped manage hair fall and strengthened my hair. Feels better than expensive beauty products.",
    stars: 5,
  },
  {
    name: "Naveen M",
    image: Review2,
    review: "Great product and quick logistics. Ordering was a breeze and it was worth the value. Natural ingredients that work as intended. Just wow!",
    stars: 2.5,
  },
  {
    name: "Preku S",
    image: Review3,
    review: "I bought this for my mom. She loves the feel and message HOPC sends with their care kits. The products are super handy and safe.",
    stars: 4.5,
  },
  {
    name: "Dr. Arun",
    image: Review4,
    review: "Well done to this organic brand! As an ENT doctor, I highly value this level of care and purity. No chemicals or parabens. My patients also benefit.",
    stars: 3.5,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i} className="text-orange-400">★</span>);
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i} className="text-orange-400">☆</span>);
    } else {
      stars.push(<span key={i} className="text-gray-300">★</span>);
    }
  }
  return stars;
};

const Reviews = () => {

   const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white w-full max-w-full overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Reviews</h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-800 leading-loose text-sm md:text-base">
          We value your feedback. Every review helps us serve you better and continue delivering wellness solutions that truly make a difference.
          
          If you've experienced our products, we'd love to hear your thoughts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2 h-full">
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md flex flex-col justify-between h-[280px] md:h-[250px]">
                <div className="flex items-start gap-3 md:gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-base md:text-lg">{review.name}</h4>
                    <div className="text-orange-400 text-sm md:text-base">
                      {renderStars(review.stars)}
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 mt-2 md:mt-4 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Reviews