import React from 'react'
import Title from '../components/Title'
import '../App.css'
import Input from '../components/Input'
import {Container} from 'react-bootstrap'

export default function Login() {
    return (
        <Container>
            <Title classes={"title"} text={"Login Page"} />
            <hr />
            <div>
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
        </Container>
    )
}
