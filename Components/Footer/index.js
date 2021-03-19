import React from 'react';
import styles from './style.module.css';

export default function Footer() {
    return (
        <div className={styles.mainContainer}>
            {/* <img src="https://ploogl.com/wp-content/uploads/2020/07/footer_6ba6095704f928b6d80db7325ec985d5.jpg" /> */}
            <div className="row">
            <div className="col-md-4">
               <p style={{fontSize:'24px'}}> About Us </p>
               <img style={{margin:'50px 0 0 0'}} src="ploogle_image.png" />
               <div className={styles.itemSpacing}>The Easiest way to game</div>
               <div className={styles.itemSpacing}>+ 91 8929232399</div><br/>
               <p>meet@ploogle.com</p>

            </div>
            <div className="col-md-4">
               <ul className={styles.linehight}> <p style={{fontSize:'24px'}}>Our Policies</p>
               <li>Privacy Policy</li>
               <li>Terms & Conditions </li>
               <li>Payment Disclaimer</li>
               <li>Rental Agreement </li>    
                   
                </ul>

            </div>
            <div className="col-md-4" style={{fontSize:'24px'}}>
                <p> Discounts & Offers </p>
                <div className={styles.itemSpacing}>
                     Get up to 50% off by staying updated with our exclusive offers and upcoming deals.
                </div>
                <div className={styles.itemSpacing}>
                    <span style={{fontSize:'20px'}}>&#9993;</span>
                    <input type='text'  placeholder='email @ddress..' className={styles.emailInput}/>
                    <span style={{fontSize:'34px'}}>&#8594;</span>
                </div>
                <div>
                 <button className={styles.circlebtn}><i class="fa fa-facebook"></i></button>
                    <button className={styles.circlebtn}>                    
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                 </button>
                    <button className={styles.circlebtn}>&#8472;</button>
                    <button className={styles.circlebtn}><i class="fa fa-wifi" aria-hidden="true"></i></button>

                </div>
             </div>      
</div>          
        </div>
    )
}
