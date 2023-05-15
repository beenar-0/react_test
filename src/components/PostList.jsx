import React, {useState} from 'react';
import MyCard from "./UI/MyCard/MyCard";

const PostList = ({posts, remove, fetchPosts, loading, setEditingPost, setEditActive}) => {

    return (
        <div className="postList">
            {posts.length
                ? posts.map((post) => {
                    return <MyCard
                        setEditActive={setEditActive}
                        setEditingPost={setEditingPost}
                        loading={loading}
                        fetchPosts={fetchPosts}
                        remove={remove}
                        post={post}
                        key={post._id}/>
                })
                : <h1>Cats not found!</h1>
            }
        </div>
    );
};

export default PostList;