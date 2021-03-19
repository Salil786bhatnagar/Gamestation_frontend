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

  const cart = useSelector(state=>state.cart);
  const count = useSelector(state=>state.count);
  const cartitems = Object.values(cart);
  
  console.log(count)
  const length = Object.keys(cart).length
  

  const renderItems = () => {
    return (
      cartitems.map(item => 
        {
          return (<><h5>{item.type}</h5>
          <img src={`${ServerURL}/images/${item.image}`} width={100} height={100}/>
          <p>{item.description}</p>
          <hr />
          </>)
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
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
    <h3>  Your cart </h3>
          
      <Divider />
     {renderItems()}
    
    </div>
  );
    return (
            <> 
            
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark showNav">
                <a class="navbar-brand" href="#">
                <img style={{width:'160px'}} alt="Ploogl™" src="https://ploogl.com/wp-content/uploads/2020/09/ploogl-logo.png" class="_rw"/>
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
                                  <ShoppingCartIcon style={{color:'#fff'}}/>
                               </Badge>
                                {/* <i class="fa fa-shopping-cart" aria-hidden="true" style={{width:'200px',height:'200px'}}></i> */}
                                </a>  
                                </Button>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                                </React.Fragment>
                            ))}
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">SingUp</a>
                        </li>
                        </ul>
                    </span>
                </div>
                </nav>
        
            </>
   )
}
