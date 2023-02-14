import React from 'react'
import Title from '../components/Title'
import '../App.css'
import Input from '../components/Input'

export default function Login() {

    const customStyle = {
        fontSize: '20px',
        background: 'black',
        color: 'white',
        margin: '2rem',
        padding: '4rem'
    }

    return (
        <div>
            <Title classes={"title"} text={"Login Page"} />
            <hr />
            <div style={customStyle}>
                <label 
                    style={{fontSize: '20px'}}
                >
                <Title classes={"label-text"} text={"Username:"} />
                </label>

                <Input 
                    type={"text"} 
                    placeholder={"Enter Username"}
                />

                <Input
                    type={"date"}
                    placeholder={""}
                />
            </div>
        </div>
    )
}
