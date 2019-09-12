import React, {Component} from 'react';
import * as emailjs from 'emailjs-com';
import paperclip from '../assets/images/paperclip.svg';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            company: '',
            country: '',
            file: '',
            message: '',
            formSubmitted: false
        };
        this.handleMessage = this.handleMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleCompany = this.handleCompany.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    static sender = 'olgatk01@gmail.com';

    handleMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleCompany(event) {
        this.setState({
            company: event.target.value
        });
    }

    handleCountry(event) {
        this.setState({
            country: event.target.value
        });
    }

    handleFile(event) {
        this.setState({
            file: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // const {
        //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //     REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env;

        this.sendMessage(
            // template,
            // this.sender,
            // receiverEmail,
            this.state.message,
            this.state.name,
            this.state.company,
            this.state.country,
            // this.state.file,
            this.state.email
        );

        this.setState({
            formSubmitted: true
        });
    }

    sendMessage(templateId, senderEmail, receiverEmail, message, name, company, country, email, file) {
        // let template_params = {
        //     "name": name,
        //     "email": email,
        //     "country": country,
        //     "company": company,
        //     "message": message
        // }

        // let service_id = "default_service";
        // let template_id = "template_fjMPvORY";
        // let user_id = "user_HhA5epB1UYyjVtpzFdDan";
        emailjs.send("mailjet", "template_fjMPvORY", {
            "email": this.state.email,
            "name": this.state.name,
            "country": this.state.country,
            "company": this.state.company,
            "message": this.state.message
        },"user_HhA5epB1UYyjVtpzFdDan" )
            .then(res => {
                console.log("message sent")
            })
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render() {
        return (
            <div className="contacts-form">
                <h1 className="section-title contacts-page-title elem-hide-mob">touch</h1>
                <hr className="hr-same hr-contacts elem-hide-mob"/>
                <p className="contacts-par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. </p>
                <form className="form-wrapper" onSubmit={this.handleSubmit}>
                    <input type="text"  required value={this.state.name} onChange={this.handleName}
                           placeholder="name*"/>
                    <input type="email"  required value={this.state.email} placeholder="e-mail*"
                           onChange={this.handleEmail}/>
                    <input type="text"  value={this.state.company} onChange={this.handleCompany}
                           placeholder="company`s name"/>
                    <input type="text" value={this.state.country} onChange={this.handleCountry}
                           placeholder="country"/>
                    <input type="file" id="file" value={this.state.file} onChange={this.handleFile} className="hide-file-input" />
                    <label htmlFor="file" className="custom-file-input">Choose file<img src={paperclip} className="paperclip"/></label>
                    <textarea onChange={this.handleMessage} placeholder="Enter your message here..."
                              value={this.state.message}/>
                    <button type="submit" onSubmit={this.handleSubmit} className="button-dark button-form">Send message</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;