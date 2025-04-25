import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
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

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div> 
                Count - {count.firstCounter}
            </div>
            <div>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </>
    )
}

export default CounterTwo
