import React,{useState, useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {getData, ServerURL} from '../../FetchServices';

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
      infinite: true,
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000

    }

    const [getGame, setGame]=useState([])

    useEffect(function(){
      fetchproductgameList()
    },[])


     const fetchproductgameList=async()=>{
       let list = await getData('game/display');
       setGame(list);
       console.log('listtttttttttttttttttttttttt',list);
     }

     const fetchlistData=()=>{
       return(
         getGame.map((item)=>{
           return(
             <div>
             <  img src={`${ServerURL}/images/${item.poster}`} width="70%" height="70%" style={{objectFit:'contain'}}/>
             </div>
           )
         })
       )
     }

    return (
   <div style={{ margin: 0, padding:0, width: '100%', overflow: 'hidden'}}>  
      <Typography variant="h6" component="h6" id="heading">
         Our Products on Rent
        </Typography>
      <div className={classes.mainContainer} style={{margin:'60px 80px'}}>
        <Slider {...settings}>
      
          {fetchlistData()}  
        
        </Slider>
      </div> 
       {/* <Grid item xs={12}>
        <Button variant="contained" id="calender"><img src="images/calendar.png" class="calenderImg"/>&nbsp;&nbsp;Rent For a Month</Button>
       </Grid>
       <Grid item xs={12}>
        <Button variant="contained" id="shop"><img src="images/shop.png" class="shopImg"/>&nbsp;&nbsp;Rent For a Week</Button>
       </Grid> */}
    </div>
    )
}
