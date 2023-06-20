import React, {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css"
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyModal from "../components/UI/MyModal/MyModal";
import EditForm from "../components/EditForm";
import MyFilter from "../components/UI/MyFilter/MyFilter";
import MyButton from "../components/UI/MyButton/MyButton";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import {useDispatch, useSelector} from "react-redux";
import MyFilterPc from "../components/UI/MyFilterPC/MyFilterPC";


function Posts({setAddedPosts, addedPosts, isAdmin}) {

    const dispatch = useDispatch()
    const isEditActive = useSelector(state => state.edit.isEditActive)
    const isModalActive = useSelector(state => state.modal.isModalActive)
    const currentType = useSelector(state => state.type.type)
    const posts = useSelector(state => state.posts.posts)
    const [fetchPosts, isPostsLoading, error, setError] = useFetching(async () => {
        setError(null)
        dispatch({type: "SET_POSTS", payload: await PostService.getPosts(currentType)})
    })
    useEffect(() => {
        fetchPosts(currentType)
    }, [currentType])
    const [editingPost, setEditingPost] = useState({
        name: "",
        description: "",
        price: "",
        img: "",
        type: "",
        measurementRange:"",
        energyRange:"",
        protectionClass:""
    })

    useEffect(() => {
        if (isAdmin) setAddedPosts([])
        fetchPosts(currentType)
    }, [])

    function createPost(newPost) {
        dispatch({type: "SET_POSTS", payload: [...posts, newPost]})
        dispatch({type: "SET_MODAL", payload: false})
    }

    function removePost(post) {
        dispatch({
            type: "SET_POSTS",
            payload: posts.filter((p) => {
                return p._id !== post._id
            })
        })
    }

    return (
        <div className="app-container">
            <MyModal active={isModalActive}>
                <PostForm
                    loading={isPostsLoading}
                    fetchPosts={fetchPosts}
                    create={createPost}
                />
            </MyModal>
            <MyModal active={isEditActive}>
                <EditForm
                    setEditingPost={setEditingPost}
                    loading={isPostsLoading}
                    fetchPosts={fetchPosts}
                    editingPost={editingPost}
                />
            </MyModal>
            <div className={'mainContainer'}>
                <div className={'leftContainer'}>
                    {
                        window.matchMedia("(max-width: 1150px)").matches
                            ? <MyFilter fetchPosts={fetchPosts}/>
                            : <MyFilterPc/>
                    }
                </div>
                <div className={'rightContainer'}>
                    {
                        isAdmin &&
                        <MyButton onClick={() => {
                            dispatch({type: "SET_MODAL", payload: true})
                        }}>Add new card</MyButton>
                    }
                    {isPostsLoading
                        ? <Spinner animation="border" variant="primary" style={{width: 100, height: 100, margin: 50}}/>
                        : error
                            ? <h1>Error: {error}</h1>
                            : <PostList
                                currentType={currentType}
                                addedPosts={addedPosts}
                                setAddedPosts={setAddedPosts}
                                isAdmin={isAdmin}
                                setEditingPost={setEditingPost}
                                loading={isPostsLoading}
                                fetchPosts={fetchPosts}
                                remove={removePost}
                            />
                    }
                </div>

            </div>
        </div>
    );
}

export default Posts;
