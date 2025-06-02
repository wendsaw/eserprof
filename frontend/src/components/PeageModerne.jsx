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

function PeageModerne() {
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
          <img src="/realisations/peagesModerne/image1.png" alt="Péage moderne 1" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/peagesModerne/image2.jpg" alt="Péage moderne 2" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/peagesModerne/image3.jpg" alt="Péage moderne 3" style={{height:'400px'}} />
        </div>
         <div>
          <img src='/images/references1.png' alt="Péage moderne 1" style={{height:'400px'}} />
        </div>
        <div>
          <img src='/images/references2.png'alt="Péage moderne 1" style={{height:'400px'}} />
        </div>
        <div>
          <img src='/images/references3.png' alt="Péage moderne 1" style={{height:'400px'}} />
        </div>
      </Slider>
      <h3 style={{ fontSize: '1.25rem', color: '#2c3e50', fontWeight: '600', margin: '1rem 0 0.5rem' }}>
      Travaux de Construction de postes de péages routiers modernes  (Ouagadougou & Bobo)
    </h3>
    <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
      Client: Globex Construction</p>
    <p style={{ fontSize: '1rem', color: '#555', margin: '0.25rem 0' }}>
      Date: 2023
    </p>
    </div>

  );
}

export default PeageModerne;
