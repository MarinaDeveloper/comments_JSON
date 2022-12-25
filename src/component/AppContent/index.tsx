import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from 'component/Header';
import Footer from 'component/Footer';

import MainPage, {routeMain as routeMainPage} from "pages/MainPage";
import PostDetail, {routeMain as routePostDetail} from "pages/PostDetail";
import PostListPage, {routeMain as routePostListPage} from "pages/PostListPage";

import './styles.scss';

const AppContent = () => {
    return (
        <div className='main_wrapper'>
            <Header />
            <main className='container'>
                <Routes>
                    <Route path={routeMainPage()} element={<MainPage />}/>
                    <Route path={routePostListPage()} element={<PostListPage />}/>
                    <Route path={routePostDetail()} element={<PostDetail />}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default AppContent;