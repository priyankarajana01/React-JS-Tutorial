import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>
        PortalDemo
    </h1>,
    document.getElementById('portal-root') // this is the id of the div in index.html
  )
}

export default PortalDemo
