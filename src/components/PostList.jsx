import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    return (
        <div className="postList">
            <h1 className={"postList__title"}>{title}</h1>
            {
                posts.map((post, index) => {
                    return <PostItem
                        remove={remove}
                        number={index+1}
                        post={post}
                        id={Math.trunc(Math.random()*1000000000)}
                        key={Math.trunc(Math.random()*1000000000)}
                    />
                })
            }
        </div>
    );
};

export default PostList;