import React, { PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerived');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponent');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshot');
        return {message: 'Snapshot object'};
    }
    componentDidUpdate(pervProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount () {
        console.log('[Persons.js] componentDidUnmount');
    }

    render () {
        console.log('[Persons.js] renderning...');
        return this.props.persons.map((person, index) => {
        return ( <Person 
            name={person.name} 
            age={person.age}
            click={ () => this.props.clicked(index) } 
            key={ person.id }
            changed={(event) => this.props.changed(event, person.id)} />
        );
    });
    }
} 

export default Persons;