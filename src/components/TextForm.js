import React, { useState } from "react";
// import Welcome from "./Welcome";


function TextForm(props) {

//   const middleStyle = {              // CSs
//         textAlign: "center",
//     }

    const [text, setText] = useState("")
  

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText)
        props.showAlert("Text Converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText)
        props.showAlert("Text Converted to Lowercase", "success")
    }

    const clearText=()=>{
        setText("")
        props.showAlert("Text Cleared", "success")
    }

    return (
        <div>
            <div className="container" >
                
                <textarea
                    className="form-control mt-4"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    style={{"backgroundColor": props.mode==='dark'? '#151426' : 'white', 'color': props.mode==='dark'? 'white' : 'black' }}
                    value={text}
                    onChange={handleOnChange}
                ></textarea>

                <button className="btn btn-primary rightpadding mt-3" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary rightpadding mt-3" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary rightpadding mt-3" onClick={clearText}>ClearText</button>
            </div>
            <div className="container pt-2" style={{'color': props.mode==='dark'? 'white' : 'black'}}>
                <label htmlFor="count" className="pt-2">Total Characters {text.length}   </label>
                <br />  
                <label htmlFor="count" className="pt-2">Total Words {text.split(" ").filter(item=> {return item!==""}).length}</label>
            </div>
        </div>
    );
}

export default TextForm;
