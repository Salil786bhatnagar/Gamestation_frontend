import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.css';
export default function Game_bannerImage() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <>
          <div id="showgameId">
                <Slider {...settings}>
                <div><img src="/images/banner1.jpg" alt="" width="100%" height="350px"  style={{objectFit:'fill',}} /> </div>
                <div><img  src="/images/banner2.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}}/>  </div>
                <div><img  src="/images/banner3.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}}/>  </div>
                <div><img  src="/images/banner4.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}} />  </div>
                <div><img  src="/images/banner2.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}} />  </div>
                <div><img  src="/images/banner3.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}} />  </div>
                <div><img src="/images/banner1.jpg" alt="" width="100%" height="350px"  style={{objectFit:'fill'}} /> </div>
                <div><img  src="/images/banner2.jpg" alt="" width="100%" height="350px" style={{objectFit:'fill'}} />  </div>
                
                </Slider>
          </div>  
        </>
    )
}
