import React, {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyFilter from "./components/UI/MyFilter/MyFilter";


function App() {

    const [filter, setFilter] = useState({sort:'', query:''})

    const [posts, setPosts] = useState([
        {number: 1, title: "qboba", body: "cscrip", id: Math.trunc(Math.random() * 1000000000)},
        {number: 2, title: "caboba", body: "qscrip", id: Math.trunc(Math.random() * 1000000000)},
        {number: 3, title: "gaboba", body: "ascrip", id: Math.trunc(Math.random() * 1000000000)}
    ])

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => {
                return a[filter.sort].localeCompare(b[filter.sort])
            })
        } else return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter((post)=>{
            return post.title.toLowerCase().includes(filter.query.toLowerCase())
        })
    }, [filter.query, sortedPosts])


    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter((p) => {
            return p.id !== post.id
        }))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
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
