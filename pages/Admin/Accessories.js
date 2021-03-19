import React,{useState} from 'react'
import {postData,getData,postDataAndImage} from '../../FetchServices';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
export default function ConsoleType() {
    
    const [getConsoletypeId, setConsoletypeId]= useState("")
    const [getModel, setModel] = useState("")
    const [getDescription, setDescription] = useState("")
    const [getPrice, setPrice] = useState("")
    const [getStock, setStock] = useState("")
    const [getRented, setRented] = useState("")
    const [getImage, setImage]=useState({icon:'', file:''})
    const [getMessage, setMessage] = useState("")

      /* handle in image*/
   const handleImage=(event)=>{
    setImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
 }
    
    const handlesubmit=async()=>{
        
        var formData = new FormData()
            formData.append('console_type_id',getConsoletypeId),
            formData.append('model_name',getModel),
            formData.append('description',getDescription),
            formData.append('stock',getStock),
            formData.append('rented',getRented),
            formData.append('image',getImage.file)
            var config={header:{'content-type':'multipart/form-data'}}
            var result = await postDataAndImage('accessories/accessoriesData',formData,config)
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
           <div id="consoltypeheading">Accessories Data</div>
            
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationServer01">Console Type Id</label>
                    <input type="text" class="form-control" id="validationServer01" 
                    value={getConsoletypeId} onChange={(event)=>setConsoletypeId(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>

                    <div class="col-md-6 mb-3">
                    <label for="validationServer01">Model Name</label>
                    <input type="text" class="form-control" id="validationServer01" 
                    value={getModel} onChange={(event)=>setModel(event.target.value)} required/>
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

                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Price</label>
                    <input type="text" class="form-control" id="validationServer02" 
                    value={getPrice} onChange={(event)=>setPrice(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>

                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Stock</label>
                    <input type="text" class="form-control" id="validationServer02" 
                    value={getStock} onChange={(event)=>setStock(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                    
                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Rented</label>
                    <input type="text" class="form-control" id="validationServer02" 
                    value={getRented} onChange={(event)=>setRented(event.target.value)} required/>
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
               
                 <p><center>{getMessage}</center></p>
           </div>
        </>
    )
}
