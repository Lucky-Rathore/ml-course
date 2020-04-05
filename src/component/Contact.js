import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

    constructor() {
        super();
        this.state = {
            showAlertBox: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox(event) {
        this.setState({
            showAlertBox: false
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let object = {};
        let data = new FormData(event.target).forEach((value, key) => { object[key] = value });
        var json = JSON.stringify(object);
        console.log(data);
        fetch('https://learningssaas.azurewebsites.net/api/Leads?code=FzL5HpxFh0vsyT0YYM52g1B7DeFT3t9u6mEAvCtylSxRTjSX6ied4Q==', {
            method: 'POST',
            body: json,
        });
        event.target.reset();
        this.setState({ showAlertBox: true });
    }

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
                                    Contact-us
                                </h1>
                                <div className="row mb-5">
                                <div className="col-md-4 text-center">
                                    <p className="mb-4">
                                        <span className="icon-room d-block h4 text-primary" />
                                        <span>B-902, Ajmera Infinity, Electronic City, Bangalore, India</span>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <p className="mb-4">
                                        <span className="icon-phone d-block h4 text-primary" />
                                        <a href="tel:+91 7769940498">+91 776940498</a>
                                    </p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <p className="mb-0">
                                        <span className="icon-mail_outline d-block h4 text-primary" />
                                        <a href="mailto:lucky@learningsapp.com">lucky@learningsapp.com</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>
                <section
                    className="site-section bg-light"
                    id="contact-section"
                    data-aos="fade"
                >
                    <div className="container">

                        <div className="row" id="contact-form">
                            <div className="col-md-12 mb-5">
                                <form onSubmit={this.handleSubmit} className="p-5 bg-white">
                                    <h2 className="h4 text-black mb-5">Write us</h2>
                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="FirstName" className="form-control" /></div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" name="LastName" className="form-control" /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="email" id="email" name="Email" className="form-control" required/></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="subject">Subject</label>
                                            <input type="subject" id="subject" name="Subject" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="message">Message</label>
                                            <textarea
                                                name="Message"
                                                id="message"
                                                cols={30}
                                                rows={7}
                                                className="form-control"
                                                placeholder="Write your notes or questions here..."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <button
                                                defaultValue="Send Message"
                                                className="btn btn-primary btn-md text-white"
                                            >Send</button>
                                        </div>
                                    </div>
                                    <div className="alertBox" style={{ display: this.state.showAlertBox ? 'block' : 'none' }}  >
                                        <span className="alertclosebtn" onClick={this.toggleBox}>×</span>
                                        <strong>Thank</strong> for contacting us. we will revert to you shortly.
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}




