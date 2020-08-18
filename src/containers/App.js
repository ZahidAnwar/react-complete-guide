import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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

    if( this.state.showPersons ) {

        person = (
            <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}/>)     
    }



    return (
      <div className={classes.App}>

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

        <Cockpit 
          title={this.props.appTitle}
          personsLength={this.state.persons.length} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {person}

      </div>
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi this is me!!'));
  }
}

export default App;
