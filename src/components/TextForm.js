import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUppercaseClick = () => {
    
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper case", "success");
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowercaseClick = () => {
    
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case", "success");
    
  };

  const removeExtraSpace = () => {
   
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra space", "success");
    
  };

  const handleClear = () => {
      setText("");
      props.showAlert("Cleared all", "success");
    
  };

  const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
  };

  const [text, setText] = useState('');

  // Calculate word count
  const wordCount = text.length === 0 ? 0 : text.trim().split(/\s+/).length;

  // Calculate reading time
  const wordsPerMinute = 125; // Average reading speed
  const totalReadingTime = wordCount / wordsPerMinute;
  const minutes = Math.floor(totalReadingTime);
  const seconds = Math.floor((totalReadingTime - minutes) * 60);

  // Dynamic text color based on background color
  const textColor = document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === '' ? 'black' : 'white';

  return (
    <>
      <div className="container" style={{ color: textColor }}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#414470',

              color: textColor
            }}
            onChange={handleOnChange}
            value={text}
            placeholder='Enter text here'
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear All</button>
      </div>
      <div className="container my-3" style={{ color: textColor }}>
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>You can read this in approximately {minutes} minute{minutes !== 1 ? 's' : ''} and {seconds} second{seconds !== 1 ? 's' : ''}.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
}