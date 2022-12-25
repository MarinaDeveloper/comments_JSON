import React from 'react';
import { Link } from "react-router-dom";

import { IPostItem } from 'types/IPostItem';

import './styles.scss';

interface IPostItemParams {
    item: IPostItem;
}

const PostItem: React.FC<IPostItemParams> = ({item}) => {
    return (
        <Link className='post_item' to={'/posts/' + item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </Link>
    );
}

export default PostItem;