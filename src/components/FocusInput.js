import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
  render() {
    return (
      <div>
        <Input />
        <button onClick={this.focusInput.bind(this)}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
