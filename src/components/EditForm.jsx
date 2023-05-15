import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import PostService from "../API/PostService";

const EditForm = ({loading, editingPost, setEditActive, fetchPosts, setEditingPost}) => {

    function edit(e) {
        e.preventDefault()
        loading = true
        PostService.editPost(editingPost._id, editingPost)
            .then(()=>{
                setEditActive(false)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                loading = false
                fetchPosts()
                setEditingPost({name: "", description: "", price:"", img:"", type:""})
            })
    }

    return (
        <form className={'postForm'}>
            <MyInput
                maxLength={10}
                value={editingPost.name}
                onChange={(e) => {
                    return setEditingPost({...editingPost, name: e.target.value})
                }}
                type="text"
                placeholder="Name"
            />
            <MyInput
                maxLength={30}
                value={editingPost.description}
                onChange={(e) => {
                    return setEditingPost({...editingPost, description: e.target.value})
                }}
                type="text"
                placeholder="Short description"
            />
            <MyInput
                type="number"
                maxLength={4}
                value={editingPost.price}
                onChange={(e) => {
                    return setEditingPost({...editingPost, price: e.target.value})
                }}
                placeholder="Price"
            />
            <MyInput
                value={editingPost.img}
                onChange={(e) => {
                    return setEditingPost({...editingPost, img: e.target.value})
                }}
                type="url"
                placeholder="Img URL"
            />
            <MySelect
                value={editingPost.type}
                options={[
                    {name: 'Kind', value: 'kind'},
                    {name: 'Angry', value: 'angry'},
                    {name: 'Sad', value: 'sad'}
                ]}
                defaultOption={"Type:"}
                onChange={(selectedType)=>{
                    return setEditingPost({...editingPost, type:selectedType})
                }}
            />
            <MyButton onClick={edit}>Save</MyButton>
        </form>
    );
};

export default EditForm;