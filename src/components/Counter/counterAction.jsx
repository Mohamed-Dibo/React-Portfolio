import React from 'react'
import { useDispatch } from 'react-redux';
import {increment ,decrement} from '../../store/counter/counterActions'

function CounterAction() {
    const dispatch = useDispatch();
    return ( 
    <div className="action">
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
        
    )
}

export default CounterAction
