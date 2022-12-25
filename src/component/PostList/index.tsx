import React from 'react';
import PostItem from 'component/PostItem';

import { IPostItem } from 'types/IPostItem';

import './styles.scss';

interface IPostListParams {
    list: IPostItem[];
}

const PostList: React.FC<IPostListParams> = ({list}) => {
    return (
        <div className='post_list_block'>
            {list.map((post: IPostItem) => (
                <PostItem key={post.id} item={post} />
            ))}
        </div>
    );
}

export default PostList;