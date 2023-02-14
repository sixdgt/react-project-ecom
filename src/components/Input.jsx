import React from 'react'

export default function Input({type, 
    placeholder, classes, data=""}) {
    return (
        <input
            type={type} 
            placeholder={placeholder} 
            className={classes}
            value={data}
        />
    )
}
