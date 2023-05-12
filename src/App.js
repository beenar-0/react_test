import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyFilter from "./components/UI/MyFilter/MyFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import {usePost} from "./hooks/usePost";
import PostService from "./API/PostService";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css"
import useFetching from "./hooks/useFetching";
import Header from "./components/UI/MyHeader/Header";


function App() {
    const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
        setPosts(await PostService.getAllPosts())
    })
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalActive, setModalActive] = useState(false)
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [])


    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModalActive(false)
    }

    function removePost(post) {
        setPosts(posts.filter((p) => {
            return p.id !== post.id
        }))
    }

    return (
        <div className="App">
            <Header/>
            <MyButton
                onClick={() => {
                    return setModalActive(true)
                }}
            >
                Добавить пост
            </MyButton>
            <MyModal
                modalActive={modalActive}
                setModalActive={setModalActive}
            >
                <PostForm create={createPost}/>
            </MyModal>
            <hr/>
            <MyFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <Spinner animation="border" style={{width: 200, height: 200, margin: 50}}/>
                : error
                    ? <h1>Ошибка: {error}</h1>
                    : <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов №1"/>
            }
        </div>
    );
}

export default App;
