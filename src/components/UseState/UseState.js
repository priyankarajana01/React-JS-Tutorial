import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    console.log("useState Render")
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        
        </div>
    )
}

export default UseState
