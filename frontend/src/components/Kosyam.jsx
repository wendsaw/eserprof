

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 🔽 Flèche suivante personnalisée
function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...arrowStyle, right: 10 }}
        >
            ➤
        </div>
    );
}

// 🔼 Flèche précédente personnalisée
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...arrowStyle, left: 10 }}
        >
            ⬅
        </div>
    );
}

// Style de base pour les flèches
const arrowStyle = {
    zIndex: 2,
    fontSize: '2rem',
    color: '#000',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '50%',
    padding: '0.5rem',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    position: 'absolute',
    top: '45%',
};

function Kosyam() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div style={{ width: '90%', margin: '2rem auto' }}>
            <Slider {...settings}>
                <div>
                    <img src="/images/references10.png" alt="citAn2 " style={{ height: '400px' }} />
                </div>
                <div>
                    <img src="/images/references10.png" alt="citAn2 " style={{ height: '400px' }} />
                </div>

            </Slider>
            <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
                TRAVAUX D’URGENCE DE MARQUAGE DE SIGNALISATION HORIZONTAL A KOSYAM AU PROFIT DU CABINET DE LA PRESIDENCE DU FASO
            </h3>
            <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                Client: Presidence du Faso</p>
            <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
                Date: 2024
            </p>
        </div>

    );
}

export default Kosyam;
