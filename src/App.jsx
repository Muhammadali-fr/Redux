import { useSelector, useDispatch } from "react-redux";
import { increament, decrement, increamentByAmount, decrementByAmoun } from "./store/features/counterSlice";

const App = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increamentByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmoun(5))}>-5</button>
    </div>
  )
}

export default App