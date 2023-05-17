import React, {useMemo} from 'react';
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";
import classes from "./MyFilter.module.css";

const MyFilter = ({filter, setFilter, currentType, setCurrentType}) => {
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
                    <li >
                        <button
                            className={currentType === "all" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                            onClick={()=>{
                                setCurrentType('all')
                            }}
                        >All</button></li>
                    <li >
                        <button
                            className={currentType === "kind" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                            onClick={()=>{
                        setCurrentType('kind')
                    }}
                        >Kind</button></li>
                    <li >
                        <button
                            className={currentType === "angry" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                            onClick={()=>{
                                setCurrentType('angry')
                            }}
                        >Angry</button></li><li >
                    <button
                        className={currentType === "sad" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                        onClick={()=>{
                            setCurrentType('sad')
                        }}
                    >Sad</button></li>
                </ul>
            </div>
        </div>
    );
};

export default MyFilter;