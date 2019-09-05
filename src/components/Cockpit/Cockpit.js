import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect (() => {
    // can have multiple useEffects, to trigger it on different variables
    console.log("[Cockpit.js] useEffect");
    // HTTP request ......
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup in here");
    }
    // if empty array is passed, it runs just for the first time. As no variables are passed, it doesn't get triggered on any specific update
  }, []);

  useEffect (() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log("[Cockpit.js] cleanup in 2nd useEffect here");
    }
  });

  let cssClasses = [];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = classes.Red;
  }
  
  if (props.personsLength <= 2) {
    cssClasses.push( classes.red );
  }
  if (props.personsLength <= 1) {
    cssClasses.push( classes.bold );
  }

  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={cssClasses.join(' ')}>This is really working!</p>
          <button 
            ref={toggleButtonRef}
            className={btnClass}
            onClick={ props.clicked }>Toggle Persons</button> 
      </div>
  );
}

export default React.memo(Cockpit);
