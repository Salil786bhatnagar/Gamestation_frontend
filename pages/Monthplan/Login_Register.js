import React ,{useState,useEffect}from 'react';
// import styles from  './style.module.css';
import {postData} from '../../FetchServices';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import {useDispatch , useSelector} from 'react-redux';





const style = {
    button: {
        margin :'0 auto',
        maxWidth:'40%',
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


export default function LoginRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [phone, setPhone] = useState('')
    const [getOtp, setOtp] = useState('')
    const [G_otp,setG_otp ] = useState('')

    const [usernameChk, setUsernameChk] = useState('');
    const [emailChk, setEmailChk] = useState('');
    const [passwordChk, setPasswordChk] = useState('');
    const [confirmPasswordChk, setconfirmPasswordChk] = useState('');
    const [phoneChk, setPhoneChk] = useState('')
    const [otpChk, setOtpChk] = useState('')

    const [timer, settimer] = useState();
    
    
    const [otpBox, setotpBox] = useState(false)
    const [nextbtn, setnextbtn] = useState(false)

    ///for address page ,sending userId..
    const [getUserId, setUserId] = useState('')
    const dispatch = useDispatch();


    // const OpenOtpBox=()=>{
    //   setotpBox(true)
    //   setnextbtn(true)
    // }

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

    const getOTPfunc = async () => {

      settimer(30);

      setotpBox(true)
      setnextbtn(true)
      var otp = parseInt(Math.random() * 9999) + 1000;
      console.log('OTP',otp);     
      
      // let body = {phone}
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

   

    /// for sending Address Page
    // const addressPage=()=>{
    //   <Link href={{pathname:"/Monthplan/Customer_Address" }}>                             
                                          
    //   </Link>
    // }


    const handleSubmit=async()=>{

      setUsername('')
      setEmail('')
      setPassword('')
      setconfirmPassword('')
      setPhone('')

      var err = false 

      if(!ValidateLength(username))
      {
             err=true;

             setUsernameChk( <font color="red" size="2">
             <i>Please enter your Name</i>
           </font>)
      }
      else if(!ValidateLength(email))
      {
          err=true
          setEmailChk( <font color="red" size="2">
          <i>Please enter your Email</i>
        </font>)
      }
      else if(!ValidateLength(password))
      {
          err=true
          setPasswordChk( <font color="red" size="2">
          <i>Please enter your Password</i>
        </font>)
      }
      else if(!ValidateLength(confirmPassword))
      {
          err=true
          setconfirmPasswordChk( <font color="red" size="2">
          <i>Please enter your Confirm Password</i>
        </font>)
      }
      else if(!ValidateLength(phone))
      {
          err=true
          setPhoneChk( <font color="red" size="2">
          <i>Please enter your Confirm Password</i>
        </font>)
      }

      else if(!ValidateLength(getOtp))
      {
          err=true
          setOtpChk( <font color="red" size="2">
          <i>Please enter your Confirm Password</i>
        </font>)
      }

// alert('Going FOR submittion')

    

if(!err){
      var body={
       'username': username ,
       'email': email ,
       'password': password ,
       'confirm_password': confirmPassword ,
       'phone': phone
      }
     
      // if(G_otp==getOtp){

            var result = await postData('userRegister/adduser',body);
             if(result)
              {
               
                alert('User Registerd')
              }
          else  
              {
                alert('User Not Registerd')
              }
              // const  useId = result.insertId
              // setUserId(result.insertId)
              // var useId = result.insertId
              // console.log('userIddddddddddddddddd',useId)

              dispatch({type:'userid_reg_to_add',payload:[result.insertId,result.insertId]})

      //  }
      //  else
      //  {
      //    alert('Please Enter Correct OTP')
      //  }
  }
    }

    return (
        <>
        {/* <Header/> */}
      
        {/* <div  style={{marginTop:'10%'}}> */}
        <div className="text-center my-4" >
            <h3>Register to Start</h3>                  
            <p> and get ₹99 in your account </p>
        </div>
<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text" style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Username'
onChange={(e)=>setUsername(e.target.value)}
/>
{usernameChk}

</div>
        
<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Email' 
onChange={(e)=>setEmail(e.target.value)}
/>
{emailChk}

</div>

<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="password"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Password'
onChange={(e)=>setPassword(e.target.value)}
/>
{passwordChk}

</div>

<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="password"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Confirm Password' 
onChange={(e)=>setconfirmPassword(e.target.value)}
/>
{confirmPasswordChk}

</div>

<div className="col-md-6">
 {/* <label for="validationServer03" className="form-label">Phone</label> */}
<input type="text"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Phone' 
onChange={(e)=>setPhone(e.target.value)}
/>
{phoneChk}
{
  otpBox?(
  <input type="text" style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='Enter OTP' 
  onChange={(e)=>setOtp(e.target.value)}
/>
):''
}{otpChk}
{timer ? (
 
   
      <div style={{color: '#000', fontSize: 30,textAlign:'center'}}>
        00 : {timer > 9 ? timer : `0${timer}`}
      </div>
    
 
) : ''}

</div>

{!nextbtn?(
<div style={{width:'100%'}} class="col-md-6 mt-4 mx-3" >
  <button className="btn btn-primary btn-block" style={style.button} type="button" onClick={getOTPfunc}>GET OTP</button>
  
</div>):(<div style={{width:'100%'}} class="col-md-6 mt-4 mx-3" >

<Link href={{pathname:"/Monthplan/Address"}}>
  <button className="btn btn-primary btn-block" style={style.button} type="button" onClick={()=>{   
    handleSubmit()
   }} >Next</button>
  </Link>
</div>)

  
}
{/* 
<div style={{width:'100%'}} class="col-md-6 mt-4 mx-3" >
  <button className="btn btn-primary btn-block" style={style.button} type="button" onClick={OpenOtpBox}>OTP</button>
  
</div> */}


<p className='text-center mt-4'>Already have an account? Sign in Now</p>

<Footer/>
{/* </div> */}
</>
    )
}
 
