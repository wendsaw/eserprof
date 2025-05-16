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
          <img src="/realisations/aeroport/image1.jpg" alt="Péage moderne 1" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image2.jpg" alt="Péage moderne 2" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image3.jpg" alt="Péage moderne 3" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image4.jpg" alt="Péage moderne 4" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image5.jpg" alt="Péage moderne 5" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image6.jpg" alt="Péage moderne 6" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image7.jpg" alt="Péage moderne 7" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image8.jpg" alt="Péage moderne 8" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image9.jpg" alt="Péage moderne 9" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image10.jpg" alt="Péage moderne 10" style={{height:'400px'}} />
        </div>
        <div>
          <img src="/realisations/aeroport/image11.jpg" alt="Péage moderne 11" style={{height:'400px'}} />
        </div>
         <div>
          <img src="/realisations/aeroport/image12.jpg" alt="Péage moderne 12" style={{height:'400px'}} />
        </div>
         <div>
          <img src="/realisations/aeroport/image13.jpg" alt="Péage moderne 13" style={{height:'400px'}} />
        </div>
      </Slider>
    </div>
  );
}

export default PeageModerne;
