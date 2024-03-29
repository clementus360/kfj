"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { car } from "@/utils/types";
import Car from "./cars/Car";

interface FeaturedCarouselProps {
  carList: Array<car>;
}

export function FeaturedCarCarousel({ carList }: FeaturedCarouselProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: carList.length < 3 ? carList.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  if (carList.length < 2 && carList[0]) {
    return (
      <Car {...carList[0]} />
    )
  }

  return (
    <Slider {...settings}>
      {carList.map((car, key) => (
        <div key={key}>
          <Car {...car} />
        </div>
      ))}
    </Slider>
  );
}
