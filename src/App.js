import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuestionID from './components/Question';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  
  const val = [
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ];
  const valLen = val.length - 1;


  const previousQ = ()=>{
    setCount(count - 1)
  }

  const nextQuestion = ()=>{
      setCount(count + 1)
  }

 

  return (
    <div className='App'>
    <Navbar nextQuestion={nextQuestion} previousQ={previousQ} count={count} valLen={valLen} />
<QuestionID setData={setData}  loading={loading} setLoading={setLoading} count={count} data={data} val={val} />
    </div>
  );
}

export default App;
