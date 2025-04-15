import React from "react";

class EventBind extends React.Component {  
    constructor(props) {   
        super(props);
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }
    render() { 
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Event bind!</button>


                {/* <button onClick={this.clickHandler}>Event bind!</button>
                 */}
                {/* <button onClick={() => this.clickHandler()}>Event bind!</button> */}

            </div>
        );
    }
}

export default EventBind;