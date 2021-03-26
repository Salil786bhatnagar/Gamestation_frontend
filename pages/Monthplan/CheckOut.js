import React, { useState, useEffect } from 'react';
// import styles from  './style.module.css';
import { postData, ServerURL } from '../../FetchServices';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import { useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';
import { useRouter } from 'next/router'
const style = {
  mainContainer: {
    width: '150%'
  }
}


export default function CheckOut() {
  const router = useRouter()
  var settings = {
    
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
  }

  const [mobile, setMobile] = useState('');
  const [getNext, setNext] = useState(false);
  const [getLoginOtp, setLoginOtp] = useState(false);
  const [G_otp, setG_otp] = useState('')
  const [getOtp, setOtp] = useState('')
  const [timer, settimer] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [phone, setPhone] = useState('')

  let replace = '';



  // const getOtpBox = () => {
  //   setNext(true);
  //   setLoginOtp(true);

  // }


  const getOTPfunc = async () => {

    // settimer(30);

    setNext(true);
    setLoginOtp(true);

    var otp = parseInt(Math.random() * 9999) + 1000;
    console.log('OTP', otp);

    // let body = {phone:mobile}
    // body.message = 'OTP : ' + otp ;
    // // let body = { otp: otp, mob: props.location.state };
    // let result = await postData("api/sendsms", body);
    // if (result.status) {  

    //   alert("OTP :",otp);
    //   setG_otp(otp);
    // }

    // var interval = setInterval(
    //   () =>
    //     settimer((prevstate) => (prevstate != 0 ? prevstate - 1 : prevstate)),
    //   1000,
    // );
    // return () => {
    //   clearInterval(interval);
    // };


  };


  const handleSubmit = async () => {
    var body = { phone: mobile }
    console.log({ body })
    // if(G_otp == getOtp){

    var list = await postData('userRegister/checklogin', body)
    console.log('.................', list)
    console.log('listsssss',list)
    if (list.status) {
      // console.log('for new : ',list.message === 'New Customer')

      // console.log('for old',list.message === 'User Already exist...')
      if (list.message == 'New Customer') {
        // alert('New Customer')
        // redirect = `/Monthplan/Address`
        // replace=({pathname:`/Monthplan/Address`})
        router.push('/Monthplan/Login_Register')

      }
      else if (list.message == 'User Already exist')
      {
        // alert('User Already exist')
        // redirect = `/Monthplan/Payment`
        router.push('/Monthplan/Payment_new')
      
      }
      // }


    }
    // else{
    //   alert('Please Currect OPT...')
    // }



    // if(list.state){
    //   list.message === 'New Customer'
    //   alert('Address')
    // }
    //  else{
    //   list.message === 'User Already exist...'
    //   alert('Payment')
    //  }
  }

  // if(list.length==0){
  //   destination:({pathname:`/Monthplan/Address`}); 
  //       destination: '/Monthplan/Address',
  //       alert('Address')
  // }
  //  else{
  //    alert('payment')
  //   replace({pathname:`/Monthplan/Payment`}); 
  //  }
  // }

  const cart = useSelector(state => state.cart);
  const cartitems = Object.values(cart);
  console.log("itemsssssssss", cartitems.length);

  const renderItems = () => {

    return (
      cartitems.map(item => {
        var save1 = item.rent - item.offer;
        var save2 = item.price - item.offerprice;

        var saveTotal1 = 0;
        var saveTotal2 = 0;

        saveTotal1 += parseFloat(save1);
        saveTotal2 += parseFloat(save2)

        console.log('saveTotal11111111', saveTotal1)
        console.log('saveTotal22222222', saveTotal2)

        return (<><h5>{item.type}</h5>
          <div id="cartManage" class="row">
            {/* <img src={`${ServerURL}/images/${item.poster}`} width={100} height={100}/> */}
            <div id="imgLeft" class="col-md-6">
              <img src={`${ServerURL}/images/${item.image || item.poster}`} width={100} height={100} id="img" />
            </div>
            <div class="col-md-6">
              {/* product */}
              {item.image ? (<>
                {item.productname ? (<p><b>Product Name:</b>{item.productname}</p>) : ''}
                {item.model ? (<p><b>Model:</b>{item.model}</p>) : (<p><b>Model:</b>{item.model_name}</p>)}
                <p><b>M.R.P:</b>{item.price}</p>
                <p><b>Rentel Price:</b><s>{item.rent}</s></p>
                {/* <p><b>Rented:</b>{item.rented}</p> */}
                <p><b>Offer Price:</b>{item.offer}</p>
                <p style={{ color: 'green' }}><b>You Save:</b>{save1}</p>

                {/* games */}
              </>) :
                (<>
                  <p><b>Game Name:</b>{item.name}</p>
                  <p><b>{item.model}</b></p>
                  <p><b>Price:</b><s>{item.price}</s></p>
                  {/* <p><b>Rented:</b>{item.rented}</p> */}
                  <p><b>Offer Price:</b>{item.offerprice}</p>
                  <p style={{ color: 'green' }}><b>You Save:</b>{save2}</p>

                </>)
              }
              <Divider />
              {/* <hr /> */}
            </div>
          </div>
        </>

        )

      }

      )

    )

  }

  ////Total...
  const total = cartitems.reduce((a, b) => a + b.total, 0)
  console.log("totalllll", total);


  //   console.log(count)
  const length = Object.keys(cart).length
  console.log('total items in cart length', length)


  /// Total Saving...

  var totalSaving = cartitems.reduce((a, b) => a + b.saving, 0)
  console.log('savinggggggg', totalSaving)



  // const handleSubmit=async()=>{
  //   var body={
  //    'username': username ,
  //    'email': email ,
  //    'password': password ,
  //    'confirm_password': confirmPassword ,
  //    'phone': phone
  //   }
  //   // console.log('body',body);
  //   var result = await postData('userRegister/adduser',body);
  //   if(result)
  //   {
  //     alert('User Registerd')
  //   }
  //   else
  //   {
  //     alert('User Not Registerd')
  //   }
  // }

  return (
    <>
      {/* <Header/> */}
      <div id=""></div>
      <div id="chkout" >
        <div class="row">
          {/* <div  style={{marginTop:'10%'}}> */}
          <div class="col-md-6">
            <h3>Login / Register</h3>
            <center>

              <input type='number' onChange={(e) => setMobile(e.target.value)} style={{ borderRadius: 30, width: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="form-control" />

              {getLoginOtp ? (
                <input type='number' onChange={(e) => setOtp(e.target.value)} placeholder="Enter your OTP" style={{ borderRadius: 30, width: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="form-control" />) : ""
              }
              {timer ? (
                <div style={{ color: '#000', fontSize: 30, textAlign: 'center' }}>
                  00 : {timer > 9 ? timer : `0${timer}`}
                </div>) : ''
              }

              {getNext ? (
                <Link href={{ pathname: replace }}>
                  <button class="chooseOTPbtn" onClick={handleSubmit}>Next
              <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></button></Link>) :
                (<button class="chooseOTPbtn" onClick={getOTPfunc}>Send OTP <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin" ></i>
                </button>)
              }




              {/* {getLoginOtp?(
                  <input type='number' placeholder="Enter your OTP" style={{borderRadius:30,width:400,display:'flex',alignItems:'center',justifyContent:'center'}} className="form-control" onChange={(e)=>setMobile(e.target.value)}/>):''
               }
          
                
               {getNext?(
                <button class="chooseOTPbtn">Next <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i>
                </button>):(  <button class="chooseOTPbtn" onClick={getOtpBox}>Send OTP <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin" ></i>
                </button>)
                } */}


            </center>
            {/* {mobile} */}
            {/* <p> and get ₹99 in your account </p> */}
          </div>


          <div class="col-md-6">

  <Slider {...settings}>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/1ps4.jpg" alt="" /> </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/2ps4.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images3ps4.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/4ps4.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images5ps4.jpg" alt="" />  </div>
        <div><img style={{width: '100%', height: '500px', objectFit: 'cover'}} src="/images/6ps4.jpg" alt="" />  </div>

  </Slider>
          </div>

          {/* start */}




          {/* end */}



        </div>
      </div>

      <Footer />
      {/* </div> */}
    </>
  )
}

