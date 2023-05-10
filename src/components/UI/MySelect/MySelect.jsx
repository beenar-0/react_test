import React from 'react';

const MySelect = ({options, defaultOption, value, changeSort}) => {
    return (
        <select
            value={value}
            onChange={(event)=>{
                return changeSort(event.target.value)
            }}
        >
            <option disabled value=''>{defaultOption}</option>
            {options.map((option)=>{
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>
    );
};

export default MySelect;