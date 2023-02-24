import React from 'react'

export default function Input({type, 
    placeholder, classes, data="", id, change}) {
    return (
        <input
            type={type} 
            placeholder={placeholder} 
            className={classes}
            value={data}
            id={id}
            onChange={change}
        />
    )
}
