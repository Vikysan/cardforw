import data from './data/person.json'
import Card from './card';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { useState,useEffect} from 'react';



function App() {
  const [currentWord,setCurrentWord] = useState(data[0])
  const [english,setEnglish] = useState(true);
  const [show,setShow] = useState (false)

  const handleNewWord = ()=>{
    const randomWordNumber = Math.floor(Math.random() * data.length)
    setCurrentWord(data[randomWordNumber])
    setShow(false)
  }

  useEffect(() => {
    handleNewWord()
  },[]);

  return (
    <div className="App">
      <div className='container' style={{ position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'}}> 

      <Card
      english = {english}
      word = {currentWord}
      show = {show}/>
    
  <button onClick={()=>setEnglish(prev=>!prev)}>{english ? 'EN' : 'CZ'}</button>
  <button onClick={()=>setShow(prev=>!prev)}>{!show ? 'Show' : 'Hide'}</button>
  <button onClick={handleNewWord}>Next</button>
      </div>
    </div>
  );
}

export default App;
