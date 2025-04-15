import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Peter']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30
        },
        {
            id: 2,
            name: 'Clark',
            age: 25
        },
        {
            id: 3,
            name: 'Diana',
            age: 28
        }
    ] 
    const nameList = names.map((name,index) => <h2 key={index}> {index} {name} </h2>)


    const personList = persons.map(person => ( <Person key={person.name} person={person} />
        
    ))

  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2> */}
        {nameList}
        {personList}
    </div>
  )
}

export default NameList
