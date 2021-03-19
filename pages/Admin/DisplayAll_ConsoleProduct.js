import { Dialog } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import {getData,postData,postDataAndImage, ServerURL,deleteDataAxios} from '../../FetchServices'
/**
 * @author
 * @function CategoryDisplay
 **/

export default function DisplayAll_ConsoleProduct(){
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [productid , setproductid] =useState('')
  const [consoleTypeId, setconsoleTypeId] = useState("");
  const [productName, setproductName] = useState("");
  const [model, setmodel] = useState('');
  const [price, setprice] = useState('');
  const [offer, setoffer] = useState('');
  const [offerType, setofferType] = useState('');
  const [rented, setrented] = useState('');
  const [stock, setstock] = useState('');
  const [description, setdescription] = useState('');
  const [image, setimage] = useState({icon:'',fileIcon:''});
  const [msg, setmsg] = useState('')

  const [columns, setColumns] = useState({
    column:[
    { title: "Console Type Id", field: "console_type_id" },
    { title: "Product Name", field: "productname" },
    { title: "Model", field: "model" },
    { title: "Price", field: "price" },
    { title: "Offer", field: "offer" },
    { title: "Offer Type ", field: "offer_type" },
    { title: "Rented", field: "rented" },
    { title: "Stock", field: "stock" },
    { title: "Description", field: "description" },
    { title: "Image", field: "image",
    render: rowData=><div><Avatar  src={`${ServerURL}/images/${rowData.image}`} /></div>
  },
    ]
  });

  const fetchData = async () => {
    const result = await getData("consoleproduct/display");
    // console.log('agyaaaaaaaaaaa........',result);
    
    result.status && setData(result.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete=async(oldData)=>{
    await deleteDataAxios(`consoleproduct/delete/${oldData.productid}`)   
   
   }

  const handleUpdate = (rowData) => {
    setproductid(rowData.productid)
    setconsoleTypeId(rowData.console_type_id)
    setproductName(rowData.productname)
    setmodel(rowData.model)
    setprice(rowData.price)
    setoffer(rowData.offer)
    setofferType(rowData.offer_type)
    setrented(rowData.rented)
    setstock(rowData.stock)
    setdescription(rowData.description)
    setimage({icon:'',fileIcon:`${ServerURL}/images/${rowData.image}`})
    // setCategoryid(rowData.categoryid);
    // setCategoryName(rowData.name);
    // setDescription(rowData.description);
    setOpen(true);
  };

  // const handleDelete = async (oldData) => {
  //   await postData(`consoleproduct/delete/${oldData.productid}`);
  // };

  const handleIcon=(event)=>{
    setimage({icon:event.target.files[0],fileIcon:URL.createObjectURL(event.target.files[0])})
  }

  const handleSubmit=async()=>{
  const formData = new FormData();
  formData.append('productid',productid);
  formData.append('console_type_id',consoleTypeId)
  formData.append('productname',productName)
  formData.append('model',model)
  formData.append('price',price)
  formData.append('offer',offer)
  formData.append('offer_type',offerType)
  formData.append('rented',rented)
  formData.append('stock',stock)
  formData.append('description',description)
  formData.append('image',image.icon)
  console.log(image.icon);
  

  var  config = {headers:{'content-type':'multipart/form-data'}}
  console.log('form')
  var result = await postDataAndImage(`consoleproduct/update/${productid}`,formData,config)

  fetchData();
  handleClose();

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

  }

  const editDialog=()=>{
    return(
    <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Console Product Registor [Edit Product]"}</DialogTitle>
            <DialogContent>
            <div class="maincontainer">
        {/* <h1 className="text-center p-4"> Console Product</h1> */}
           {/* <form onSubmit={handleSubmit()}> */}
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Console Type Id</label>
      <input type="text" class="form-control" id="validationServer01" required
      onChange={(event)=>setconsoleTypeId(event.target.value)}
      value={consoleTypeId}
      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Product Name</label>
      <input type="text" class="form-control" id="validationServer02"  required
            onChange={(event)=>setproductName(event.target.value)}
            value={productName}

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
       value={model}
      />
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer04">Price</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
      onChange={(event)=>setprice(event.target.value)} value={price}
      />

      <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer05">Offer</label>
      <input type="text" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
            onChange={(event)=>setoffer(event.target.value)}
            value={offer}

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
          value={offerType}
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
      value={rented}
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
        value={stock}
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
            value={description}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
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
    
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>              
            </DialogActions>
          </Dialog>
    
    
    )
    
    
    }





  // const renderEditForm = () => {
  //   const style = {
  //     width: 600,
  //     padding: 16,
  //     borderRadius: 5,
  //     boxShadow: "0 0 10px -1px #ccc",
  //   };
  //   return (
  //     <div style={style}>
  //       <h3>Edit Category</h3>
  //       <div className="mt-3">
  //         <div className="row mb-3">
  //           <div className="col">
  //             <input
  //               type="text"
  //               placeholder="Name"
  //               value={categoryname}
  //               className="form-control"
  //               onChange={(e) => setCategoryName(e.target.value)}
  //             />
  //           </div>
  //         </div>
  //         <div className="row mb-3">
  //           <div className="col">
  //             <textarea
  //               rows="5"
  //               value={description}
  //               placeholder="Description"
  //               className="form-control"
  //               onChange={(e) => setDescription(e.target.value)}
  //             ></textarea>
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col">
  //             <button
  //               onClick={handleSubmit}
  //               className="btn btn-primary btn-block btn-sm"
  //             >
  //               Submit
  //             </button>
  //           </div>
  //           <div className="col">
  //             <button
  //               onClick={handleClose}
  //               className="btn btn-primary btn-block btn-sm"
  //             >
  //               Close
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <MaterialTable
        title="Console Products"
        columns={columns.column}
        data={data}
        options={{
          headerStyle: {
            backgroundColor: "#003399",
            color: "#FFF",
          },
          actionsCellStyle: {
            padding: "0 20px",
          },
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => {
              handleUpdate(rowData);
            },
          },
        ]}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                handleDelete(oldData);
                resolve();
              }, 1000);
            }),
        }}
      />
      {/* <Dialog
        // fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {renderEditForm()}
      </Dialog> */}
      {editDialog()}
    </>
  );
}

const style = {
  maxWidth: "95%",
  margin: "20px auto",
  borderRadius: 5,
  boxShadow: "0 0 10px -1px #ccc",
};

// const CategoryDisplay = (props) => {
//   return <div style={style}>{Editable()}</div>;
// };


