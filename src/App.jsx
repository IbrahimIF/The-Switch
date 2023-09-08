import './Index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import First from './Components/Main Page/First';
import Second from './Components/Second/Second';
function App() {

  return (

<BrowserRouter>
  <Routes>
    <Route path="/" element={<First/>} />
    <Route path="/Second" element={<Second/>} />
  </Routes>
</BrowserRouter>
  )
}

export default App
