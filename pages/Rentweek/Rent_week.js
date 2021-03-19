import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
export default function Rent_month() {
    return (
        <>
            <Header />
            <div class="alert alert-success showContain"  role="alert" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                <h4 class="alert-heading">Hello, Welcome</h4>
                <p id="p1">Looking to Rent a Gaming Console?</p>
                <hr id="hr"/>
                <p class="mb-0">Start by choosing from the available platforms</p>
            </div>

            <div class="row" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
             <div class='col-md-6'>
                    <div id="imgmonth1">
                        <img src="/images/PS4.jpg" style={{height: 'auto', maxWidth:'100%', verticalAlign:'top'}} />
                        </div>
                        <div id="mainbtn1">
                              <div class="wpb_text_column wpb_content_element  responsive_js_composer_custom_css_1951844264">
                                <div class="wpb_wrapper"><h4 style={{textAlign:'center'}}>PS4 Slim</h4>
                                <p style={{textAlign: 'center'}}>High-end, Sleek &amp; Premium</p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>Starts at ₹ 700</strong></p>
                                </div>
                              </div>
                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                    <a id="choose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                            </div>
                    </div>
             </div>
              <div class='col-md-6'>
                  <div id="imgmonth2">
                   <img src="/images/xbox.jpg" style={{height: 'auto', maxWidth:'100%', verticalAlign:'top'}}/>
                   </div>
                   <div id="mainbtn1">
                              <div class="wpb_text_column wpb_content_element  responsive_js_composer_custom_css_1951844264">
                                <div class="wpb_wrapper"><h4 style={{textAlign:'center'}}>Xbox One</h4>
                                <p style={{textAlign: 'center'}}>Imaginative, optimal & fun</p>
                                <p style={{textAlign: 'center', color: '#8444bc'}}><strong>Starts at ₹ 700</strong></p>
                                </div>
                              </div>
                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                    <a id="choose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                            </div>
                    </div>
             </div>
            </div>
           <Footer/>
        </>
    )
}
