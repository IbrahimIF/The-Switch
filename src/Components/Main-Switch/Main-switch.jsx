import './MainSwitch.css'
import { useState } from 'react';
import { useCounter } from '../CounterContext/CounterContext';

function MainSwitch() {
  const [isChecked, setIsChecked] = useState(false);
  const {incrementCounter} = useCounter();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    incrementCounter();
  };
  return (

<>
<div>
<label htmlFor="lightSwitch" className="wrap">
<input type="checkbox" checked={!isChecked} onChange={handleCheckboxChange} id="lightSwitch" name="lightSwitch" className="light-switch"/>
  <div className="panel">
    <div className="overlay"></div>
    <div className="screw top">
      <div className="screw_slit"></div>
    </div>
    <div className="hole">
      <div className="groove">
        <div className="switch">
          <div className="shadow-box top">
            <div className="shadow top"></div>
          </div>
          <div className="shadow-box bottom">
            <div className="shadow bottom"></div>
          </div>
          <div className="switch_top">
            <div className="outsetTop"></div>
          </div>
          <div className="switch_bottom">
            <div className="outsetBottom"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="screw bottom">
      <div className="screw_slit"></div>
    </div>
  </div>
</label>
</div>
</>
  )
}

export default MainSwitch