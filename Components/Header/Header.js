import React, { useState,useEffect } from 'react'
import style from './header.module.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { ServerURL } from '../../FetchServices';
import Link from 'next/link';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
export default function Header() {
  
  const classes = useStyles();
  const [tootal, setTotal] = useState('')

  const cart = useSelector(state=>state.cart);
  console.log('cart',cart);
  
  const count = useSelector(state=>state.count);
  const cartitems = Object.values(cart);
  console.log("itemsssssssss",cartitems.length);


  ////Total...
  const total=cartitems.reduce((a,b)=>a+b.total,0)
  console.log("totalllll",total);
   
  
  console.log(count)
  const length = Object.keys(cart).length
  console.log('total items in cart length',length)


  /// Total Saving...

  var totalSaving = cartitems.reduce((a,b)=>a+b.saving,0)
  console.log('savingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggYY',totalSaving)

  // function calculateSaving(a,b){
  //   // var saving1 = b.rent - b.offer ;
  //   var saving2 = b.price - b.offerprice ;
  //   return a + saving2 ;
  // }



  const renderItems = () => {
    return (
      cartitems.map(item => 
        {
          var save1 = item.rent - item.offer ;
          var save2 = item.price - item.offerprice ;

          var saveTotal1 =0;
          var saveTotal2 =0;

          saveTotal1 +=parseFloat(save1);
          saveTotal2 +=parseFloat(save2) 

          console.log('saveTotal11111111',saveTotal1)
          console.log('saveTotal22222222',saveTotal2)

          return (<><h5>{item.type}</h5>
     <div id="cartManage" class="row">
          {/* <img src={`${ServerURL}/images/${item.poster}`} width={100} height={100}/> */}
          <div id="imgLeft" class="col-md-6">
          <img src={`${ServerURL}/images/${item.image || item.poster}`} width={100} height={100} id="img"/>
          </div>
          <div class="col-md-6">    
              {/* product */}
            { item.image?(<>
           {item.productname ?(<p><b>Product Name:</b>{item.productname}</p>):''}
            { item.model?(<p><b>Model:</b>{item.model}</p>):(<p><b>Model:</b>{item.model_name}</p>) }
          <p><b>M.R.P:</b>{item.price}</p>
          <p><b>Rentel Price:</b><s>{item.rent}</s></p> 
          {/* <p><b>Rented:</b>{item.rented}</p> */}
          <p><b>Offer Price:</b>{item.offer}</p>
          <p style={{ color: 'green'}}><b>You Save:</b>{save1}</p>

                {/* games */}
          </>):  
          (<> 
          <p><b>Game Name:</b>{item.name}</p>
          <p><b>{item.model}</b></p>
          <p><b>Price:</b><s>{item.price}</s></p>
          {/* <p><b>Rented:</b>{item.rented}</p> */}
          <p><b>Offer Price:</b>{item.offerprice}</p>
          <p style={{ color: 'green'}}><b>You Save:</b>{save2}</p>

        </>  )
          }
          <Divider />
          {/* <hr /> */}
          </div>
       </div>
          </>
          
          )

        }         
        
      )      

    )
    
  }

  

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
<div> 
    <div
    style={{margin: '0 0 240px 0'}}
      id="cartshowId"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      // id="cartshowId"
    >
     
    <h3 style={{position:'fixed',width:412, right: 18, textAlign: 'center', zIndex: 2}} id="cartName">  Your cart </h3>
        {/* <h3> Total Amount: {`${TotalAmount}`}</h3> */}
      <div class='row'>
        <div class="col-md-6">
         <h4> Order Summary&nbsp;: </h4>
        </div>
        <div class="col-md-6">
        <h4> item(s)&nbsp;{count} </h4>
        </div>
      </div>
      <Divider />
      {renderItems()}
   
      <p id='total'  style={{position:'fixed',bottom:-20,width:410, right: 18}}>
        <center><div><i>Payment Details</i></div></center>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>Total:</div>
        <Divider />
        <div>&#x20B9;&nbsp;{total}</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>Savings:</div>
        <div>&#x20B9;&nbsp;{totalSaving}</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>Shipping Charge:</div>
        <div>&#x20B9;&nbsp;{352}</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>Grand Total:</div>
        <div>&#x20B9;&nbsp;{total+352}</div>
        </div>

        <div  ><hr/>
     <div id="managetotalId">
      <div class="container"> 
          <div class="row">
            {/* <div class="col-sm">
              <span id="grandtotalId">Grand Total</span>:{total}
            </div> */}
            <div class="col-sm-12">
              <div>
              <Link href={{pathname:"/Monthplan/CheckOut",                                  
                                           }}>
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" 
                id="proceedId">
                  Proceed  
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
     </div> 
     </div>
     
     
      </p> 
     {/* <div id="manageCartId">
      <div class="container">
        
         <div class="row">
            <div class="col-sm-6">
            <div>Total:</div>
            <div>Savings:</div>
            <div>Shipping Charge:</div>
            <br/>
            <div>Grand Total:</div>
            </div>
            <div id="showrowId">  
            <div class="col-sm-6">
             <div>{total}</div>
             <div>{totalSaving}</div>
             <div>{352}</div>
             <br/>
             <div>{total+totalSaving}</div>
            </div>
         </div>
         </div>
      </div> */}
      </div> 

     
    

     
    </div>
    
  );
    return (
            <> 
            
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark showNav">
                <a class="navbar-brand" href="#" style={{}}>Gamestation
                {/* <img style={{width:'160px'}} alt="Ploogl™" src="https://ploogl.com/wp-content/uploads/2020/09/ploogl-logo.png" class="_rw"/> */}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll showHeaderNav">
                    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight:'100px'}}>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            STORE
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">BLOGS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">REGISTER</a>
                        </li>
                    </ul>
                     
                    <form class="d-flex" id="fromCard">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <span id="card">
               
                        <ul>
                        <li class="nav-item">  
                          {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                {/* <img src="/images/carticon.jpg" /> */}
                                <Badge badgeContent={count} color="primary">
                                  <ShoppingCartIcon style={{color:'#fff'}} />
                               </Badge>
                                {/* <i class="fa fa-shopping-cart" aria-hidden="true" style={{width:'200px',height:'200px'}}></i> */}
                                </a>  
                                </Button>
                               
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}  >
                                    {list(anchor)}
                                </Drawer>
                                
                                </React.Fragment>
                            ))}
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign Up</a>
                        </li>
                        </ul>
                    </span>
                </div>
                </nav>
        
            </>
   )
}
