import './First.css'
import  MainSwitch from '../Main-Switch/Main-switch';
import XboxAchievment from '../Xbox Achievment/achievment';
import { useCounter } from '../CounterContext/CounterContext';

function First() {
  const { counter } = useCounter();
  let achievment = null;

  if (counter > 20) {
    achievment = <XboxAchievment />;
  }

  return (
<>
<div>next to is the number: {counter}</div>

<MainSwitch/>
{achievment}


</>
  )
}

export default First