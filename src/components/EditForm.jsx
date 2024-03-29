import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";
import PostService from "../API/PostService";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const EditForm = ({loading, fetchPosts, editingPost, setEditingPost}) => {
    const dispatch = useDispatch()
    const [error, setError] = useState([])
    let validationError = []

    function edit(e) {
        e.preventDefault()
        validationError = []
        const checkName = new RegExp('^([A-Za-zА-Яа-я.\\-0-9\s])+$')
        const checkDescription = new RegExp('^([A-Za-zА-Яа-я\\s0-9.,!?\\-])+$')
        const checkPrice = new RegExp('^([0-9])+$')
        const checkURL = new RegExp('^https?:\\/\\/.+\\.(jpg|jpeg|png|webp|avif|svg)$')
        if (!checkName.test(editingPost.name)) validationError.push('Incorrect name!')
        if (!checkDescription.test(editingPost.description)) validationError.push('Incorrect description!')
        if (!checkPrice.test(editingPost.price)) validationError.push('Incorrect price!')
        if (!checkURL.test(editingPost.img)) validationError.push('Incorrect image link!')
        if (editingPost.type === '') validationError.push('Chose type!')
        if (validationError.length === 0) {
            loading = true
            PostService.editPost(editingPost._id, editingPost)
                .then(() => {
                    dispatch({type: "SET_EDIT", payload: false})
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    loading = false
                    fetchPosts()
                    setEditingPost({
                        name: "",
                        description: "",
                        price: "",
                        img: "",
                        type: "",
                        measurementRange: "",
                        energyRange: "",
                        protectionClass: ""
                    })
                })
        } else setError(validationError)
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
                maxLength={100}
                value={editingPost.description}
                onChange={(e) => {
                    return setEditingPost({...editingPost, description: e.target.value})
                }}
                type="text"
                placeholder="Short description"
            />
            <MyInput
                type="number"
                maxLength={7}
                value={editingPost.price}
                onChange={(e) => {
                    return setEditingPost({...editingPost, price: e.target.value})
                }}
                placeholder="Price"
            />
            <MyInput
                value={editingPost.measurementRange}
                onChange={(e) => {
                    return setEditingPost({...editingPost, measurementRange: e.target.value})
                }}
                type="text"
                placeholder="Measurement range"
            />
            <MyInput
                value={editingPost.energyRange}
                onChange={(e) => {
                    return setEditingPost({...editingPost, energyRange: e.target.value})
                }}
                type="text"
                placeholder="Energy range"
            />
            <MyInput
                value={editingPost.protectionClass}
                onChange={(e) => {
                    return setEditingPost({...editingPost, protectionClass: e.target.value})
                }}
                type="text"
                placeholder="Protection class"
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
                    {name: 'Individual', value: 'individual'},
                    {name: 'Pocket', value: 'pocket'},
                    {name: 'Portable', value: 'portable'},
                    {name: 'Wide-range', value: 'wideRange'},
                    {name: 'Standard', value: 'standard'},
                    {name: 'Neutron', value: 'neutron'}
                ]}
                defaultOption={"Type:"}
                onChange={(selectedType)=>{
                    return setEditingPost({...editingPost, type:selectedType})
                }}
            />
            {error.length > 0 && <div>{error.map((err) => {
                return <div key={err} className="error">{err}</div>
            })}</div>}
            <MyButton onClick={edit}>Save</MyButton>
        </form>
    );
};

export default EditForm;