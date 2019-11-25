import React, { Component } from 'react'
import Input from '../components/Input'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <form>
                <Input/>
            </form>
        )
    }
}
export default Home;