import React from 'react'
import { useReducer, useRef, useEffect } from 'react'

export default function About() {
    // initialState - is a simple value but generally it is a object
    // useReducer - returns current state and dispatch method
    
    // example one: counter
    const [counter, doCount] = useReducer((state, action) => {
        return state + action
    }, 0)

    // example two: stop watch
    const initialState = {isRunning: false, time: 0}

    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    useEffect(()=>{
        if(!state.isRunning){
            return;
        }
        idRef.current = setInterval(()=> dispatch({type: 'tick'}, 1000));
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
        };
    }, [state.isRunning]);

    function reducer(state, action){
        switch(action.type){
            case 'start':
                return {...state, isRunning:true};
            case 'stop':
                return {...state, isRunning:false};
            case 'reset':
                return {...state, isRunning:0};
            case 'tick':
                return {...state, time:state.time + 1}
            default:
                throw new Error();
        }
    }

    return (
        <div>
            Current Count: {counter}
            <button onClick={() => doCount(1)} className={'btn btn-primary'}>Increment</button>
            <br />

            <div>
                <h1>Stop Watch</h1>
                <hr />
                {state.time}s

                <button onClick={()=> dispatch({type: 'start'})} className={'btn btn-sm btn-primary mx-2'}>Start</button>
                <button onClick={()=> dispatch({type: 'reset'})} className={'btn btn-sm btn-primary mx-2'}>Reset</button>
                <button onClick={()=> dispatch({type: 'stop'})} className={'btn btn-sm btn-primary mx-2'}>Stop</button>
            </div>
        </div>
    )
}
