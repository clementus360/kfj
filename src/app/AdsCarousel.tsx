"use client"

import { ad } from "@/utils/types";
import Slider from "react-slick";

function Ad({ image, title }: { image: string, title: string }) {
    return (
        <div className="m-4">
            <img src={image} alt={title} />
        </div>
    )
}

interface FeaturedCarouselProps {
    adList: Array<ad>;
  }


export default function AdCarousel({adList}: FeaturedCarouselProps) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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


    return (
        <div className="py-16 px-8">
            {adList && <Slider {...settings}>
                {adList.map((ad, key) => (
                    <div key={key}>
                        <Ad title={ad.description} image={ad.ad} />
                    </div>
                ))}
            </Slider>}
        </div>
    );

}
