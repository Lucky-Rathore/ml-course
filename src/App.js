import React, { Fragment } from 'react';
import './App.css';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Header from './component/Header';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <div>
      <div>
        <div id="overlayer" />
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>

          <HashRouter basename='/'>
            <Header></Header>
            <Fragment>
              <ScrollToTop />
              <Switch>
                <Route path="/apply-now" component={Contact} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/Curriculum" component={Pricing} />
                <Route path="/" component={Home} />
              </Switch>
            </Fragment>
          </HashRouter>
          <Footer></Footer>
        </div>
      </div>

    </div>
  );
}

export default App;
