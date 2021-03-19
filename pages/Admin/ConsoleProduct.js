import React,{useState,useEffect} from 'react';
import {getData , postData,postDataAndImage} from '../../FetchServices';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


export default function ConsoleProduct() {

    const [consoleTypeId, setconsoleTypeId] = useState('');
    const [productName, setproductName] = useState('');
    const [model, setmodel] = useState('');
    const [price, setprice] = useState('');
    const [offer, setoffer] = useState('');
    const [offerType, setofferType] = useState('');
    const [rented, setrented] = useState('');
    const [stock, setstock] = useState('');
    const [description, setdescription] = useState('');
    const [rent, setrent] = useState('');
    const [image, setimage] = useState({icon:'',fileIcon:''});
    const [msg, setmsg] = useState('')


    const handleIcon=(event)=>{
        setimage({icon:event.target.files[0],fileIcon:URL.createObjectURL(event.target.files[0])})
    }
    


    const handleSubmit =async()=>{

        const formData = new FormData();
        formData.append('console_type_id',consoleTypeId)
        formData.append('productname',productName)
        formData.append('model',model)
        formData.append('price',price)
        formData.append('offer',offer)
        formData.append('offer_type',offerType)
        formData.append('rented',rented)
        formData.append('stock',stock)
        formData.append('description',description)
        formData.append('rent',rent)
        formData.append('image',image.icon)

        var  config = {headers:{'content-type':'multipart/form-data'}}
        var result = await postDataAndImage('consoleproduct/addproduct',formData,config)

        console.log('result',result);
        
        if(result)
        {
            setmsg('Record Submitted')
            // alert('Record Submitted')
        }
        else
        {
            setmsg('Not Submitted.....')
            // alert('not submitted')
        }
        // alert('going..')
    }


    return (
        
        <div class="maincontainer" style={{padding:'10%'}}>
        <h1 className="text-center p-4"> Console Product</h1>
           {/* <form onSubmit={handleSubmit()}> */}
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Console Type Id</label>
      <input type="text" class="form-control" id="validationServer01" required
      onChange={(event)=>setconsoleTypeId(event.target.value)}
      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Product Name</label>
      <input type="text" class="form-control" id="validationServer02"  required
            onChange={(event)=>setproductName(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Model</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
            onChange={(event)=>setmodel(event.target.value)}

      />
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer04">Price</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
      onChange={(event)=>setprice(event.target.value)}
      />

      <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer05">Offer Price</label>
      <input type="text" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
            onChange={(event)=>setoffer(event.target.value)}

      />
      <div id="validationServer05Feedback" class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  
  {/* <div class="form-row"> */}
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Offer Type</label>
      <input type="text" class="form-control " id="validationServer01" 
      
      required
            onChange={(event)=>setofferType(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Rented</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setrented(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  {/* </div> */}
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Stock</label>
      <input type="text" class="form-control " id="validationServer01"  required
            onChange={(event)=>setstock(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Description</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setdescription(event.target.value)}

      />
     
    </div>

     <div class="col-md-6 mb-3" style={{textAlign:'center',padding:'10px'}}>
     <label for="validationServer02">Rent Price</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setrent(event.target.value)}

      />
     {/* <center> <Avatar alt="ram" src={image.fileIcon}  style={{width:80,height:80}} /></center>

     <input
                   accept="image/*"
                   onChange={(event)=>handleIcon(event)}
                        style={{display:'none'}}
                //    className={classes.input}
                   id="contained-button-fileicon"
                   multiple
                   type="file"
                />
                <label htmlFor="contained-button-fileicon">
                    <Button variant="contained" color="primary" 
                       component="span"
                        // className={classes.button}
                        >
                            Upload Icon
                    </Button>
                 </label> */}

     </div>
     <div class="col-md-6 mb-3" style={{textAlign:'center',padding:'10px'}}>
     <center> <Avatar alt="ram" src={image.fileIcon}  style={{width:80,height:80}} /></center>

     <input
                   accept="image/*"
                   onChange={(event)=>handleIcon(event)}
                        style={{display:'none'}}
                //    className={classes.input}
                   id="contained-button-fileicon"
                   multiple
                   type="file"
                />
                <label htmlFor="contained-button-fileicon">
                    <Button variant="contained" color="primary" 
                       component="span"
                        // className={classes.button}
                        >
                            Upload Icon
                    </Button>
                 </label> 

     </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div  id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={()=>handleSubmit()} >Submit form</button>
{/* </form> */}
<center>{msg}</center>
        </div>
    )
}
