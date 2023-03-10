import data from './data/words.json'
import Card from './card';
import Select from './select';
import './App.css';
import './normalize.css';
import './skeleton.css';
import { useState,useEffect} from 'react';



function App() {
  const [filterQuestions,setFilterQuestions] = useState(data)
  const [currentWord,setCurrentWord] = useState(data[0])
  const [english,setEnglish] = useState(true);
  const [show,setShow] = useState (false)
  const [topic,setTopic]= useState("Food and Cooking")
  const [file,setFile] = useState('1')
  const [order,setOrder] = useState(0)

  const handleNewWord = ()=>{
    setOrder(prev=>  (prev+1< filterQuestions.length) ? prev+=1 : 0)
  }

  const changeTopic = (inputTopic,inputFile) =>{
    const selectFile = data.filter(item=>item.file===inputFile)
    const selectTopic  = selectFile.filter(item=>item.topic===inputTopic)
    const shuffledSelect = selectTopic.sort((a, b) => 0.5 - Math.random());
    localStorage.setItem('topic', JSON.stringify({file:inputFile,topic:inputTopic}));
    setFile(inputFile)
    setTopic(inputTopic)
    setOrder(0)
    setFilterQuestions(shuffledSelect)
  } 


  useEffect(()=>{
    setCurrentWord(filterQuestions[order])
    setShow(false)
  },[order])


  useEffect(() => {
    handleNewWord()
    console.log('nastavuji nove slovo ' + topic + " " + file)
  },[topic,file]);

  useEffect(() => {
    const localTopic = JSON.parse(localStorage.getItem('topic'));
    if (localTopic) {
      console.log(localTopic)
      changeTopic(localTopic.topic,localTopic.file)
    }
  }, []);

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
