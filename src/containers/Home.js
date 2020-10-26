import React, { Fragment } from 'react';

import AboutServiceAndPrice from './AboutServiceAndPrice';

// Component
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = (props) => {
    return (
        <Fragment>
            <Header/>
             <section className="home-content">
                <div className="container">
                    <div className="sub-heading">
                        <h1>안녕하세요 <br/><span>GEMFACTORY입니다</span></h1>
                        <a href="#" className="btn">Get Start</a>
                    </div>
                    <AboutServiceAndPrice title="About Service"/>
                    <AboutServiceAndPrice title="Price"/>
                </div>
            </section>
            <Footer/>
        </Fragment>
    )
}

export default Home