import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {   
        super(props);
        this.state = {
            count: 0
        };
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },() => {console.log("Callback value", this.state.count)});
        // console.log(this.state.count); //not here

        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log("Callback value", this.state.count);
        });
        console.log(this.state.count); //not here   
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {   
        return (
            <div>
                <h1>Counter - {this.state.count}</h1>
                <button onClick = {() => this.increment()}>Increment</button>
                <button onClick = {() => this.incrementFive()}>Increment five times</button>
                <button onClick = {() => this.decrement()}>Decrement</button>
            </div>
        );
    }
}
export default Counter;