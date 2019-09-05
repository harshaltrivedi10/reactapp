import React, {Component} from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../HigherOrderComponent/Auxliary';
import withClass from '../../../HigherOrderComponent/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor (props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render () {
        
    console.log('[Person.js] rendering...');
    return(
        <Auxiliary>
            <p key="itemOne" onClick={ this.props.click }>I'm { this.props.name } and I am { this.props.age } years old!</p>,
            <p key="itemTwo">{ this.props.children }</p>,
            <input 
                key="itemThree"
                type="text"
                ref={
                    // (inputEl) => {this.inputElement = inputEl}
                    this.inputElementRef
                } 
                onChange={this.props.changed} 
                value={this.props.name}/>
        </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);
