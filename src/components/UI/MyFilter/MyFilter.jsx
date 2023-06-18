import MySelect from "../MySelect/MySelect";
import classes from "./MyFilter.module.css";
import MyInput from "../MyInput/MyInput";
import {useDispatch, useSelector} from "react-redux";

const MyFilter = ({currentType, setCurrentType}) => {

        const dispatch = useDispatch()
        const filter = useSelector(state => state.filter)

        return (
        <div className={classes.myFilter__container}>
            <MyInput
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    return dispatch({type:"SET_QUERY", payload: e.target.value})
                }}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort)=>{
                    return dispatch({type:"SET_SORT", payload: selectedSort})
                    // return setFilter({...filterr, sort:selectedSort})
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
                            className={currentType === "individual" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                            onClick={()=>{
                        setCurrentType('individual')
                    }}
                        >Individual</button></li>
                    <li >
                        <button
                            className={currentType === "pocket" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                            onClick={()=>{
                                setCurrentType('pocket')
                            }}
                        >Pocket</button></li><li >
                    <button
                        className={currentType === "portable" ? [classes.catTypes__item, classes.active].join(' ') : classes.catTypes__item}
                        onClick={()=>{
                            setCurrentType('portable')
                        }}
                    >Portable</button></li>
                </ul>
            </div>
        </div>
    );
};

export default MyFilter;