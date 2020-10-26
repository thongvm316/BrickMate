import React, { Fragment } from 'react';

// Component
import Header from '../components/Header';

const Home = (props) => {
    console.log(props)
    return (
        <div className="about-service-price">
            <h1>{props.title}</h1>
            <div className="info">
                <div className="left">
                    <img src="https://via.placeholder.com/486x320" width="486" height="320" alt=""/>
                </div>
                <div className="right">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default Home