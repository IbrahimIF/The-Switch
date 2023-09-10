import './Index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import First from './Components/Main Page/First';
import Second from './Components/Second/Second';
import { CounterProvider } from './Components/CounterContext/CounterContext';
function App() {

  return (

<BrowserRouter>
<CounterProvider>
<Routes>
    <Route path="/" element={<First/>} />
    <Route path="/Second" element={<Second/>} />
  </Routes>
</CounterProvider>
</BrowserRouter>
  )
}

export default App
