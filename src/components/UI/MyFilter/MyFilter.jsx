import React, {useMemo} from 'react';
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import classes from "./MyFilter.module.css";

const MyFilter = ({filter, setFilter}) => {

    function getTypePosts(type) {

    }

    return (
        <div className={classes.myFilter__container}>
            <MyInput
                type="text"
                placeholder="Search..."
                value={filter.query}
                onChange={(e) => {
                    return setFilter({...filter, query: e.target.value})
                }}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort)=>{
                    return setFilter({...filter, sort:selectedSort})
                }}
                options={[
                    {name: 'Name', value: 'name'},
                    {name: 'Price', value: 'price'}
                ]}
                defaultOption={"Sort by:"}
            />
            <div className={classes.catTypes__container}>
                <ul className={classes.catTypes__list}>
                    <li className={[classes.catTypes__item, classes.active].join(" ")} onClick={()=>{

                    }}>All</li>
                    <li className={classes.catTypes__item} onClick={()=>{

                    }}>Kind</li>
                    <li className={classes.catTypes__item} onClick={()=>{

                    }}>Angry</li>
                    <li className={classes.catTypes__item} onClick={()=>{

                    }}>Sad</li>
                </ul>
            </div>
        </div>
    );
};

export default MyFilter;