import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyFilter from "./components/UI/MyFilter/MyFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import {usePost} from "./hooks/usePost";
import PostService from "./API/PostService";


function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalActive, setModalActive] = useState(false)
    const [isPostsLoading, setIsPostLoading] = useState(false)
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
            .then()
    }, [])

    async function fetchPosts() {
        setIsPostLoading(true)
        setPosts(await PostService.getAllPosts())
        setIsPostLoading(false)
    }

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
            {sortedAndSearchedPosts.length
                    ? <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов №1"/>
                    : <h1>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
