import './First.css'
import  MainSwitch from '../Main-Switch/Main-switch';
function First() {

  return (

<>
<MainSwitch />
<div className='nesting parent'>
    <p>yo</p>
</div>
</>
  )
}

export default First