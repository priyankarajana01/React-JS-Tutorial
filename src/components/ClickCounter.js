import React, { Component } from 'react'
import withCounter from './withCounter'   


class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //      count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => ({
    //         count: prevState.count + 1
    //     }))
    // }
    render() {
        // const { count } = this.state
        const { count, incrementCount} = this.props
        return (
            <div>
                <h1> Clicked {count} times</h1>
                {/* <button onClick={this.incrementCount}>Click Me</button> */}
                <button onClick={incrementCount}>{this.props.name} Clicked</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,5)
