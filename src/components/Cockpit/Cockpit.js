import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let cssClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.persons.length <= 2) {
      cssClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
      cssClasses.push( classes.bold );
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React app</h1>
            <p className={cssClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={ props.clicked }>Toggle Persons</button> 
        </div>
    );
}

export default cockpit;
