import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../store/redux/reducer/countReducer';

import { Link } from 'react-router-dom';


const Counter = () => {
    const count = useSelector((state: {counter: {value: number}}) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <br />
            <Link to="/counter">Counterページへ移動</Link>
            <br />
            <Link to="/counter2">Counter2ページへ移動</Link>
        </>
    )
}

export default Counter;