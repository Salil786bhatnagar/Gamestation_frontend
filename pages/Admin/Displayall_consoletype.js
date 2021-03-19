import { Dialog } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {getData,postData,postDataAndImage,deleteDataAxios,ServerURL} from '../../FetchServices';
import Swal from 'sweetalert2'
/**
 * @author
 * @function CategoryDisplay
 **/

 export default function Displayall_consoletype() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [getConsole_Id, setConsole_Id]= useState("")
  const [getType, setType] = useState("");
  const [getDescription, setDescription] = useState("")
  const [getImage, setImage]=useState({icon:'', file:''})
  const [getMessage, setMessage] = useState("")
  const [getColumns, setColumns] = useState({
    columns:[  
    { title: "Type", field: "type" },
    { title: "Description", field: "description" },
    { title: "Image", field: "image",
    render: (rowData) => (
        <div>
          <Avatar
            variant="rounded"
            src={`${ServerURL}/images/${rowData.image}`}
          />
        </div>
      ),
},
    ]
    });

  const fetchData = async () => {
    const result = await getData("consoletype/display");
    console.log("data",result);
    result.status && setData(result.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    // fetchData()
  };

  /* handle in icon*/
  const handleImage = (event) => {
    setImage({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };

  const handleUpdate = (rowData) => {
    setConsole_Id(rowData.console_type_id);
    setType(rowData.type);
    setDescription(rowData.description);
    setImage({ icon: `${ServerURL}/images/${rowData.image}`, file: "" });
    setOpen(true);
  };

  // const handleDelete = async (oldData) => {
  //   // let body = { getConsole_Id: oldData.console_type_id };
  //   await deleteDataAxios(`consoletype/delete/${oldData.getConsole_Id}`);
  // };
  const handleDelete = async (oldData) => {
    // console.log("oldDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",JSON.stringify(oldData))
      await deleteDataAxios(`consoletype/delete/${oldData.console_type_id}`);
  };


  const handleSubmit = async (e) => {
    
        var formData = new FormData()
            formData.append('console_type_id',getConsole_Id)
            formData.append('type',getType),
            formData.append('description',getDescription),
            formData.append('image',getImage.file)
            var config={header:{'content-type':'multipart/form-data'}}
            // var result = await postDataAndImage(`consoletype/update/${console_type_id}`, config)
            // console.log('result',result);
            var result = await postDataAndImage(`consoletype/update/${getConsole_Id}`,formData,config);
    fetchData();
    handleClose();

    if(result)
    { //alert("Record Submitted")
    setMessage('Record Updated')
    }
    else{
// alert('Fail to Submit Record')
    setMessage('Fail to Update Record')
    }

  };

  const renderEditForm = (e) => {
    const style = {
      width: 600,
      padding: 16,
      borderRadius: 5,
      boxShadow: "0 0 10px -1px #ccc",
    };
    return (
<div id="consoletype_formdilogbox"> 
           <div id="consoltypeheading">Console Type</div>
                <div class="form-row" >
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
                    <Avatar id="Aveterdilogbox" style={{width:60,height:60}} src={getImage.icon} />
                    </div>
                    </div>
                   {/* <button class="btn btn-primary" ></button> */}
                    <Button variant="contained" color="primary" disableElevation id="buttonSumit" onClick={()=>handleSubmit()}>
                    {/* <Button variant="contained" color="primary" onClick={()=>alert(getDescription)}> */}
                            Submit form
                    </Button>
                <div>
                  <br/>
                  <center><b>{getMessage}</b></center>
                </div>
                
           </div>
    );
  };

  return (
    <>
      <MaterialTable
        title="Consol Type Data"
        columns={getColumns.columns}
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
      <Dialog
        // fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {renderEditForm()}
      </Dialog>
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


