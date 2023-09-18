import './Second.css'
import { useCounter } from '../CounterContext/CounterContext';
import React, { useState, useEffect } from 'react';
import XboxAchievment from '../Xbox Achievment/achievment';

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
import Achievement from '../Xbox Achievment/achievment';


function Second() {
  const { counter1, incrementCounter1, 
          counter2, incrementCounter2, 
          counter3, incrementCounter3, 
          counter4, incrementCounter4, 
          counter5, incrementCounter5, 
          counter6, incrementCounter6, 
          counter7, incrementCounter7, 
          counter8, incrementCounter8, 
          counter9, incrementCounter9, 
          counter10, incrementCounter10, 
          counter11, incrementCounter11, 
          counter12, incrementCounter12,
          totalCounter,
        } = useCounter();

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

  let custom = null;
  

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

    if (counter1 < 1){
      incrementCounter1();
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

    if (counter2 < 1){
      incrementCounter2();
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

  if (counter3 < 1){
    incrementCounter3();
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

  if (counter4 < 1){
    incrementCounter4();
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

  if (counter5 < 1){
    incrementCounter5();
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

  if (counter6 < 1){
    incrementCounter6();
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

  if (counter7 < 1){
    incrementCounter7();
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

  if (counter8 < 1){
    incrementCounter8();
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
  if (counter9 < 1){
    incrementCounter9();
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

  if (counter10 < 1){
    incrementCounter10();
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

  if (counter11 < 1){
    incrementCounter11();
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

  if (counter12 < 1){
    incrementCounter12();
  }
};


if (totalCounter === 12){
  custom = <XboxAchievment />;

}


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

{custom}
<p>{totalCounter}</p>
</div>
</>
  )
}

export default Second