import React from 'react'

const heading = {

  fontSize: '72px',
  color: 'blue',
  backgroundColor: 'yellow',
  textAlign: 'center',
  padding: '20px',
  margin: '20px',
  border: '2px solid black',
  borderRadius: '10px',
  textTransform: 'uppercase',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: 'red',
    backgroundColor: 'blue',
    transform: 'scale(1.1)',
  },
}


function Inline() {
  return (
    <div>

      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
