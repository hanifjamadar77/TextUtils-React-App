import React, { useState } from 'react'

export default function TextForm(probs) {
    const handleUpClick = ()=>{
        // let newtext = text.toUpperCase();
        // setText(newtext)

        let newtext = document.getElementById('textArea');
        newtext = text.toUpperCase()
        setText(newtext)
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
        probs.showAlert("text in Upper case"," success");
        }
    }
    const handleLowClick = ()=>{
        // console.log("Upper case button is clicked");
        let newtext = text.toLocaleLowerCase();
        setText(newtext)
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
        probs.showAlert("text in Lower case"," success");
        }
    }

    const handleSentanceCaseClick = ()=>{
        let newtext = document.getElementById('textArea');
        newtext = text.toLocaleLowerCase().charAt(0).toUpperCase() + text.toLocaleLowerCase().slice(1);
        setText(newtext)
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
            probs.showAlert("sentance case applied"," success");
        }
    }

    const handleClearClick= ()=>{
        setText ('');
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
            probs.showAlert("text cleared"," success");
        }
    }

    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
        
            probs.showAlert("text copied"," success");
        }
    }

    const handleExtraSpacesClick = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        if(text===""){
            probs.showAlert("Please enter text first","warning")
        }else{
            probs.showAlert("Extra spaces are removed"," success");
        }
    }
    
    const handleTextClick= (event)=>{
        // console.log("On clicked")
        setText(event.target.value)
    }

    const[text, setText] = useState("");

    return (
        <>
        <div className="container my-4" id='head'>
            <h1 >{probs.heading}</h1>
            <div className="form-floating mb-3">
                <textarea className="form-control " id='textaArea' value={text} placeholder="Leave a comment here"  rows="10" onChange={handleTextClick} style={{backgroundColor:probs.mode==='dark' ? '#cdcaed' : 'light'}}></textarea>
            </div>
            <button className='btn btn-primary mx-3 mb-4' onClick={handleUpClick}>Click for Uppercase</button>
            <button className='btn btn-primary mx-3 mb-4 ' onClick={handleLowClick}>Click for Lowercase</button>
            <button className='btn btn-primary mx-3 mb-4' onClick={handleSentanceCaseClick}>Click for SentanceCase</button>
            <button className='btn btn-primary mx-3 mb-4' onClick={handleClearClick}>Click for Clear</button>
            <button className='btn btn-primary mx-3 mb-4' onClick={handleCopyClick}>Click for Copy</button>
            <button className='btn btn-primary mx-3 mb-4' onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>

        <div className={`container my-5 text-${probs.mode==='dark' ? 'light':'dark'}`}>
            <div className='box' id='head'>
                    <h2 className='mx-3'>Text Summary</h2>
                    <p className='mx-5'><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words <b>{text.length}</b> Charactors</p>
            </div>

        </div>

        <div className={`container my-5 text-${probs.mode==='black' ? 'white':'black'}`}>
            <div className='preview box box1'>
                    <h2 className='mx-3'>Preview</h2>
                    <p>{text}</p>
            </div>

        </div>
        </>
    )
}
