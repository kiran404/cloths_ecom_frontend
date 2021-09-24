import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";


const ProductSlider = ({ products }) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div style={{ width: "100%" }}>
            {/* <h2> Products </h2> */}

            <Slider {...settings}>
                {products.map((product, i) => (
                    <div key={i} className="mb-3 ">
                        <Card product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductSlider;