import React, { Fragment } from 'react';

import { Button, Layout } from 'antd';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
            <section className="header">
                <div className="container">
                    <header>
                        <div className="branch">
                            <a href="">Gem Factory</a>
                        </div>
                        <ul className="menu">
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </header>
                </div>
            </section>
            )
}


export default Header