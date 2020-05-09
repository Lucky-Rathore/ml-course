import React from 'react';

function Home() {
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
                            <h1 className="text-uppercase" data-aos="fade-up">
                                Welcome{" "}
                            </h1>
                            <p className="mb-5 desc" data-aos="fade-up" data-aos-delay={100}>
                                Job Oriented Machine Learning Course from Basic to Advance.
                            </p>
                            <div data-aos="fade-up" data-aos-delay={100}>
                                <a
                                    href="/#/Contact-us"
                                    className="btn smoothscroll btn-primary mr-2 mb-2"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#about-section" className="mouse smoothscroll">
                    <span className="mouse-icon">
                        <span className="mouse-wheel" />
                    </span>
                </a>
            </div>
            <div className="site-section cta-big-image" id="about-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade">
                            <h2 className="section-title mb-3">Key Highlights</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay>
                            <figure className="circle-bg">
                                <img src="images/hero_1.jpg" alt="Image" className="img-fluid" />
                            </figure>
                        </div>
                        <div
                            className="col-lg-5 ml-auto"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="mb-4">
                                <h3 className="h3 mb-4 text-black">Top Skills You Will Learn</h3>
                            </div>
                            <div className="mb-4">
                                <ul className="list-unstyled ul-check success">
                                    <li>Master Python & Machine Learning</li>
                                    <li>Master Data Processing</li>
                                    <li>Make robust Machine Learning models</li>
                                    <li>Handle specific topics like NLP and Deep Learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section
                className="site-section border-bottom bg-light"
                id="services-section"
            >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade">
                            <h2 className="section-title mb-3">Key Highlights</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-startup" />
                                </div>
                                <div>                                 
                                    <h4>Timely Doubt Resolution</h4>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-graphic-design" />
                                </div>
                                <div>
                                    <h4>Designed for Working Professionals</h4>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                            data-aos="fade-up"
                            data-aos-delay
                        >
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-idea" />
                                </div>
                                <div>
                                    <h4>Case Studies and Assignments</h4>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-smartphone" />
                                </div>
                                <div>
                                    <h4>Practical Hands-on Capstone Projects</h4>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-head" />
                                </div>
                                <div>
                                    <h5>Discussion Board</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;
