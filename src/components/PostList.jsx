import React, {useState} from 'react';
import MyCard from "./UI/MyCard/MyCard";

const PostList = ({posts, remove, edit, fetchPosts, loading}) => {
    function getId() {
        return Math.trunc(Math.random() * 1000000000)
    }

    return (
        <div className="postList">
            {posts.length
                ? posts.map((post) => {
                    return <MyCard
                        loading={loading}
                        fetchPosts={fetchPosts}
                        edit={edit}
                        remove={remove}
                        post={post}
                        id={getId()}
                        key={getId()}/>
                })
                : <h1>Cats not found!</h1>
            }
        </div>
    );
};

export default PostList;