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
                                Create your Education Platform in a few minutes and clicks.
                            </p>
                            <div data-aos="fade-up" data-aos-delay={100}>
                                <a
                                    href="/Contact-us"
                                    className="btn smoothscroll btn-primary mr-2 mb-2"
                                >
                                    Request Demo
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
                            <h2 className="section-title mb-3">learnings</h2>
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
                                <h3 className="h3 mb-4 text-black">For quality education for everyone</h3> 
                            </div>
                            <div className="mb-4">
                                <ul className="list-unstyled ul-check success">
                                    <li>
                                        Seamlessly Create the courses and engage with users/learners
                </li>
                                    <li>
                                        Build on technologies trusted by Stanford, Microsoft and other
                                        elite organizations
                </li>
                                    <li>
                                        Enable online campuses, instructor-led courses, degree
                                        programs, and self-paced courses
                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2
                                className="section-title mb-3"
                                data-aos="fade-up"
                                data-aos-delay
                            >
                                How It works
            </h2>
                            <p className="lead" data-aos="fade-up" data-aos-delay={100}>
                                Learnings app has 3 parts. 1. For <b>Learners</b> to start
              learning. 2. For <b>Educators</b> to create and analyse courses.3.
              For <b>Admin</b>.
            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-5" data-aos="fade-up" data-aos-delay>
                            <div className="owl-carousel slide-one-item-alt">
                                <img
                                    src="./images/welcomepage.png"
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <img
                                    src="./images/createcourse.png"
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <img
                                    src="./images/addQuestion.png"
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <img
                                    src="./images/Config-portal.png"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="custom-direction">
                                <a href="#" className="custom-prev">
                                    <span>
                                        <span className="icon-keyboard_backspace" />
                                    </span>
                                </a>
                                <a href="#" className="custom-next">
                                    <span>
                                        <span className="icon-keyboard_backspace" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="site-section border-bottom bg-light"
                id="services-section"
            >
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade">
                            <h2 className="section-title mb-3">Features</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                            <div className="unit-4">
                                <div className="unit-4-icon mr-4">
                                    <span className="text-primary flaticon-startup" />
                                </div>
                                <div>
                                    <h3>Rich User Experience</h3>
                                    <p>
                                        Beautiful customizable themes, Interactive content with
                                        adaptive video streaming
                </p>
                                    {/* <p><a href="#">Learn More</a></p> */}
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
                                    <h3>Intelligent Analysis</h3>
                                    <p>
                                        Dashboards with near real-time data analysis, Insights for
                                        learning researchers and instructors
                </p>
                                    {/* <p><a href="#">Learn More</a></p> */}
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
                                    <h3>Extensible and inclusive</h3>
                                    <p>Customizable, Easy to use and unleash feature of cloud</p>
                                    {/* <p><a href="#">Learn More</a></p> */}
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
                                    <h3>Empower learners and instructors</h3>
                                    <p>
                                        Interactive forums and discussion boards, Advanced learner and
                                        Instructor dashboards
                </p>
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
                                    <h3>Cross-device / cross-platform</h3>
                                    <p>
                                        Works on any device, Seamlessly integrate with third-party
                                        tools and extensions such as Salesforce
                </p>
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
