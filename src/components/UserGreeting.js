import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {    
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // return this.state.isLoggedIn && <div>Welcome User</div>
        return (
            <div>
                <div>Welcome {this.state.isLoggedIn ? 'User' : 'Guest'}</div>
            </div>
        )
    }
}

export default UserGreeting
