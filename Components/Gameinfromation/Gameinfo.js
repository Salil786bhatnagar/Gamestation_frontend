import React from 'react'
import styles from './view.module.css'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header';
import Link from 'next/link'


const viewStyle={
    leftImg:{
        width: '80%',
        height: '406px',
        position: 'relative',
        borderRadius: '8px',
        padding:'20px 20px 20px 20px',
        margin: '90px 0px 0px 0px',
        
      },
      
    //   paper:{
    //     minHeight: '700px',
    //     backgroundColor: '#8444BC',
    //     position:'relative',
    //     top:'3.8%',
    //     margin:'50px 0 0 0',
    //   },
    
}
export default function Gameinfo() {
    return (
        <>
        <div id="gameinfoId">
          <div class="container-fluid" style={{ margin: 0, padding:0, width: '100%', overflow: 'hidden'}}>   
            <div class="row">
                <div class="col-md-12"> 
                 <div id="paper">   
                  <div class="row">
                    <div class="col-md-6">
                      <div style={viewStyle.leftImgbackground}>   
                        <img src="images/r2.png" style={viewStyle.leftImg}/>  
                        
                     </div> 
                    </div>
                    <div class="col-md-6">
                      <div className={styles.right} id="showRight">
                        <p id="des1">Boring Day? Rent a Gaming Console</p>
                          <ul>
                              <li>No Security Deposit</li>
                              <li>Free Maintenance</li>
                              <li>4 Hrs Delivery</li>
                          </ul>
                      </div>
                      <div>
                       <div class="row">
                         <div class="col-md-3">
                         <Link href="/Rentmonth/Rent_month">
                          <Button variant="contained" id="rendmonth"><img src="images/calendar.png" class="calenderImg"/>
                         
                           <a>&nbsp;&nbsp;Rent For a Month</a>
                         
                          </Button>
                          </Link>
                          </div>
                        
                         <div class="col-md-3">
                           <Button variant="contained" id="rendweek"><img src="images/shop.png" class="shopImg"/>&nbsp;&nbsp;Rent For a Week</Button>
                         </div>
                        </div>
                      </div>
                    </div>
                   </div>
                  <div class="row">
                     <div class="col-md-12">
                       <p id="work">How does it work?</p>
                      </div>
                      <div>
                      <div class="showMenu">      
                       <ul>
                         <li> 
                           <span> 
                            <img src="images/r.png" width='100px' height="100px"/> 
                           
                             <h4 style={{color:'#ffffff',textAlign:'center'}} >
                                <strong>Register</strong>
                              </h4>
                              <p style={{color: '#ffffff',textAlign:'center'}}>
                                with some basic details to start
                              </p>
                           </span>
                          </li>
                          <li> 
                           <span> 
                            <img src="images/b.png" width='100px' height="100px"/> 
                           
                             <h4 style={{color:'#ffffff'}}>
                                <strong>Build a pack</strong>
                              </h4>
                              <p style={{color: '#ffffff'}}>
                              by choosing based on your need
                              </p>
                           </span>
                          </li>

                          <li> 
                           <span> 
                            <img src="images/v.png" width='100px' height="100px"/> 
                           
                             <h4 style={{color:'#ffffff'}}>
                                <strong>Verify</strong>
                              </h4>
                              <p style={{color: '#ffffff'}}>
                              your identity by filling KYC details
                              </p>
                           </span>
                          </li>

                          <li> 
                           <span> 
                            <img src="images/rr.png" width='100px' height="100px"/> 
                           
                             <h4 style={{color:'#ffffff'}}>
                                <strong>Renew/Return</strong>
                              </h4>
                              <p style={{color: '#ffffff'}}>
                              based on your experience
                              </p>
                             </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                   </div>
                   </div> 
                  </div>
                </div>
              </div>
            </div>    
        </>
    )
}
