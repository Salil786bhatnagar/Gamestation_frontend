import React,{useState,useEffect} from 'react';
import styles from  './style.module.css'
import {postData} from '../../FetchServices'

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

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [phone, setPhone] = useState('')

    const handleSubmit=async()=>{
      var body={
       'username': username ,
       'email': email ,
       'password': password ,
       'confirm_password': confirmPassword ,
       'phone': phone
      }
      // console.log('body',body);
      var result = await postData('userRegister/adduser',body);
      if(result)
      {
        alert('User Registerd')
      }
      else
      {
        alert('User Not Registerd')
      }
    }

    return (
        <>
        <div className="text-center my-4">
            <h3>Register to Start</h3>
            <p> and get ₹99 in your account </p>
        </div>
<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text" style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Username'
onChange={(e)=>setUsername(e.target.value)}
/>

</div>
        
<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="text"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Email' 
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="password"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Password'
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

<div className="col-md-6">
{/* <label for="validationServer03" className="form-label">City</label> */}
<input type="password"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Confirm Password' 
onChange={(e)=>setconfirmPassword(e.target.value)}
/>

</div>

<div className="col-md-6">
 {/* <label for="validationServer03" className="form-label">Phone</label> */}
<input type="text"  style={{borderRadius:30}} className="form-control mt-4 p-4 ml-2" id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder='*Phone' 
onChange={(e)=>setPhone(e.target.value)}
/>

</div>

<div style={{width:'100%'}} class="col-md-6 mt-4 mx-3" >
  <button className="btn btn-primary btn-block" style={style.button} type="button" onClick={handleSubmit}>Resgister</button>
  
</div>


<p className='text-center mt-4'>Already have an account? Sign in Now</p>

<div  className="mt-5" style={style.blackPaper}>
<div style={{color:'#ccc',padding:80}}>
<h6 style={{letterSpacing:1.5}}><b>GET EXCLUSIVE UPDATES </b></h6>
<p style={{color:'grey'}} className="mt-4"  >Subscribe to our newsletter and get essential updates about discounts and price drops</p>
<div className={styles.inputContainer} >
  <input placeholder='Email Address'  value={email} onClick={e => setEmail(e.target.value)}/>
  <div className={styles.subscribe}>
  <button>Subscribe</button>
  <span>&#9654;</span>
  </div>
</div>
</div>

</div>

</>
    )
}
 