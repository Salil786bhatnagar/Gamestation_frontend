import React ,{useState,useEffect}from 'react';
// import styles from  './style.module.css';
import {postData} from '../../FetchServices';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';





const style = {

    // imgContainer: {
    //   width: '100px',
    //   height: '200px',
    //   overflow: 'hidden'
    // },
    img: {
      width: '100%',
      height: '100%',
      // objectFit: 'contain'
    },
    button: {
        // margin :'0 auto',
        // maxWidth:'40%',
        // width:'300px',
        borderRadius:50,
        padding:10,
        background : '#8444bc',
        border :'none'
    },

    blackPaper:{
      width:'100%',
      background:'#000',
      height:'300px',
      padding:'0 50px'

    },
  

}


export default function Address() {
    const [getCountry, setCountry] = useState('');
    const [name, setName] = useState('');    
    const [phone, setPhone] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [address,setAddress ] = useState('')

    const [getCountryChk, setCountryChk] = useState('');
    const [nameChk, setNameChk] = useState('');
    const [phoneChk, setPhoneChk] = useState('')
    const [postalCodeChk , setPostalCodeChk] = useState('')
    const [addressChk , setAddressChk ] = useState('')

    const [useriddd, setuseriddd] = useState('')

    // var UId = 0;
    // const router = useRouter();
  var UserI = useSelector(state=>state.userId)
  var UserId = Object.values(UserI)
  console.log('UserIdAddresspage',UserId);
  // setuseriddd(UserId)

  // UId = UserId;
  
 


/// for slider//

var settings = {
  // dots: true,
  // // infinite: false,
  // speed: 500,
  // // slidesToShow: 4,
  // slidesToScroll: 1,
  // initialSlide: 0,
  ////
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000
}


/////



    const ValidateLength=(txt)=>{
        if(txt.length==0)
        {
          return false
        }
        else
        {
          return true
        }
    }

  
    /// for sending Address Pag

    const handleSubmit=async()=>{

        // setCountry('')
        // setName('')
        // setPhone('')
        // setPostalCode('')
        // setAddress('')

      var err = false 

      if(!ValidateLength(getCountry))
      {
             err=true;

             setCountryChk( <font color="red" size="2">
             <i>Please enter Country</i>
           </font>)
      }
      else if(!ValidateLength(name))
      {
          err=true
          setNameChk( <font color="red" size="2">
          <i>Please enter your Name</i>
        </font>)
      }

      else if(!ValidateLength(phone))
      {
          err=true
          setPhoneChk( <font color="red" size="2">
          <i>Please enter your Phone</i>
        </font>)
      }
      else if(!ValidateLength(postalCode))
      {
          err=true
          setPostalCodeChk( <font color="red" size="2">
          <i>Please enter  Postal Code</i>
        </font>)
      }
      else if(!ValidateLength(address))
      {
          err=true
          setAddressChk( <font color="red" size="2">
          <i>Please enter Address</i>
        </font>)
      }
    
// alert('Going FOR submittion')

if(!err){
      var body={

       'country':getCountry,
       'name': name ,
       'phone': phone ,
       'postal_code': postalCode ,
       'address': address ,
       'user_register_id':UserId
       
      }

    // alert(JSON.stringify(body))
    var result = await postData('address/addAddress',body)
    if(result)
    {
      alert('address Added')
    }
    else
    {
      alert('Address not Added')
    }

    }
    }

  

    return (
        <>
        <Header/>
      
      <div id="chkout">

        <div className="row">
        {/* <div  style={{marginTop:'10%'}}> */}
        <div className="col-md-6">
        <div className="my-4"  >
            <h3>Address</h3>         
        </div>
{/* <div className="col-md-6"> */}
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text" style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Select Country'
onChange={(e)=>setCountry(e.target.value)}
/>
{getCountryChk}

{/* </div> */}
        

{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Name' 
onChange={(e)=>setName(e.target.value)}
/>
{nameChk}




{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="number"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Phone'
onChange={(e)=>setPhone(e.target.value)}
/>
{phoneChk}




{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="number"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Postal Code' 
onChange={(e)=>setPostalCode(e.target.value)}
/>
{postalCodeChk}



 {/* <label for="validationServer03" className="form-label">Phone</label> */}
<input type="textArea"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Address' 
onChange={(e)=>setAddress(e.target.value)}
/>
{addressChk}


<Link href={{pathname:"/Monthplan/Payment"}}>

<button className="btn btn-primary mt-4 btn-block" style={style.button} type="button" onClick={()=>handleSubmit()}>Ship To This Address</button>
</Link>

</div>

<div className="col-md-6">
  <Slider {...settings}>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/newsd1.jpg" alt="" /> </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/newsd2.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/newsd3.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/newsd1.jpg" alt="" />  </div>

  </Slider>
</div>



</div>

</div>
<Footer/>

</>
    
 
    )
}
