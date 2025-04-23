import React , {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0

    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    const decrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount - 1)
        }
    }
    const reset = () => {
        setCount(initialCount)
    }
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={incrementFive}>Increment</button>
            <button onClick={decrementFive}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default HookCounterTwo
