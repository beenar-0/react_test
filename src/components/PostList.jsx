import MyCard from "./UI/MyCard/MyCard";
import usePost from "../hooks/usePost";
import {useSelector} from "react-redux";

const PostList = ({remove, fetchPosts, loading, setEditingPost, isAdmin, setAddedPosts, addedPosts, currentType}) => {

    const posts = useSelector(state => state.posts.posts)
    const filter = useSelector(state => state.filter)
    const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)

    return (
        <div className="postList">
            {sortedAndSearchedPosts.length
                ? sortedAndSearchedPosts.map((post) => {
                    return <MyCard
                        currentType={currentType}
                        addedPosts={addedPosts}
                        setAddedPosts={setAddedPosts}
                        isAdmin={isAdmin}
                        setEditingPost={setEditingPost}
                        loading={loading}
                        fetchPosts={fetchPosts}
                        remove={remove}
                        post={post}
                        key={post._id}/>
                })
                : <h1>Dosimeters not found!</h1>
            }
        </div>
    );
};

export default PostList;