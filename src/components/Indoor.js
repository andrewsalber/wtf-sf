import React from 'react';
import '../App.css';

function Indoor(props) {
    if (props.indoor === null) {
        return (
            <button className="button" onClick = {props.indoorToggle} href="https://www.google.com">I'd rather do something inside.</button>
        )
    } else if (props.indoor === true) {
        return (
            <button className="button" onClick = {props.indoorToggle} href="https://www.google.com">I'd rather do something outside.</button>
        )
    } else {
        return (
            <button className="button" onClick = {props.indoorToggle} href="https://www.google.com">I'd rather do something inside.</button>
        )
    }
}

export default Indoor;