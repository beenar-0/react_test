import React, {useState} from 'react';

const Counter = () => {

    let [count, setCount] = useState(0)
    let [value, setValue] = useState('text')

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={(event)=>setValue(event.target.value)}
            />
            <br/>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;