import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";


const ProductSlider = ({ products }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        }
        ]
    };

    return (
        <div className="roller" style={{ width: "100%" }}>
            {/* <h2> Products </h2> */}

            <Slider {...settings} >
                {products.map((product, i) => (
                    <div key={i} className="mb-3 ">
                        <Card product={product} main='True' />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductSlider;