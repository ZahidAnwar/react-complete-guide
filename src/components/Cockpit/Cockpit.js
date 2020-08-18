import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {

    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    //btnClass.push(classes.Red);

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red, bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;