import React from 'react';
import styles from './style.module.css';

export default function BatterThanEMI() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.upperContainer}>
                <h2 style={{padding:'100px 0'}}><b>Better than EMI</b></h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                
            <div className={styles.leftContainer}>
            <div style={{padding:'50px 0px 0px 30px' }}>
                     <img src={"flash.png"} alt="flash"/>
                   </div>
                   <div >
                     <h4 style={{margin:'50px 0 50px 20px',color:"#333",fontWeight:500}}> Our Rental plans</h4>
                      <ul>                          
                           <li className={styles.liSpacing}>No Commitment</li>
                           <li className={styles.liSpacing}>No Deposit</li>
                           <li className={styles.liSpacing}>Cancel Anytime</li>
                           <li className={styles.liSpacing}>Same Day Delivery</li>
                           <li className={styles.liSpacing}>No Investment Needed</li>
                      </ul>
                   </div>
                </div>
                <div className={styles.rightContainer}>
                   <div style={{padding:'50px 0px 0px 30px' }}>
                     <img src={"i.jpg"} alt="i"/>
                   </div>
                   <div className={styles.forSpacing} >
                     <h4 style={{margin:'40px 0 40px 20px',color:'#000'}}> EMI</h4>
                      <ul>                          
                           <li className={styles.liSpacing}>Minimum Commitment</li>
                           <li className={styles.liSpacing} >High-Interest rate</li>
                           <li className={styles.liSpacing}>Cannot Cancel</li>
                           <li className={styles.liSpacing}>2-3 Day Delivery</li>
                           <li className={styles.liSpacing}>Investment of INR 50k</li>
                      </ul>
                   </div>
            
                </div>
            </div>
        </div>
    )
}
