import React, {useMemo} from 'react';
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import classes from "./MyFilter.module.css";

const MyFilter = ({filter, setFilter}) => {
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
                    {name: 'Name', value: 'title'},
                    {name: 'Description', value: 'body'}
                ]}
                defaultOption={"Sort by:"}
            />
        </div>
    );
};

export default MyFilter;