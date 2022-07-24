import React, {useState} from 'react'

export default function TextForm(props) {
    const handleonClick = (e)=>{
        
        console.log("You used onClick")
        let newText = text.toUpperCase();
        setText(newText);
        e.preventDefault();
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleonClick2 = (e)=>{
        // console.log("You used onClick")
        let newText = text.toLowerCase();
        setText(newText);
        e.preventDefault();
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleonClick3 = (e)=>{
        // console.log("You used onClick")
        let newText = "";
        setText(newText);
        e.preventDefault();
        props.showAlert("Text Cleared", "success");
    }
    const handleonClick4 = (e)=>{
        // console.log("You used onClick")
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success");
        
    }
    const handleonClick5 = (e)=>{
        // console.log("You used onClick")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        e.preventDefault();
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleonChange = (event)=>{
        console.log("You used onChange")
        setText(event.target.value);

    }
    const [text, setText] = useState("");
    // setText("HERE");
    return (
        <>
            <div className='container' style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleonChange} value={text} rows="8"></textarea>
                    </div>
                    <button  onClick={handleonClick} className="btn btn-primary my-1 mx-1">Convert To Uppercase</button>
                    <button  onClick={handleonClick2} className="btn btn-primary my-1 mx-1">Convert To Lowercase</button>
                    <button  onClick={handleonClick3} className="btn btn-primary my-1 mx-1">Clear Text</button>
                    <button  onClick={handleonClick4} className="btn btn-primary my-1 mx-1">Copy Text to Clipboard</button>
                    <button  onClick={handleonClick5} className="btn btn-primary my-1 mx-1">Remove Extra Spaces</button>
                </form>
            </div>
            <div className="container my-4" style={{backgroundColor: props.mode==='dark'?'#042743':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((e) => {return e.length!==0}).length} words</p>
                <p>{text.length} characters</p>
                <p>{text.split(".").length-1} sentences</p>
                <p>{0.008*text.length} minutes are required for reading this text.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something to get a preview"}</p>
            </div>
        </>
    )
}
