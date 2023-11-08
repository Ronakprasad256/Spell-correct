import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const ClearText = () => {
        alert('Text cleared!')
        setText('');
    }

    const CopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))

    }
    
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState("")
    return (
      <div>
      
    <div className='container'>
          <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control sm:d-flex-row" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "#C0C0C0":"white", color:props.mode === "dark"? "white":"black" }} id="myBox" rows="14"></textarea>
          </div>
          <button className='btn btn-info my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-info my-2 mx-2' onClick={handleLoClick}>Convert to LoweCase</button>
          <button className='btn btn-secondary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className='btn btn-success my-2 mx-2' onClick={CopyText}>Copy Text</button>
          <button className='btn btn-danger my-2 mx-2' onClick={ClearText}>Clear Text</button>
      </div>
      <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter the text to preview"}</p>
            </div>
            

      </div>
  );
}
