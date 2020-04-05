import React, { Component } from "react";
import axios from 'axios';

export default class Faq extends Component {
    constructor(props) {
        super(props);

        
    }


    componentWillMount() {

    }

    componentWillUnmount() {

    }

    componentDidMount() {
        
    }
    //<p>Country Name: {this.state.countryName}</p>    
    render() {
        return (
            <div> 
                <div
                    className="site-blocks-cover overlay"
                    style={{ backgroundImage: "url(images/hero_2.jpg)" }}
                    data-aos="fade"
                    id="home-section"
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-8 mt-lg-5 text-center">
                                <h1 data-aos="fade-up">
                                Frequently Ask Questions
                                </h1>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <section className="site-section bg-light" id="pricing-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center" data-aos="fade-up">
                                <h2 className="section-title mb-3"></h2>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">Do you have any hidden fees?</h3>
                                    <p>No, we don't have any hidden fee. Customer only need to whats is
                                        mention above.</p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">What about the security of user data?</h3>
                                    <p>
                                        We understand security is a big concern that's why we take it
                                        very seriously and incorporate with best practice like HTTPS,
                                        SSL, VPN etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
                                    <p>Yes, we provide all popular payment option.</p>
                                </div>
                                <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="text-black h4 mb-4">What available is refund period?</h3>
                                    <p>With in 7 days. The refund process takes 1-2 weeks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}



