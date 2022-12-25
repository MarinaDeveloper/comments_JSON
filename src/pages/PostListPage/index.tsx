import React, { useState, useEffect } from 'react';
import routeMain from "./routes";

import PostList from 'component/PostList';
import getPost from 'services/getPosts';

import './styles.scss';

const PostListPage = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        getPost().then(response => {
            setPostList(response.data)
        })
    }, [])

    return (
        <section className='post_list_page'>
            {postList.length > 0 && <PostList list={postList}/>}
        </section>
    );
}

export {routeMain};

export default PostListPage;