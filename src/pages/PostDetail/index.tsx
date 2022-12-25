import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import routeMain from "./routes";

import getPostID from 'services/getPostID';

import { IPostItem } from 'types/IPostItem';
import { ID } from 'types/ID';

import './styles.scss';

const PostDetail = () => {
    const {id} = useParams<ID>();
    const [post, setPost] = useState<IPostItem | null>(null);

    useEffect(() => {
        getPostID(id).then(response => {
            setPost(response.data);
        })
    }, [id])

    return (
        <section className='post_detail'>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ): <></>}
        </section>
    );
}

export {routeMain};

export default PostDetail;