import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerived');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponent');
        return true;
    }

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