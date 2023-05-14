import React, {useEffect, useRef, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyFilter from "./components/UI/MyFilter/MyFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import usePost from "./hooks/usePost";
import PostService from "./API/PostService";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css"
import useFetching from "./hooks/useFetching";
import MyHeader from "./components/UI/MyHeader/MyHeader";
import MyCard from "./components/UI/MyCard/MyCard";
import MySideMenu from "./components/UI/MySideMenu/MySideMenu";


function App() {

    const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
        setPosts(await PostService.getAllPosts())
    })
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalActive, setModalActive] = useState(false)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [])


    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModalActive(false)
    }

    function removePost(post) {
        // PostService.deletePost(post._id)
        setPosts(posts.filter((p) => {
            console.log(post._id)
            return p._id !== post._id
        }))
    }

    return (
        <div className={isMenuActive || modalActive
            ? 'App _lock'
            : 'App'}>
            <div className={isMenuActive
                ? 'lockScreen _active'
                : 'lockScreen'
            }>
            </div>
            <MySideMenu menuActive={isMenuActive}/>
            <MyHeader menuActive={isMenuActive} setMenu={setIsMenuActive}/>
            <MyModal
                modalActive={modalActive}
                setModalActive={setModalActive}
            >
                <PostForm
                    loading={isPostsLoading}
                    fetchPosts={fetchPosts}
                    create={createPost}
                />
            </MyModal>
            <MyFilter filter={filter} setFilter={setFilter}/>
            <MyButton onClick={()=>{
                setModalActive(true)
            }}>Add new card</MyButton>
            {isPostsLoading
                ? <Spinner animation="border" variant="warning" style={{width: 100, height: 100, margin: 50}}/>
                : error
                    ? <h1>Error: {error}</h1>
                    : <PostList
                        loading={isPostsLoading}
                        fetchPosts={fetchPosts}
                        posts={sortedAndSearchedPosts}
                        remove={removePost}
                        edit={setModalActive}
                    />
            }
        </div>
    );
}

export default App;
