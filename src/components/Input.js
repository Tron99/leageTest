import React, { Component } from 'react'

const Input = (props) =>{
        return(
            <div className="form-group">
            <label>{props.label}</label>
            <input type={props.type} className="form-control" id={props.id} aria-describedby="emailHelp" placeholder={props.placeholder}/>
          </div>
        )
}

export default Input;