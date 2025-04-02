"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Prakul Rathnakar",
      review:
        "I would like to thank Vanessa Lenger from Unique Properties for helping me with a hassle-free experience in finding me the right place...",
      rating: 5,
    },
    {
      name: "Pascal Macauilt",
      review:
        "Anna provided a great support at all steps of the transaction. She took the time to find our dream home and guided us through all procedures...",
      rating: 5,
    },
    {
      name: "Rob Sundberg",
      review:
        "They took care of me at every step, and I can proudly recommend both agents. They understood me on a personal level and gave me excellent advice.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      review:
        "Amazing service! The team was professional and helped me find exactly what I was looking for in no time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Smith",
      review:
        "Very pleased with the experience. They guided me throughout the entire process and made everything smooth and stress-free!",
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading & Rating */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">
              CLIENT TESTIMONIALS
            </h2>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <div className="bg-gray-200 rounded-full p-2 text-black text-xl font-bold">
                G
              </div>
              <div>
                <p className="font-bold text-lg">Rated 4.8/5</p>
                <p className="text-gray-600 text-sm">250+ Google Reviews</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Don't just take our word for it. Here's what our clients have to
              say about their Unique experience.
            </p>
          </div>

          {/* Slick Slider */}
          <div className="md:w-2/3 w-full">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-lg p-6 h-72">
                    <p className="text-gray-700 mb-4">{item.review}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xl">👤</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">{item.name}</p>
                        <div className="flex text-yellow-500">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star key={i} size={16} fill="yellow" stroke="none" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
