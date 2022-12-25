import React from 'react';
import { NavLink } from "react-router-dom";

import {routeMain as routeMainPage} from "pages/MainPage";
import {routeMain as routePostListPage} from "pages/PostListPage";

import './styles.scss';

const Header = () => {
    return (
        <header className="main_header">
            <div className='container'>
                <div className='block_header'>
                    <div className="title">The Post</div>
                    <nav>
                    <NavLink to={routeMainPage()}>
                        Home
                    </NavLink>
                    <NavLink to={routePostListPage()}>
                        Posts
                    </NavLink>
                    </nav>
                </div>
            </div>
      </header>
    );
}

export default Header;