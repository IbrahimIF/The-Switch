import './First.css'
import  MainSwitch from '../Main-Switch/Main-switch';
import XboxAchievment from '../Xbox Achievment/achievment';
import { useCounter } from '../CounterContext/CounterContext';
import Subtitles from '../Subtitle/Subtitles';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function First() {
  const { counter } = useCounter();
  const navigate = useNavigate();
  const [fadeout, setFadeout] = useState(false);

  let achievment = null;
  let subtitles = null;
  let custom = null;

  if (counter > 5) {
    achievment = <XboxAchievment />;
  }

  if (counter > 10){
    subtitles = <Subtitles />;
  }

  if (counter > 2) {
    achievment = <XboxAchievment />;
  }

  if (counter > 27){
    custom = <XboxAchievment />;

  }


  useEffect(() => {
    if (counter > 30) {
      const timer = setTimeout(() => {
        navigate('/Second');
      }, 400); 

      return () => clearTimeout(timer);
    }
  }, [navigate]);


  setTimeout(() => {
      setFadeout(true);
    }, 6);

  return (
<>
<div className={`fade-container ${fadeout ? 'fadeout' : ''}`} >
<MainSwitch/>
{subtitles}
{achievment}
{custom}
</div>
</>
  )
}

export default First