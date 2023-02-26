import React from 'react'

export default function Input({type, 
    placeholder, classes, data="", id, change, name}) {
    return (
        <input
            type={type} 
            placeholder={placeholder} 
            className={classes}
            value={data}
            id={id}
            onChange={change}
            name={name}
        />
    )
}
