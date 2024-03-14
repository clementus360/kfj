import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { house } from "@/utils/types";
import House from "./properties/House";

interface FeaturedCarouselProps {
  houseList: Array<house>;
}

export function FeaturedHouseCarousel({ houseList }: FeaturedCarouselProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: houseList.length <3? houseList.length:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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


  if (houseList.length < 2 && houseList[0]) {
    return(
      <House {...houseList[0]} />
    )
  }

  return (
      <Slider {...settings}>
        {houseList.map((house, key) => (
          <div key={key}>
            <House {...house} />
          </div>
        ))}
      </Slider>
  );
}
