import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component{

    onSubmit = (formValues) => {
        console.log("formValues: ", formValues);
        this.props.createStream(formValues);
    }

    render(){
        
        return (
            <div>
                
            </div>
        );
    }
};

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

const formWrapped =  reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, {createStream}) (formWrapped);