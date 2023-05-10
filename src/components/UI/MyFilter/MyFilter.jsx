import React, {useMemo} from 'react';
import MyInput from "../MyInput/MyInput";
import MySelect from "../MySelect/MySelect";

const MyFilter = ({filter, setFilter}) => {


    return (
        <div style={{width:'100%'}}>
            <MyInput
                type="text"
                placeholder="Поиск..."
                value={filter.query}
                onChange={(e) => {
                    console.log(setFilter)
                    return setFilter({...filter, query: e.target.value})
                }}
            />
            <hr/>
            <MySelect
                value={filter.sort}
                changeSort={(selectedSort)=>{
                    return setFilter({...filter, sort:selectedSort})
                }}
                options={[
                    {name: 'Заголовку', value: 'title'},
                    {name: 'Содержанию поста', value: 'body'}
                ]}
                defaultOption={"Сортировка по:"}
            />
        </div>
    );
};

export default MyFilter;