import React from "react";
// import Radium from 'radium';
import './person.css'

const person = (props)=>{
    // const styles ={
    //     '@media (min-width:500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        <div className = "Person">
            <p onClick={props.click}>Hi this is {props.name} and i am {props.age} years old.</p>
            {/* <p onClick = {props.click}>{props.children}</p> */}
            <input type= "text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;