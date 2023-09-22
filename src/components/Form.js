import React, { useState } from 'react'

export default function Form(props) {
  const [text, setText] = useState("")
  const handleUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleDown = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const change = (event) => {
    setText(event.target.value)
  }
  // const textRemover = ()=>{                    |||||||||| Try To Implement in future |||||||||||||||
  //   let a = " ";
  //   setText(a)   
  //   document.getElementById('floatingTextarea2').onClick = ''
  // }  

  const handleSpace = () => {
    let newText = text.split(" ").join("");
    setText(newText);
  }
  const clearText = () => {   //Difference b/w clearText & textRemover is textRemover removes the initial/default text of Textbox 
    let a = ""
    setText(a)
  }
  const copyText = () => {
    var copyText = document.getElementById("floatingTextarea2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value).then(() => {
      // alert("successfully copied");
      var copyBtn = document.getElementById("copyBtn")
      copyBtn.innerHTML = "Copied!"
      setTimeout(() => {
        copyBtn.innerHTML = "Copy to Clipboard"
      }, 2000)
    })
      .catch(() => {
        alert("something went wrong");
      });
    document.getSelection().removeAllRanges()
    // // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  return (
    <div className="container my-5">
      <div className="form-floating">
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Enter Your Text Below</h1>
        <textarea className="form-control" value={text} /*onClick = {textRemover} */ onChange={change} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '300px', border: props.mode === 'light' ? '5px solid black' : '5px solid white', backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-3" onClick={handleUp}>Convert To Uppercase</button>
      <button className="btn btn-danger mx-2 my-3" onClick={handleDown}>Convert To Lowercase</button>
      <button className="btn btn-success mx-2 my-3 px-4" onClick={handleSpace}>Remove Spaces</button>
      <button className="btn btn-warning text-white mx-2 my-3 px-5" onClick={clearText}>Clear Text</button>
      <button className="btn btn-info text-light mx-2 my-3 btn-blockasd custom-btn-form" id="copyBtn" onClick={copyText}>Copy Text</button>
      <div className="card container" style={{ marginTop: '30px', width: '40rem', height: '20rem', border: props.mode === 'light' ? '5px solid black' : '5px solid white', backgroundColor: props.mode === 'light' ? 'white' : '#212529' }}>
        <div className="card-body">
          <h1 className="card-title text-center" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Text Info</h1>
          <h3 className="card-subtitle mb-2 text-muted text-center">Word Counter</h3>
          {/* <h4 className="card-text text-muted text-center" id="wordCounter">{text.length > 0 ? text.split(" ").length : '0'}</h4> */}
          <h4 className="card-text text-muted text-center" id="wordCounter">{text.split(/\s/).filter((element)=>{return element.length!==0}).length}</h4>
          <h3 className="card-subtitle mb-2 text-muted text-center">Character Counter</h3>
          <h4 className="card-text text-muted text-center">{text.length}</h4>
        </div>
      </div>
    </div>
  )
}