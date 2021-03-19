import React ,{useState , useEffect}from 'react';
import {getData , postData,postDataAndImage} from '../../FetchServices';


export default function LogIn(props) {


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [msg, setmsg] = useState('')

    const handleSubmit=async()=>{
        // console.log('email & password',email +""+password);
        var body = {email:email , password:password}
        var result  = await postData('admin/checkLogin',body) ;

        if(result.length==1)
        {
            alert('Credentials Matched...!!')
            setmsg('Credentials Matched...!!')
        }

        else{
            alert('Credentials Not Matched...!!!')
            setmsg('Credentials Not Matched...!!')
        }

        
        
    }

    return (
       <> 
        <div id="maincontainer" >
        <h1 style={{position:'relative',left:'15%'}}>Admin Login</h1>
           <div className="makeinbtw">
        <div class="form-group">
            <label for="exampleInputEmail1" style={{textAlign:"left"}}>Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"
            onChange={(e)=>setemail(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
        onChange={(e)=>setpassword(e.target.value)}

    />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
  <h3>{msg}</h3>
        </div>
       </> 
    )
}
