import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import PostService from "../API/PostService";

const PostForm = ({loading, create, fetchPosts}) => {

    const [post, setPost] = useState({
        name: "",
        description: "",
        price:"", img:"",
        type:"",
        measurementRange:"",
        energyRange:"",
        protectionClass:""})
    const [error, setError] = useState([])
    let validationError = []

    function addNewPost(e) {
        e.preventDefault()
        validationError = []
        const checkName = new RegExp('^([A-Za-zА-Яа-я.\\-0-9\s])+$')
        const checkDescription = new RegExp('^([A-Za-zА-Яа-я\\s0-9.,!?\\-])+$')
        const checkPrice = new RegExp('^([0-9])+$')
        const checkURL = new RegExp('^https?:\\/\\/.+\\.(jpg|jpeg|png|webp|avif|svg)$')
        if (!checkName.test(post.name)) validationError.push('Incorrect name!')
        if (!checkDescription.test(post.description)) validationError.push('Incorrect description!')
        if (!checkPrice.test(post.price)) validationError.push('Incorrect price!')
        if (!checkURL.test(post.img)) validationError.push('Incorrect image link!')
        if (post.type === '') validationError.push('Chose type!')
        if (validationError.length === 0) {
            loading = true
            const newPost = {
                ...post,
            }
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
                    setPost({
                        name: "",
                        description: "",
                        price:"",
                        img:"",
                        type:"",
                        measurementRange:"",
                        energyRange:"",
                        protectionClass:""
                    })
                })
        } else setError(validationError)

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
                maxLength={100}
                value={post.description}
                onChange={(e) => {
                    return setPost({...post, description: e.target.value})
                }}
                type="text"
                placeholder="Short description"
            />
            <MyInput
                type="number"
                maxLength={7}
                value={post.price}
                onChange={(e) => {
                    return setPost({...post, price: e.target.value})
                }}
                placeholder="Price"
            />
            <MyInput
                value={post.measurementRange}
                onChange={(e) => {
                    return setPost({...post, measurementRange: e.target.value})
                }}
                type="text"
                placeholder="Measurement range"
            />
            <MyInput
                value={post.energyRange}
                onChange={(e) => {
                    return setPost({...post, energyRange: e.target.value})
                }}
                type="text"
                placeholder="Energy range"
            />
            <MyInput
                value={post.protectionClass}
                onChange={(e) => {
                    return setPost({...post, protectionClass: e.target.value})
                }}
                type="text"
                placeholder="Protection class"
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
                    {name: 'Individual', value: 'individual'},
                    {name: 'Pocket', value: 'pocket'},
                    {name: 'Portable', value: 'portable'},
                    {name: 'Wide-range', value: 'wideRange'},
                    {name: 'Standard', value: 'standard'},
                    {name: 'Neutron', value: 'neutron'}
                ]}
                defaultOption={"Type:"}
                onChange={(selectedType)=>{
                    return setPost({...post, type:selectedType})
                }}
            />
            {error.length > 0 && <div>{error.map((err)=>{
                return <div key={err} className="error">{err}</div>
            })}</div>}
            <MyButton onClick={addNewPost}>Add</MyButton>
        </form>
    );
};

export default PostForm;