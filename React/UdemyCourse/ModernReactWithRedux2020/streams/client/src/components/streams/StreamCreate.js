import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component{
    
    renderError = (meta)=>{
        if(meta.touched && meta.error)  return  <div>{meta.error}</div>
    }

    renderInput = (formProps) => {
        console.log("formProps: ", formProps);
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input}></input>    
                {this.renderError(formProps.meta)}
            </div>
        ); 
    }

    onSubmit = (formValues) => {
        console.log("formValues: ", formValues);
        this.props.createStream(formValues);
    }

    render(){
        
            return (
                <form 
                    className="ui form error"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    {/* Por padrão, a props "label" será passada como parâmetro para a função renderInput, assim como outras props nativas do componente Field */}
                    <Field name="title" component={this.renderInput} label="Enter a title"/>
                    <Field name= "description" component={this.renderInput} label="Enter a description"/>
                    <button className="ui button primary">Submit</button>
                </form>
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