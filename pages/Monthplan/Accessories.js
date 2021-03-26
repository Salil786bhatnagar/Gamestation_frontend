import React,{useState , useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import {getData,postData,postDataAndImage,deleteDataAxios,ServerURL} from '../../FetchServices';
// import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import { useRouter } from "next/router";
import {useDispatch,useSelector} from 'react-redux';

export default function MonthConsoleProduct() {
    const router = useRouter()
  const [getList, setList] = useState([]);

  var ConsoleI = useSelector(state=>state.consoleType)
var ConsoleTypeId = Object.values(ConsoleI)
console.log('ConsoleTypeIddddddddddddddddddddddddddd',ConsoleTypeId);



//   const [getId, setId] = useState('');
  // const [refresh, setrefresh] = useState();
  const dispatch = useDispatch();

  // var cart = useSelector(state=>state.cart);

  // console.log('.............................',Object.values(cart))

  // var cartitems = Object.values(cart)

  const handleAccesories=(item)=>{
    let body={
      ...item,
      total:parseFloat(item.offer),
      saving:parseInt(item.rent - item.offer)

    }
    // console.log('model',model)
    dispatch({
      type: 'Add_Cart',
      payload: [item.accessoriesId, body]
    })
    // setrefresh(item)
  }

//   const renderItems = () => {
//     return (
//       cartitems.map(item => 
//         {
//           return (
//           <>
//           <p>{item}</p>
            
//             {/* <p>{item.description}</p> */}
//             </>
//             )
//         }  
//       )
//     )
//   }
  const fetchData=async(ConsoleTypeId)=>{
    console.log('ConsoleTypeIdidddddddddddddddd',ConsoleTypeId);
    var body = {'console_type_id':ConsoleTypeId}
    var list = await postData('accessories/displaybyid',body) ;
    console.log('agyayayayayayayaaaaaaa',list)
    setList(list)
    // console.log("ID",setList);
    
  }

  const fillItems=()=>{
    return(
    getList.map((item)=>{
      var save = item.rent - item.offer ;
      // console.log('item.')
      console.log('saveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',save)
      return(
        <>
             <div class='col-md-6'>
                    <div id="imgmonth1">
                        <img src={`${ServerURL}/images/${item.image}`}
                         style={{width:"100px",height:"100px" , verticalAlign:'top'}} />
                        </div>
                        <div id="mainbtn111">
                              <div class="wpb_text_column wpb_content_element  responsive_js_composer_custom_css_1951844264">
                                <div class="wpb_wrapper"><h4 style={{textAlign:'center'}}>{item.model_name}</h4>
                                <p style={{textAlign: 'center'}}>{item.description}</p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>MRP Rs{item.price}</strong></p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>Offer Price:{item.offer  }</strong></p>
                                <p style={{textAlign: 'center', color: 'green'}}>You Save:{save}</p>
                                </div>
                              </div>
                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                            
                                    <button id="choose111" onClick={()=>handleAccesories(item)}>Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></button>
                            
                                  {/* {renderItems()} */}
                            </div>
                    </div>
             </div>
        </>
      )
    }))
  }

  // const fetchId=()=>{
  //   const {id } = router.query ;
  //   var get_id=id;
  //   console.log('fetchidddddddddddddddddddddddddddddddddddddd',get_id)
  //   // setId(get_id)
  //   fetchData(id);

  //   return get_id ;
     
  // } 

    


  useEffect(()=>{
    // fetchId();    
    
    fetchData(ConsoleTypeId);
  },[])

    return (
        <>
        <Header />
        
        <div id="accessoriesId">

            <div class="alert alert-success showContain"  role="alert" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                <h4 class="alert-heading"> Accessories</h4>
                <p id="p1">With PS4, gaming becomes a lot more power packed. Ultra-fast processors, high-performance system, real-time game sharing, remote play and lots more makes it the ultimate companion device.</p>
                <hr id="hr"/>
                <p class="mb-0">Start by choosing from the available platforms</p>
               
            </div>

            <div class="row" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}} id="monthgameId">
          
             
             {fillItems()}
             
            </div>
            </div>
            <Footer/>
        </>
    )
}
