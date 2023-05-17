import React, {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css"
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import usePost from "../hooks/usePost";
import MyModal from "../components/UI/MyModal/MyModal";
import EditForm from "../components/EditForm";
import MyFilter from "../components/UI/MyFilter/MyFilter";
import MyButton from "../components/UI/MyButton/MyButton";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";



function Posts({modalActive, setModalActive, isEditActive, setEditActive, setAddedPosts, addedPosts, isAdmin}) {
    const [currentType, setCurrentType] = useState("all")
    const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
        setPosts(await PostService.getPosts(currentType))
    })
    useEffect(()=>{
        fetchPosts(currentType)
    }, [currentType])
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)
    const [editingPost, setEditingPost] = useState({name: "", description: "", price: "", img: "", type: ""})


    useEffect(() => {
        if (isAdmin) setAddedPosts([])
        fetchPosts()
    }, [])

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModalActive(false)
    }

    function removePost(post) {
        setPosts(posts.filter((p) => {
            return p._id !== post._id
        }))
    }

    return (
            <div className="app-container">
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
            <MyModal
                modalActive={isEditActive}
                setModalActive={setEditActive}
            >
                <EditForm
                    setEditingPost={setEditingPost}
                    loading={isPostsLoading}
                    fetchPosts={fetchPosts}
                    setEditActive={setEditActive}
                    editingPost={editingPost}
                />
            </MyModal>
            <MyFilter
                fetchPosts={fetchPosts}
                setCurrentType={setCurrentType}
                currentType={currentType}
                filter={filter}
                setFilter={setFilter}
            />
                {
                    isAdmin &&
                    <MyButton onClick={() => {setModalActive(true)}}>Add new card</MyButton>
                }
            {isPostsLoading
                ? <Spinner animation="border" variant="warning" style={{width: 100, height: 100, margin: 50}}/>
                : error
                    ? <h1>Error: {error}</h1>
                    : <PostList
                        currentType={currentType}
                        addedPosts={addedPosts}
                        setAddedPosts={setAddedPosts}
                        isAdmin={isAdmin}
                        setEditActive={setEditActive}
                        setEditingPost={setEditingPost}
                        loading={isPostsLoading}
                        fetchPosts={fetchPosts}
                        posts={sortedAndSearchedPosts}
                        remove={removePost}
                    />
            }
            </div>
    );
}

export default Posts;
