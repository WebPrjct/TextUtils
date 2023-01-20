// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter here....");

    const convertToUp =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success")
    }
    const convertToLo =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase","success")
        
    }

    const clearText =()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success")
    }

    const RemoveSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed ","success")
    }

    const handleOnChange=(event)=>{
        console.log("changed..")
        setText(event.target.value);
    }

    

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
    </div>
    <div className='container'>
        <button className="btn btn-primary mx-2" onClick={convertToUp}>To uppercase..</button>
        <button className="btn btn-primary mx-2" onClick={convertToLo}>To LowerCase..</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={RemoveSpace}>Remove Extra pace</button>
    </div>
    

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Charechter</p>
        <p>{0.008 * text.split(" ").length} Minitus to read</p>
        <h2>preview</h2>
        <p>{text.length>0? text : "Enter your text in the box above to preview it here"}</p>
    </div>
    
    </>
  )
}
