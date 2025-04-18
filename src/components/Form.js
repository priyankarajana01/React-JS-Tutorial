import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {       
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`Username: ${this.state.username}, Comments: ${this.state.comments}, Topic: ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h5>Form Component</h5>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={this.state.username} onChange={this.handleUsernameChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="comments">Comments</label>
                        <textarea id="comments" value={this.state.comments} onChange={(event) => this.setState({ comments: event.target.value })}></textarea>
                    </div>
                    <div>
                        <label htmlFor="topic">Topic</label>
                        <select id="topic" value={this.state.topic} onChange={(event) => this.setState({ topic: event.target.value })}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
