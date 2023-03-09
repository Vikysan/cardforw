import React,{useState} from 'react'
import words from './data/words.json'

const Select = (props) => {

    const [files] = useState([...new Set(words.map(item=>item.file))])
    const [topics,setTopics] = useState([...new Set((words.filter(item=>item.file==='1')).map(item=>item.topic))])

    

    const onChange = (event) => {
        const value = event.target.value;
        setTopics([...new Set((words.filter(item=>item.file===value)).map(item=>item.topic))])
      };

    const onChangeTopics = (event) =>{
        const value = event.target.value;
    
        props.changeTopic(value)
    }

  return (
    <div>
      <select name="File" id="File" onChange={onChange}>
        {[...files].map(item=><option value={item}>{item}</option>)}
        </select>
        <select name="Topic" id="Topic" onChange={onChangeTopics}>
        {[...topics].map(item=><option value={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default Select
