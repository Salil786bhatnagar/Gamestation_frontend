import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/index';
export default function Monthrend_plan() {
    return (
        <>
        <Header/>
        <div id="mainMontPlan">
           <div class="alert alert-success showContain"  role="alert" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                <h4 class="alert-heading">Alright!</h4>
                <p id="p1">Let’s talk about commitments..</p>
                <hr id="hr"/>
                <p class="mb-0">Get an exclusive discount by committing to a longer period</p>
            </div> 
            <div class="row" style={{ margin: 0, padding:0, width: '90%', overflow: 'hidden'}}>
                    <div class="col-md-6">
                        <div>
                            <p id="showp1">Playstation 4 Slim</p>
                            <h5 id="showh5">Monthly</h5>
                        </div>  
                        <div id="showImg">
                        <img src="/images/PS4.jpg" style={{height: 'auto', maxWidth:'50%', verticalAlign:'top'}}/>
                        </div>
                        <p id="showp">
                         Please Select the duration of your rental plan for PS4 Slim
                        </p>
                    </div>
                    <div class="col-md-6">
                            <div class="row">
                                    <div class="col-md-6">
                                        <div class="vc_general vc_cta3 vc_cta3-style-custom vc_cta3-shape-rounded vc_cta3-align-left vc_cta3-icon-size-md vc_cta3-actions-bottom" style={{backgroundColor:'#8444bc'}}>
                                            <div class="vc_cta3_content-container" id="showContain1">
                                                <div class="vc_cta3-content"><header class="vc_cta3-content-header">
                                                    <h2 style={{color:'#ffffff'}}>1 Month</h2><h4 style={{color:'#ffffff'}}>INR 2450/month</h4>
                                                    </header>
                                                </div>
                                                    <div class="vc_cta3-actions">
                                                    <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                                    <a id="monthPlanchoose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="vc_general vc_cta3 vc_cta3-style-custom vc_cta3-shape-rounded vc_cta3-align-left vc_cta3-icon-size-md vc_cta3-actions-bottom" style={{backgroundColor:'#8444bc'}}>
                                                <div class="vc_cta3_content-container" id="showContain1">
                                                    <div class="vc_cta3-content"><header class="vc_cta3-content-header">
                                                        <h2 style={{color:'#ffffff'}}>3 Months</h2><h4 style={{color:'#ffffff'}}>INR 1950/month</h4>
                                                        </header>
                                                    </div>
                                                        <div class="vc_cta3-actions">
                                                        <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                                        <a id="monthPlanchoose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                              </div>    
                       <div>
                           <div id="showspacing">

                           </div>
                           <div class="row">
                            <div class="col-md-6">
                                <div class="vc_general vc_cta3 vc_cta3-style-custom vc_cta3-shape-rounded vc_cta3-align-left vc_cta3-icon-size-md vc_cta3-actions-bottom" style={{backgroundColor:'#8444bc'}}>
                                                    <div class="vc_cta3_content-container" id="showContain1">
                                                        <div class="vc_cta3-content"><header class="vc_cta3-content-header">
                                                            <h2 style={{color:'#ffffff'}}>2 Months</h2><h4 style={{color:'#ffffff'}}>INR 1950/month</h4>
                                                            </header>
                                                        </div>
                                                            <div class="vc_cta3-actions">
                                                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                                            <a id="monthPlanchoose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                        
                            </div>
                            <div class="col-md-6">
                            <div class="vc_general vc_cta3 vc_cta3-style-custom vc_cta3-shape-rounded vc_cta3-align-left vc_cta3-icon-size-md vc_cta3-actions-bottom" style={{backgroundColor:'#8444bc'}}>
                                                    <div class="vc_cta3_content-container" id="showContain1">
                                                        <div class="vc_cta3-content"><header class="vc_cta3-content-header">
                                                            <h2 style={{color:'#ffffff'}}>5 Months</h2><h4 style={{color:'#ffffff'}}>INR 1800/month</h4>
                                                            </header>
                                                        </div>
                                                            <div class="vc_cta3-actions">
                                                            <div class="vc_btn3-container vc_btn3-center responsive_js_composer_custom_css_495954661">
                                                            <a id="monthPlanchoose1">Choose <i class="vc_btn3-icon entypo-icon entypo-icon-right-thin"></i></a>
                                                </div>
                                         </div>
                                    </div>
                                </div>
                        
                            </div>
                         </div>   
                       </div>
                    </div>
                 
             </div> 
            </div> 
            <Footer/>
        </>
    )
}
