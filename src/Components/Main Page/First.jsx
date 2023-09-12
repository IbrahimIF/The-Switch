import './First.css'
import  MainSwitch from '../Main-Switch/Main-switch';
import XboxAchievment from '../Xbox Achievment/achievment';
import { useCounter } from '../CounterContext/CounterContext';
import Subtitles from '../Subtitle/Subtitles';
function First() {
  const { counter } = useCounter();
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
  return (
<>
<MainSwitch/>
{subtitles}
{achievment}
{custom}
</>
  )
}

export default First