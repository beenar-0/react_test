import React from 'react';
import Posts from "./Posts";

const Admin = ({isAdmin, setAddedPosts, addedPosts, modalActive, setModalActive, isMenuActive, setIsMenuActive}) => {
    return (
        <Posts
            isAdmin={isAdmin}
            setAddedPosts={setAddedPosts}
            addedPosts={addedPosts}
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
        />
    );
};

export default Admin;