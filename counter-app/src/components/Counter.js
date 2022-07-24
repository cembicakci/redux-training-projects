import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice' //reducer da tanımlanan fonskiyonlar çekilir.

function Counter() {

    const [amount, setAmount] = useState(3);

    const countValue = useSelector(state => state.counter.value); //counterSlice daki value.
    const dispatch = useDispatch(); //useDispatch hookuna reducer da yazdığımız action lar parametre olarak verilecek.
    return (
        <div>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br /> <br />
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
        </div>
    )
}

export default Counter