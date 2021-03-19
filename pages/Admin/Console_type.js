import React,{useState} from 'react'
import {postData,getData,postDataAndImage} from '../../FetchServices';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'



export default function ConsoleType() {
    
    const [getType, setType] = useState("");
    const [getDescription, setDescription] = useState("")
    const [getImage, setImage]=useState({icon:'', file:''})
    const [getMessage, setMessage] = useState("")

      /* handle in image*/
   const handleImage=(event)=>{
    setImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
 }
    
    const handlesubmit=async()=>{
        
        var formData = new FormData()
            formData.append('type',getType),
            formData.append('description',getDescription),
            formData.append('image',getImage.file)
            var config={header:{'content-type':'multipart/form-data'}}
            var result = await postDataAndImage('consoletype/addtype',formData,config)
    console.log('result',result);
        if(result)
            { //alert("Record Submitted")
            setMessage('Record Submitted')
            }
            else{
        // alert('Fail to Submit Record')
            setMessage('Fail to Submit Record')
            }

    }
    return (
        <>
        <div id="consoletype_form"> 
           <div id="consoltypeheading">Console Type</div>
            
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationServer01">Type</label>
                    <input type="text" class="form-control" id="validationServer01" 
                    value={getType} onChange={(event)=>setType(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Description</label>
                    <input type="text" class="form-control" id="validationServer02" 
                    value={getDescription} onChange={(event)=>setDescription(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                   </div>
                   <div class="form-row">
                    <div class="col-md-6 mb-3">
                    {/* <label for="validationServer03">Upload Image</label>
                    <input type="file" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required/> */}
                    <input
                         accept="image/*"
                        //  className={classes.input}
                         id="contained-button-file"
                         multiple
                         type="file"
                        style={{display:'none'}}
                        onChange={(event)=>handleImage(event)}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload Image
                        </Button>
                    </label>
                    <Avatar id="Aveter" style={{width:60,height:60}} src={getImage.icon} />
                    </div>
                    </div>
                   {/* <button class="btn btn-primary" ></button> */}
                    <Button variant="contained" color="primary" onClick={()=>handlesubmit()}>
                            Submit form
                    </Button>
               
                {getMessage}
           </div>
        </>
    )
}
