import React from 'react';

const MySelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={(event)=>{
                return onChange(event.target.value)
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