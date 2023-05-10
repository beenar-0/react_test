import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: "", body: ""})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Math.trunc(Math.random() * 1000000000)
        }
        create(newPost)
        setPost({title: "", body: ""})
    }


    return (
        <form className={'postForm'}>
            <MyInput
                value={post.title}
                onChange={(e) => {
                    return setPost({...post, title: e.target.value})
                }}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => {
                    return setPost({...post, body: e.target.value})
                }}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Добавить</MyButton>
        </form>
    );
};

export default PostForm;