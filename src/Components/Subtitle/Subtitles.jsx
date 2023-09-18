import { useState } from 'react';
import { useCounter } from '../CounterContext/CounterContext';
import { useNavigate } from 'react-router-dom';

import './Subtitles.css'
function Subtitles() {
  const navigate = useNavigate();
  const {counter} = useCounter();
  let text = String;
if(counter > 10){
  text = "- OI -";

}

if(counter > 12){
  text = "- CAN'T YOU HEAR ME -";

  }

if(counter > 15){
  text = "- STOP flickering the lights -";

  }
if(counter > 17){
  text = "- relax with it -";

}

if(counter > 21){
  text = "- STOP FLICKERING THE LIGHTS -";

}

if(counter > 30){
  text = "- If you really like messing with switches alot go try this thing out-";
}



  return (

<>
<div>
<div className="text"> {text} </div>
</div>
</>
  )
}

export default Subtitles