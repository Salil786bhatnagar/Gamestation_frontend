import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: 345,
    },
  },
    heading:{
      textAlign: 'center',
      fontWeight: '800',
      letterSpacing: '0px',
      // padding: '25px 0px 0px 0px',
      margin: '40px 0px 40px 0px',
    },
 
  }));

export default function Blogs() {
    const classes = useStyles();

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
    }
    return (
   <div>  
      <Typography variant="h6" component="h6" id="heading">
          Our Blogs
        </Typography>
      <div className={classes.mainContainer} id="blogs_slider" style={{margin:'60px 80px'}}>
        <Slider {...settings}> 
            <div id="slider1">
                {/* <Card className={classes.root}>
                
                </Card> */}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image="images/blog1.jpg"
                    className={classes.blogImg}
                    />
                    <p id="blog1c">The Top 10 Games you must try on PS4</p>
            </div>
            <div id="slider1">
                {/* <Card className={classes.root}>
                
                </Card> */}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image="images/blog2.jpg"
                    className={classes.blogImg}
                    />
                    <p id="blog1c">Everything you wanted to know about PS4</p>
            </div>

            <div id="slider1">
                {/* <Card className={classes.root}>
                
                </Card> */}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image="images/blog3.jpeg"
                    className={classes.blogImg}
                    />
                    <p id="blog1c">These Accessories would definitely boost your PS4 experience</p>
            </div>

            <div>
                {/* <Card className={classes.root}>
                
                </Card> */}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image="images/blog4.jpg"
                    className={classes.blogImg}
                    />
                    <p id="blog1c">These Accessories would definitely boost your PS4 experience</p>
            </div>
        </Slider>
      </div> 
      <div id="IconBlog" style={{margin:'60px 80px'}}>
      <div class="row" style={{margin:'60px 80px'}}>
           <div class="col-md-3">
              <div id="blogIcon">
                  <figure>
                    <img src="images/bicon1.png"/> 
                    <figcaption>
                         <span id="blogContain">Monthly Subscriptions</span>
                    </figcaption> 
                  </figure>
              </div>  
           </div>
           <div class="col-md-3">
              <div id="blogIcon">
                  <figure>
                    <img src="images/bicon2.png"/> 
                    <figcaption>
                         <span id="blogContain">No Security Deposit</span>
                    </figcaption> 
                  </figure>
              </div>  
           </div>
           <div class="col-md-3">
              <div id="blogIcon">
                  <figure>
                    <img src="images/bicon3.png"/> 
                    <figcaption>
                         <span id="blogContain">Verified Renters</span>
                    </figcaption> 
                  </figure>
              </div>  
           </div>
           <div class="col-md-3">
              <div id="blogIcon">
                  <figure>
                    <img src="images/bicon4.png"/> 
                    <figcaption>
                         <span id="blogContain">24 Hour Delivery</span>
                    </figcaption> 
                  </figure>
              </div>  
           </div>
       </div>
     </div> 
    </div>
    )
}
