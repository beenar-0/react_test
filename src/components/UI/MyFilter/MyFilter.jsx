import MySelect from "../MySelect/MySelect";
import classes from "./MyFilter.module.css";
import MyInput from "../MyInput/MyInput";
import {useDispatch, useSelector} from "react-redux";

const MyFilter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const currentType = useSelector(state => state.type.type)

    return (
        <div className={classes.myFilter__container}>
            <MyInput
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    return dispatch({type: "SET_QUERY", payload: e.target.value})
                }}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => {
                    return dispatch({type: "SET_SORT", payload: selectedSort})
                }}
                options={[
                    {name: 'Name', value: 'name'},
                    {name: 'Price', value: 'price'}
                ]}
                defaultOption={"Sort by:"}
            />

            <div className={classes.dosTypes__container}>
                <ul className={classes.dosTypes__list}>
                    <li>
                        <button
                            className={currentType === "all" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'all'})
                            }}
                        >All
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "individual" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'individual'})
                            }}
                        >Individual
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "pocket" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'pocket'})
                            }}
                        >Pocket
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "portable" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'portable'})
                            }}
                        >Portable
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "wideRange" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'wideRange'})
                            }}
                        >Wide-range
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "standard" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'standard'})
                            }}
                        >Standard
                        </button>
                    </li>
                    <li>
                        <button
                            className={currentType === "neutron" ? [classes.dosTypes__item, classes.active].join(' ') : classes.dosTypes__item}
                            onClick={() => {
                                dispatch({type: "SET_TYPE", payload: 'neutron'})
                            }}
                        >Neutron
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyFilter;