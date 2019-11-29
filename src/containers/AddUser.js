import React, { Component } from 'react'
import Input from '../components/Input'
import SimpleReactValidator from 'simple-react-validator';
import moment from 'moment';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.validator = new SimpleReactValidator();
        this.submitForm = this.submitForm.bind(this)
        this.handleChange = this.handleChange.bind(this)


    }

    submitForm(e) {
        e.preventDefault()

        if (this.validator.allValid()) {
          alert.log(this.state)
        } else {
            alert("not valid")
          this.validator.showMessages();
          this.forceUpdate();
        }
      }
      handleChange(e){
          e.preventDefault()
          let value = e.target.value
          if(e.target.id === "startDate"){
           this.setState({[e.target.value]: JSON.stringify(this.state.startDate)})
           console.log(this.state.startDate)
        }
        if(e.target.id === "endDate"){
            this.setState({[e.target.value]: JSON.stringify(this.state.endDate)})
            console.log(this.state.endDate)
        }
          else{

              this.setState({[e.target.id]:value})
          }
      }

    render() {
        return (
            <div id="addUserForm">
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"  id="firstName" placeholder="John"  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('First Name', this.state.firstName, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"  id="secondName" placeholder="Doe"  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('Second Name', this.state.secondName, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" placeholder="johndoes@gmail.com"  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('Email', this.state.email, 'required|email')}

                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text"  id="phoneNumber" palceholder="011 098 2728"  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('Phone Number', this.state.phoneNumber, 'required|numeric')}

                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="date"  id="startDate"  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('Start Date', this.state.startDate, 'required|alpha')}

                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date" id={"endDate"}  className="form-control" onChange={this.handleChange}/>
                        {this.validator.message('End Date', this.state.title, 'required|alpha')}

                    </div>
                    <button type="submit" className="btn btn-primary" id="submitUser" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Home;