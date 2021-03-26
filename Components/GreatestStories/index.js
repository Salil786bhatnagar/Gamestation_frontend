import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.css';

export default function GreatestStories() { 
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      };

    return (<>
        {/* <div className={styles.maincontainer}>
        
        </div> */}

        <div style={{margin: '60px 100px'}}>
        <h3 className="text-center my-4"><b> Greatest stories at your doorstep </b></h3>
        <Slider {...settings}>
            <div className={styles.imgContainer}><img src="1.jpg" alt="" /> </div>
            <div className={styles.imgContainer}><img  src="2.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="3.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="4.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="5.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="6.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="7.jpg" alt="" />  </div>
            <div className={styles.imgContainer}><img  src="8.jpg" alt="" />  </div>
      </Slider>
        </div>

        <div className={styles.btnRentGames} >
            <input type='button' value="Rent Games" style={{ maxWidth:'15%'}}/>
        </div>
        </>
    )
}
