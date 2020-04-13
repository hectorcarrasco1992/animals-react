import React from 'react';

const Side = (props) => {
    return (
        <li className="sidebar">
            {props.children}
        </li>
    )
}

export default Side