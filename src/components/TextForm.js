// import React from "react"; // props method
import React, {useState} from 'react' //State

export default function TextForm(props) { // conver to Uppercase
    const handleUpClick = () =>{ // console.log("Uppercase was clicked" + text); //cleen console
        let newText = text.toUpperCase();
        setText(newText)
    }
    // convert to LowerCase
    const handleLoClick = () =>{ // console.log("Lowercase was clicked" + text); //cleen console
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{ // ("clear text" + text);
        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {  // copy text 
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {  // Remove Extra Spaces
        let newText = text.split(/[ ]+/); //use by Regex codes
        setText(newText.join(" "))
    }

    const handleOnChange = (event) =>{ // console.log('onChange');  //cleen console 
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // setText = "new text"; //wrong way to change the stste
    // setText  ("new text"); // correct way tochange the state
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="3" placeholder='Text Here....' ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-danger mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-danger mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split (" ").length} Minute read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox about to preview it here"}</p>
</div>
</>
  )
}
