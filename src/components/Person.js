import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2 key={person.id}>
            I am {person.name}. My age is {person.age}
        </h2>
    </div>
  )
}

export default Person
