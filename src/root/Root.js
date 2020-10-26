import React from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';

// Component
import '../styles/App.css'

import {
    BrowserRouter as Router,
} from "react-router-dom";

const Root = (props) => { 
    return (
        <Router>
            <Routes />
        </Router>
    );
  };
  

const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
};

export default connect(mapStateToProps)(Root)