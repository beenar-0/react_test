import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import PostService from "../API/PostService";
import {logDOM} from "@testing-library/react";

const PostForm = ({loading, create, fetchPosts}) => {

    const [post, setPost] = useState({name: "", description: "", price:"", img:"", type:""})

    function addNewPost(e) {
        e.preventDefault()
        loading = true
        const newPost = {
            ...post,
        }
        console.log(newPost)
        PostService.addPost(newPost)
            .then(()=>{
                create(newPost)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                loading = false
                fetchPosts()
                setPost({name: "", description: "", price:"", img:"", type:""})
            })
    }


    return (
        <form className={'postForm'}>
            <MyInput
                maxLength={10}
                value={post.name}
                onChange={(e) => {
                    return setPost({...post, name: e.target.value})
                }}
                type="text"
                placeholder="Name"
            />
            <MyInput
                maxLength={30}
                value={post.description}
                onChange={(e) => {
                    return setPost({...post, description: e.target.value})
                }}
                type="text"
                placeholder="Short description"
            />
            <MyInput
                type="number"
                maxLength={4}
                value={post.price}
                onChange={(e) => {
                    return setPost({...post, price: e.target.value})
                }}
                placeholder="Price"
            />
            <MyInput
                value={post.img}
                onChange={(e) => {
                    return setPost({...post, img: e.target.value})
                }}
                type="url"
                placeholder="Img URL"
            />
            <MySelect
                value={post.type}
                options={[
                    {name: 'Kind', value: 'kind'},
                    {name: 'Angry', value: 'angry'},
                    {name: 'Sad', value: 'sad'}
                ]}
                defaultOption={"Type:"}
                onChange={(selectedType)=>{
                    return setPost({...post, type:selectedType})
                }}
            />
            <MyButton onClick={addNewPost}>Add</MyButton>
        </form>
    );
};

export default PostForm;