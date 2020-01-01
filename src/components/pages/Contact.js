import React, { Component } from 'react';
import { withFormik } from 'formik';
import Field from '../Common/Field';
import * as Yup from 'yup';

const fields = {
    sections: [[
        { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*' },
        { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*' },
        { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*' }
    ],
    [
        { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*' }
    ]]
}





class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="row">
                                    {fields.sections.map((section, sectionIndex) => {
                                        return (
                                            <div className="col-md-6" key={sectionIndex} >
                                                {section.map((field, index) => {
                                                    return (<Field
                                                        {...field}
                                                        key={index}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}

                                                    />)
                                                })
                                                }
                                            </div>
                                        )
                                    })}
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''

    }), validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be longer than 3!')
            .max(7, 'Name must not be greater than 7!')
            .required('Please provide your name.'),
        email: Yup.string()
            .email('Please provide a valid email.')
            .required('Email is required'),
        phone: Yup.string()
            .min(10, 'Please provide a 10 digit phone number.')
            .max(15, 'Phone number is too long')
            .required('Please provide a phone number'),
        message: Yup.string()
            .min(500, 'Please provide more details. At least 500 characters.')
            .required('Message is required.')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        alert("You've submitted!", JSON.stringify(values))
    }
})(Contact);