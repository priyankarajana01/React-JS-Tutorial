import React, { Component } from 'react'
import LifecycleB from './LifecycleB'   


export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         name: 'Bruce'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={() => {this.setState({name: 'Clark'})}}>Update</button>
                <p>{this.state.name}</p>
                {/* <LifecycleB /> */}
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
