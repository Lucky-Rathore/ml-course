import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-5">
                      <h2 className="footer-heading mb-4">About Us</h2>
                      <p>
                        We are Bangalore based Startup. We love technology and
                        pursuing social impact with the help of ed-tech. We love to
                        talk about ideas and feedback. Please feel free to reach us to
                        know more about us.
                </p>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <h2 className="footer-heading mb-4">Quick Links</h2>
                      <ul className="list-unstyled">
                        <li><a href="/" className="smoothscroll">About Us</a></li>
                        <li><a href="/Faq" className="smoothscroll">FAQ</a></li>
                        <li><a href="/Pricing" className="smoothscroll">Pricing</a></li>
                        <li><a href="/Contact-us" className="smoothscroll">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                    <p style={{ fontSize: ".5rem" }}>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                      <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                </a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
           
    );
}

export default Footer;
