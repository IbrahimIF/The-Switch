import { createContext, useContext, useState, useEffect} from 'react';

// Create a context
const CounterContext = createContext();

// Create a custom hook to access the context
export const useCounter = () => useContext(CounterContext);

// CounterContext component
export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const [totalCounter, setTotalCounter] = useState(0);
  
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [counter8, setCounter8] = useState(0);
  const [counter9, setCounter9] = useState(0);
  const [counter10, setCounter10] = useState(0);
  const [counter11, setCounter11] = useState(0);
  const [counter12, setCounter12] = useState(0);

  const incrementCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const incrementCounter1 = () => {
    setCounter1(prevCounter1 => prevCounter1 + 1);
  };
  const incrementCounter2 = () => {
    setCounter2(prevCounter2 => prevCounter2 + 1);
  };
  const incrementCounter3 = () => {
    setCounter3(prevCounter3 => prevCounter3 + 1);
  };
  const incrementCounter4 = () => {
    setCounter4(prevCounter4 => prevCounter4 + 1);
  };
  const incrementCounter5 = () => {
    setCounter5(prevCounter5 => prevCounter5 + 1);
  };
  const incrementCounter6 = () => {
    setCounter6(prevCounter6 => prevCounter6 + 1);
  };
  const incrementCounter7 = () => {
    setCounter7(prevCounter7 => prevCounter7 + 1);
  };
  const incrementCounter8 = () => {
    setCounter8(prevCounter8 => prevCounter8 + 1);
  };
  const incrementCounter9 = () => {
    setCounter9(prevCounter9 => prevCounter9 + 1);
  };
  const incrementCounter10 = () => {
    setCounter10(prevCounter10 => prevCounter10 + 1);
  };
  const incrementCounter11 = () => {
    setCounter11(prevCounter11 => prevCounter11 + 1);
  };
  const incrementCounter12 = () => {
    setCounter12(prevCounter12 => prevCounter12 + 1);
  };

  useEffect(() => {
    const total = counter1 + counter2 + counter3 + counter4 + counter5 + counter6 + counter7 + counter8 + counter9 + counter10 + counter11 + counter12;

    setTotalCounter(total);
  }, [counter1, counter2, counter3, counter4, counter5, counter6, counter7, counter8, counter9, counter10, counter11, counter12]);

  const resetCounter = () => {
    setCounter(0);
    setTotalCounter(0);
    setCounter2(0);

    setcounter1(0);
    setcounter2(0);
    setcounter3(0);
    setcounter4(0);
    setcounter5(0);
    setcounter6(0);
    setcounter7(0);
    setcounter8(0);
    setcounter9(0);
    setcounter10(0)
    setcounter11(0)
    setcounter12(0)
  };

  const value = {
    counter,
    incrementCounter,
    resetCounter,
    totalCounter,

    counter1,
    incrementCounter1,
    counter2,
    incrementCounter2,
    counter3,
    incrementCounter3,
    counter4,
    incrementCounter4,
    counter5,
    incrementCounter5,
    counter6,
    incrementCounter6,
    counter7,
    incrementCounter7,
    counter8,
    incrementCounter8,
    counter9,
    incrementCounter9,
    counter10,
    incrementCounter10,
    counter11,
    incrementCounter11,
    counter12,
    incrementCounter12,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}