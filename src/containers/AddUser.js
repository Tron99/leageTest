import React, { Component } from 'react'
import Input from '../components/Input'
import SimpleReactValidator from 'simple-react-validator';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.validator = new SimpleReactValidator();
        this.submitForm = this.submitForm.bind(this)

    }

    submitForm(e) {
        e.preventDefault()

        if (this.validator.allValid()) {
          alert('You submitted the form and stuff!');
        } else {
            alert("not valid")
          this.validator.showMessages();
          this.forceUpdate();
        }
      }

    render() {
        return (
            <div id="addUserForm">
                <form>
                    <div className="form-group">
                        <Input type={"text"} label={"First Name"} id={"firstName"} placeholder={"John"} />
                        {this.validator.message('First Name', this.state.firstName, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <Input type={"text"} label={"Second Name"} id={"secondName"} placeholder={"Doe"} />
                        {this.validator.message('Second Name', this.state.secondName, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <Input type={"email"} label={"Email"} id={"email"} placeholder={"johndoes@gmail.com"} />
                        {this.validator.message('Email', this.state.email, 'required|email')}

                    </div>
                    <div className="form-group">
                        <Input type={"text"} label={"Phone Number "} id={"phoneNumber"} palceholder={"011 098 2728"} />
                        {this.validator.message('Phone Number', this.state.phoneNumber, 'required|num')}

                    </div>
                    <div className="form-group">
                        <Input type={"date"} label={"Start Date "} id={"startDate"} />
                        {this.validator.message('Start Date', this.state.startDate, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <Input type={"date"} label={"End Date "} id={"endDate"} />
                        {this.validator.message('End Date', this.state.title, 'required|alpha')}

                    </div>
                    <button type="submit" className="btn btn-primary" id="submitUser" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Home;