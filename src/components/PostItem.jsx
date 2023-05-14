import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

const PostItem = (props) => {
    return (
            <div className="post">
                <div className="post__content">
                    <h2 className="post__title">{props.post.title}</h2>
                    <div className="post__container">
                        <div className="post__description">
                            {props.post.description}
                        </div>
                        <div className="post__btns">
                            <MyButton
                            onClick={()=>{
                                return props.remove(props.post)
                            }}
                            >Удалить</MyButton>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;