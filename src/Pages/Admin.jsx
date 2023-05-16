import React from 'react';
import Posts from "./Posts";

const Admin = ({isAdmin, setAddedPosts, addedPosts, modalActive, setModalActive, isEditActive, setEditActive, isMenuActive, setIsMenuActive}) => {
    return (
        <Posts
            isAdmin={isAdmin}
            setAddedPosts={setAddedPosts}
            addedPosts={addedPosts}
            modalActive={modalActive}
            setModalActive={setModalActive}
            isEditActive={isEditActive}
            setEditActive={setEditActive}
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
        />
    );
};

export default Admin;