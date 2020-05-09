import React, { Component } from "react";
import axios from 'axios';

export default class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = this.state = {
            p1: '',
            p2: '',
            p3: ''
        };
    }

    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            if(data.country_code == "IN")
            {
                this.setState({
                    p1: "Rs. 2460",
                    p2: "Rs. 8,460",
                    p3: "Rs. 14,460"
                });
            }
            else
            {
                this.setState({
                    p1: "$ 290",
                    p2: "$ 690",
                    p3: "$ 1460"
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.getGeoInfo();
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
                                    Pricing
                                </h1>
                                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay={100}>
                                    Building great learning experience is just a step away
                </p>
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
                        <div className="row mb-5">
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay>
                                <div className="pricing">
                                    <h3 className="text-center text-black">Starter</h3>
                                    <div className="price text-center mb-4 ">
                                        <span>
                                            <span>{this.state.p1}</span> / month</span>
                                    </div>
                                    <ul className="list-unstyled ul-check success mb-5">
                                        <li>Course Learner &amp; Creator App</li>
                                        <li>Admin Console </li>
                                        <li>Analytics &amp; reporting</li>
                                        <li>Custom domain</li>
                                        <li>Support</li>
                                    </ul>
                                    <p className="text-center">
                                        <a href="/#/contact-us" className="btn btn-secondary">Buy Now</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                                <div className="pricing">
                                    <h3 className="text-center text-black">Suite</h3>
                                    <div className="price text-center mb-4 ">
                                        <span><span>{this.state.p2}</span> / month</span>
                                    </div>
                                    <p>Everything in Starter plus +</p>
                                    <ul className="list-unstyled ul-check success mb-5">
                                        <li>Ecommerce</li>
                                        <li>Third party auth</li>
                                        <li>Multilanguages</li>
                                        <li>premium support</li>
                                    </ul>
                                    <p className="text-center">
                                        <a href="/#/contact-us" className="btn btn-primary">Buy Now</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="pricing">
                                    <h3 className="text-center text-black">Premium Suites</h3>
                                    <div className="price text-center mb-4 ">
                                        <span><span>{this.state.p3}</span> / month</span>
                                    </div>
                                    <p>Everything in Suite plus +</p>
                                    <ul className="list-unstyled ul-check success mb-5">
                                        <li>VPN</li>
                                        <li>on premise</li>
                                        <li>Staging site</li>
                                        <li>Custom contracts and SLAs</li>
                                    </ul>
                                    <p className="text-center">
                                        <a href="/#/contact-us" className="btn btn-secondary">Buy Now</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                </section>
            </div>
        );
    }
}



