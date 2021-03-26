import React,{useState , useEffect} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import {getData,postData,postDataAndImage,deleteDataAxios,ServerURL} from '../../FetchServices';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link'


export default function Rent_month() {

  const [getList, setList] = useState([]);
  // const [refresh, setrefresh] = useState();
  const dispatch = useDispatch();


  const handleAddConsoleTypeId=(item)=>{
    console.log('sssssssssssssssssssss',{item})
    dispatch({
      type: 'Add_ConsoleId',
      payload: [item.console_type_id,item.console_type_id]
    })
    console.log();
    
    // setrefresh(item)
  }


  const fetchData=async()=>{
    var list = await getData('consoletype/display') ;
    console.log('agyayayayayayayaaaaaaa',list)
    setList(list)
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
                                <div class="wpb_wrapper"><h4 style={{textAlign:'center'}}>{item.type}</h4>
                                <p style={{textAlign: 'center'}}>{item.description}</p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>Starts at ₹ 1800/month</strong></p>
                                </div>
                              </div>
                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                            <Link href={{
                                pathname: "/Monthplan/MonthConosleProduct",
                                query: { id: item.console_type_id }
                                }}>
                            <button id="choose1" onClick={()=>handleAddConsoleTypeId(item)}>Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></button>
               </Link>
                                  
                                  {/* {renderItems()} query: { id: "test" }, */}
                            </div>
                    </div>
             </div>
        </>
      )
    }))
  }


  useEffect(()=>{
    fetchData()
  },[])


    return (
        <>
        <Header />
        <div id="rentmonthId">
            <div class="alert alert-success showContain"  role="alert" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                <h4 class="alert-heading">Hello, Welcome</h4>
                <p id="p1">Looking to Rent a Gaming Console?</p>
                <hr id="hr"/>
                <p class="mb-0">Start by choosing from the available platforms</p>
               
            </div>

            <div class="row" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
             
             {fillItems()}
             
            </div>
            </div>
            <Footer/>
        </>
    )
}
