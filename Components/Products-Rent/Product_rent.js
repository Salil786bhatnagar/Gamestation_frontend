import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
    mainContainer:{
        width:'98%'
    },
    // heading:{
    //   textAlign: 'center',
    //   fontWeight: '800',
    //   letterSpacing: '0px',
    //   // padding: '25px 0px 0px 0px',
    //   margin: '40px 0px 40px 0px',
    // }
 
  }));

export default function Product_rent() {
    const classes = useStyles();
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    }

    return (
   <div>  
      <Typography variant="h6" component="h6" id="heading">
         Our Products on Rent
        </Typography>
      <div className={classes.mainContainer} style={{margin:'60px 80px'}}>
        <Slider {...settings}>
        <div>
        <img src="images/slide1.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide2.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide3.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide4.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide5.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide6.jpg" width="110%" height="110%"/>
        </div>
        <div>
        <img src="images/slide7.jpg" width="110%" height="110%"/>
        </div>
        </Slider>
      </div> 
       <Grid item xs={12}>
        <Button variant="contained" id="calender"><img src="images/calendar.png" class="calenderImg"/>&nbsp;&nbsp;Rent For a Month</Button>
       </Grid>
       <Grid item xs={12}>
        <Button variant="contained" id="shop"><img src="images/shop.png" class="shopImg"/>&nbsp;&nbsp;Rent For a Week</Button>
       </Grid>
    </div>
    )
}
