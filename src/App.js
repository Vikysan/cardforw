import data from './data/words.json'
import Card from './card';
import Select from './select';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { useState,useEffect} from 'react';



function App() {
  const [currentWord,setCurrentWord] = useState(data[0])
  const [english,setEnglish] = useState(true);
  const [show,setShow] = useState (false)
  const [topic,setTopic]= useState("Food and Cooking")
  const [file,setFile] = useState('1')

  const handleNewWord = ()=>{
    const selectFile = data.filter(item=>item.file===file)
    const selectTopic  = selectFile.filter(item=>item.topic===topic)
    const randomWordNumber = Math.floor(Math.random() * selectTopic.length)
    setCurrentWord(selectTopic[randomWordNumber])
    setShow(false)
  }

  const changeTopic = (topic,file) =>{
    setFile(file)
    setTopic(topic)

  } 

  useEffect(() => {
    localStorage.setItem('topic', JSON.stringify(topic));
    handleNewWord()
  },[topic,file]);

  useEffect(() => {

    handleNewWord()
  },[]);


  return (
    <div className="App">
        <Select changeTopic = {changeTopic} />
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
