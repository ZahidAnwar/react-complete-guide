import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((p, index) => {
    return <Person 
    click={() => props.clicked(index)}
     name={p.name} 
     age={p.age}
     key={p.id}
     changed={(event) => props.changed(event, p.id)} />
})

export default persons;