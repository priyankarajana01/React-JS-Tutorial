import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
// useReducer is a hook that is used to manage state in a functional component
// It takes a reducer function and an initial state as arguments
// The reducer function takes the current state and an action as arguments
// and returns the new state based on the action
// The initial state is the state that the component will start with
// The useReducer hook returns the current state and a dispatch function

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div> 
                Count - {count}
            </div>
            <div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
        </>
    )
}

export default CounterOne
