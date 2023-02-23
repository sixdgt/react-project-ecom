import React, {useState} from 'react'
import Title from '../components/Title'
import '../App.css'
import Input from '../components/Input'
import {Container} from 'react-bootstrap'

export default function Login({text, maxLength}) {

    const [hidden, setHidden] = useState(true);
    const [steps, setSteps] = useState(0);

    if (text.length <= maxLength){
        return <span>{text}</span>
    }

    function increment(){
        setSteps(prevState => prevState + 1)
    }

    return (
        <Container className='mt-4'>
            <Title classes={"title"} text={"Login Page"} />
            <hr />
            <div>
                <p>Your current step is {steps}</p>
                <button onClick={increment} className={'btn btn-sm btn-success'}>Next Step</button>
            </div>

            <span>
                {hidden ? `${text.substr(0, maxLength).trim()}` : text}
                {hidden ? (<a onClick={() => setHidden(false)} className={'btn btn-sm btn-primary m-3'}> Read More</a>):
                (<a onClick={() => setHidden(true)} className={'btn btn-sm btn-primary m-3'}>Less</a>)
                }
            </span>
        </Container>
    )
}
