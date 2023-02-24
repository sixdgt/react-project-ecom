import React, {useState, useRef, useEffect} from 'react'
import Title from '../components/Title'
import '../App.css'
import Input from '../components/Input'
import {Container, Button} from 'react-bootstrap'

export default function Login({text, maxLength}) {

    const [hidden, setHidden] = useState(true);
    const [steps, setSteps] = useState(0);
    const [username_input, setUsernameInput] = useState("");
    const [password_input, setPasswordInput] = useState("");

    //  useRef - use to test if it is a first render or not
    const firstRender = useRef(true)

    // set button as disabled at first
    const [disable, setDisabled] = useState(true);

    // error message display
    const [usernameError, setUsernameError] = useState(null);

    // effect
    useEffect(() =>{
        if(firstRender.current){
            firstRender.current = false
            return
        }
        setDisabled(formValidatation())
    });

    const formValidatation = () => {
        const username = document.getElementById("id_username")
        if(username.value === ""){
            setUsernameError("Username can't be blank")
        } else {
            setUsernameError(null)
            return false
        }
    }


    const changeUsernameHandle = (e) => {
        setUsernameInput(e.target.value);
    }

    const changePasswordHandle = (e) => {
        setPasswordInput(e.target.value);
    }

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

            <hr />
            <div className='mt-5'>
                <form>
                    <Input
                        type={'text'}
                        placeholder={'Enter Username/Email'}
                        classes={'form-control mb-3'}
                        id={'id_username'}
                        data={username_input}
                        change={changeUsernameHandle}
                    />
                    <span style={{color: 'red'}}>{usernameError}</span>
                    <Input
                        type={'password'}
                        placeholder={'Enter Password'}
                        classes={'form-control mb-3'}
                        id={'id_password'}
                        data={password_input}
                        change={changePasswordHandle}
                    />
                    <Button className='col-12' disabled={disable}>Login</Button>
                </form>
            </div>
        </Container>
    )
}
