import React, { useState, useEffect} from 'react';
import routeMain from "./routes";

import { IPostItem } from 'types/IPostItem';
import PostList from "component/PostList";
import getPost from 'services/getPosts';

import './styles.scss';

const MainPage = () => {
    const [postList, setPostList] = useState<IPostItem[]>([]);

    useEffect(() => {
        getPost().then(response => {
            setPostList(response.data)
        })
    }, [])
    return (
        <section className='main_page'>
            {postList.length > 0 && 
                <PostList list={postList.slice(0,6)}/>
            }
        </section>
    );
}

export {routeMain};

export default MainPage;