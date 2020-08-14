import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Dan', age: 39 },
      { id: '2', name: 'Jack', age: 41 },
      { id: '3', name: 'Bob', age: 42 }
    ],
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log('person index: {}', personIndex)
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //console.log('It works! index= {}', personIndex);
    //console.log('Initial persons: {}', this.state.persons);
    const p = this.state.persons.slice();
    //console.log('p: {}', p);
    p.splice(personIndex, 1);
    //console.log('After remove: {}', p);
    this.setState({persons : p});
    //console.log('After set state: {}', this.state.persons);
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let person = null;
    let btnClass = [classes.Button];

    if( this.state.showPersons ) {
        person = (<div>
          {
          this.state.persons.map((p, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
               name={p.name} 
               age={p.age}
               key={p.id}
               changed={(event) => this.nameChangedHandler(event, p.id)} />
          }
          )}
        </div>
        );
        btnClass.push(classes.Red);
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red, bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hello world</h1>
        <p className={assignedClasses.join(' ')}>This is working!!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/*{
        this.state.showPersons ?
          <div>
          {
          this.state.persons.map(p => {
              return <Person name={p.name} age={p.age}/>
          }
          )}
                  </div> : null
        }*/}


        {person}

      </div>
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi this is me!!'));
  }
}

export default App;
