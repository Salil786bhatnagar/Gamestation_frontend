import React,{useState , useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import {getData,postData,postDataAndImage,deleteDataAxios,ServerURL} from '../../FetchServices';
// import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import { useRouter } from "next/router"

export default function MonthConsoleProduct() {
    const router = useRouter()
  const [getList, setList] = useState([]);
//   const [getId, setId] = useState('');
  // const [refresh, setrefresh] = useState();
//   const dispatch = useDispatch();

//   var cart = useSelector(state=>state.cart);

//   console.log('.............................',Object.values(cart))

//   var cartitems = Object.values(cart)

//   const handleCart=(item)=>{
//     dispatch({
//       type: 'Add_Cart',
//       payload: [item.console_type_id, item]
//     })
//     // setrefresh(item)
//   }

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
  const fetchData=async(getId)=>{
    console.log('idddddddddddddddd',getId);
    var body = {console_type_id :getId}
    var list = await postData('consoleproduct/displaybyid',body) ;
    console.log('agyayayayayayayaaaaaaa',list)
    setList(list.result)
  }

  const fillItems=()=>{
    return(
    getList.map((item)=>{
      return(
        <>
             <div class='col-md-6'>
                    <div id="imgmonth1">
                        <img src={`${ServerURL}/images/${item.image}`}
                         style={{height: 'auto', maxWidth:'100%', verticalAlign:'top'}} />
                        </div>
                        <div id="mainbtn1">
                              <div class="wpb_text_column wpb_content_element  responsive_js_composer_custom_css_1951844264">
                                <div class="wpb_wrapper"><h4 style={{textAlign:'center'}}>{item.productname}</h4>
                                <p style={{textAlign: 'center'}}>{item.description}</p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>MRP Rs{item.price}</strong></p>
                                </div>
                              </div>
                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                            <Link href={{pathname:"/Monthplan/MonthProductGames",
                                           query : {id : item.productid}
                                           }}>
                                    <button id="choose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></button>
                             </Link>
                                  {/* {renderItems()} */}
                            </div>
                    </div>
             </div>
        </>
      )
    }))
  }

  const fetchId=()=>{
    const {id } = router.query ;
    var get_id=id;
    console.log('id',get_id)
    // setId(get_id)
    fetchData(id);

    return get_id ;
     
  } 

    


  useEffect(()=>{
    fetchId();    
    
    // fetchData(getId);
  },[])

    return (
        <>
        <Header />
            <div class="alert alert-success showContain"  role="alert" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                <h4 class="alert-heading"> PlayStation®4</h4>
                <p id="p1">With PS4, gaming becomes a lot more power packed. Ultra-fast processors, high-performance system, real-time game sharing, remote play and lots more makes it the ultimate companion device.</p>
                <hr id="hr"/>
                <p class="mb-0">Start by choosing from the available platforms</p>
               
            </div>

            <div class="row" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
          
             
             {fillItems()}
             
            </div>
            <Footer/>
        </>
    )
}
