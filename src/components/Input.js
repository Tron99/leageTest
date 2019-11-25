import React, { Component } from 'react'

const Input = (props) =>{
        return(
            <div className="form-group">
            <label>{"this.props.data.label"}</label>
            <input type="text" className="form-control" id={"this.props.id"} aria-describedby="emailHelp" placeholder={"this.props.placeholder"}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        )
}

export default Input;