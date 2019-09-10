import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default props=>(
    <DropdownButton
        drop={props.direction}
        variant={props.variant}
        title={props.value}
        id={`dropdown-button-drop-${props.direction}`}
        key={props.direction}
    >
        {props.menuItems.map((item,i)=>{
           return (<Dropdown.Item eventKey={i} key={i}>{item}</Dropdown.Item>)
        })}
    </DropdownButton>
)