import './Second.css'
import { useCounter } from '../CounterContext/CounterContext';
import React, { useState, useEffect } from 'react';

import Jake from '../../assets/audio/Jake the Dog Laughing at his own Joke.mp3';
import vader from '../../assets/audio/Darth vader screaming noooo.mp3';
import idubzz from '../../assets/audio/IDubbbzTV.mp3';
import djkhalid from '../../assets/audio/Lets go golfing.mp3';
import screaming from '../../assets/audio/Man Screaming - CEEDAY Sound Effect (HD).mp3';
import cow from '../../assets/audio/Minecraft cow sound effect.mp3';
import Monday from '../../assets/audio/Monday left me broken cat (4k enhanced).mp3';
import oof from '../../assets/audio/Roblox Death Sound - OOF.mp3';
import shrek from '../../assets/audio/SomeBODY Once Told Me.mp3';
import smurfcat from '../../assets/audio/We live, we love, we lie.mp3';
import dog from '../../assets/audio/What the dog doin.mp3';
import sonic from '../../assets/audio/Youre too slow.mp3'

import light from '../../assets/audio/light-switch-81967.mp3';


function Second() {
  const [Start, setStart] = useState(true);
  const [audio1] = useState(new Audio(Jake));
  const [audio2] = useState(new Audio(vader));
  const [audio3] = useState(new Audio(idubzz));
  const [audio4] = useState(new Audio(djkhalid));
  const [audio5] = useState(new Audio(screaming));
  const [audio6] = useState(new Audio(cow));
  const [audio7] = useState(new Audio(Monday));
  const [audio8] = useState(new Audio(oof));
  const [audio9] = useState(new Audio(shrek));
  const [audio10] = useState(new Audio(smurfcat));
  const [audio11] = useState(new Audio(dog));
  const [audio12] = useState(new Audio(sonic));

  

  const switchOne = () => {
    const audio = new Audio(light);
    audio.play();
    setStart(!Start);
    

    if (Start) {
      audio1.play();
    } else {
      audio1.pause();
      audio1.currentTime = 0;
    }
  };

  


const switchTwo = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

    if (Start) {
      audio2.play();
    } else {
      audio2.pause();
      audio2.currentTime = 0;
    }
};

const switchThree = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio3.play();
  } else {
    audio3.pause();
    audio3.currentTime = 0;
  }
};

const switchFour = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio4.play();
  } else {
    audio4.pause();
    audio4.currentTime = 0;
  }
};

const switchFive = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio5.play();
  } else {
    audio5.pause();
    audio5.currentTime = 0;
  }
};

const switchSix = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio6.play();
  } else {
    audio6.pause();
    audio6.currentTime = 0;
  }
};

const switchSeven = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio7.play();
  } else {
    audio7.pause();
    audio7.currentTime = 0;
  }
};

const switchEight = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio8.play();
  } else {
    audio8.pause();
    audio8.currentTime = 0;
  }
};

const switchNine = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio9.play();
  } else {
    audio9.pause();
    audio9.currentTime = 0;
  }
};

const switchTen = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio10.play();
  } else {
    audio10.pause();
    audio10.currentTime = 0;
  }
};

const switchEleven = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    

  if (Start) {
    audio11.play();
  } else {
    audio11.pause();
    audio11.currentTime = 0;
  }
};

const switchTwelve = () => {
  const audio = new Audio (light);
  audio.play();
  setStart(!Start);
    
  if (Start) {
    audio12.play();
  } else {
    audio12.pause();
    audio12.currentTime = 0;
  }
};

return (
<>
<audio id="myAudio">
  <source src={Jake} type="audio/mpeg"></source>
  <source src={vader} type="audio/mpeg"></source>
  <source src={idubzz} type="audio/mpeg"></source>
  <source src={djkhalid} type="audio/mpeg"></source>
  <source src={screaming} type="audio/mpeg"></source>
  <source src={cow} type="audio/mpeg"></source>
  <source src={Monday} type="audio/mpeg"></source>
  <source src={oof} type="audio/mpeg"></source>
  <source src={shrek} type="audio/mpeg"></source>
  <source src={smurfcat} type="audio/mpeg"></source>
  <source src={dog} type="audio/mpeg"></source>
  <source src={sonic} type="audio/mpeg"></source>

  <source src={light} type="audio/mpeg"></source>
</audio>




<div className= "fadein">

<div className="container">

<div>
<div className="switches">
      <input type="checkbox" onClick={switchOne}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchTwo} />
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchThree} />
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchFour}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchFive}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchSix}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>


<div>
<div className="switches">
      <input type="checkbox" onClick={switchSeven}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchEight}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchNine}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchTen}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchEleven}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

<div>
<div className="switches">
      <input type="checkbox" onClick={switchTwelve}/>
      <div className="shadowes"/>
      <label></label>
  </div> 
</div>

</div>
</div>
</>
  )
}

export default Second