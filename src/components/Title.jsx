import React from 'react'
import '../App.css'

export default function Title({text, classes}) {
    return (
        <span className={classes}>{!text ? "Login" : text}</span>
    )
}
