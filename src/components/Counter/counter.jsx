
import CounterAction from './counterAction';
import './counter.css'
import { useSelector } from 'react-redux';
function Counter() {
  const count = useSelector(state =>state.counterReducer.counter)
  return (
    <div className="counter">
      <h3>{count}</h3>
     <CounterAction />
    </div>
  );
}
export default Counter;
