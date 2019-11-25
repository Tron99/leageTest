import React, { Component } from 'react'
import Input from '../components/Input'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id="addUserForm">
            <form>
                <Input type={"text"} label={"First Name"} id={"firstName"} placeholder={"John"}/>
                <Input type={"text"} label={"Second Name"} id={"secondName"} placeholder={"Doe"}/>
                <Input type={"email"} label={"Email"} id={"email"} placeholder={"johndoes@gmail.com"}/>
                <Input type={"text"} label={"Phone Number "} id={"phoneNumber"} palceholder={"011 098 2728"}/>
                <Input type={"date"} label={"Start Date "} id={"startDate"}/>
                <Input type={"date"} label={"End Date "} id={"endDate"}/>
                <button type="submit" class="btn btn-primary" id="submitUser">Submit</button>
            </form>
            </div>
        )
    }
}
export default Home;