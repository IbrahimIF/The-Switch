import { useState } from 'react';
import { useCounter } from '../CounterContext/CounterContext';
import './Subtitles.css'
function Subtitles() {
  const {counter} = useCounter();
  let text = String;
if(counter > 10){
  text = "- OI -";

}

if(counter > 12){
  text = "- LISTEN -";

  }

if(counter > 15){
  text = "- stop flickering the lights -";

  }
if(counter > 17){
  text = "- relax with flickering the lights -";

}

if(counter > 21){
  text = "- STOP FLICKERING THE LIGHTS -";

}

if(counter > 30){
  text = "- If you really like flicking switches alot go play this game-";

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