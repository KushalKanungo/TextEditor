import React, { useState } from "react";
import Welcome from "./Welcome";


function MiddleContent() {

  const middleStyle = {              // CSs
        textAlign: "center",
    }

    const [text, setText] = useState("")
  

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText)
    }

    const handleLoClick = () => {
        let upperCaseText = text.toLowerCase();
        setText(upperCaseText)
    }

    return (
        <div>
            <div className="container" style={middleStyle}>
                <Welcome name="Kushal" />
                <textarea
                    className="form-control my-5"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    style={{ border: "solid black 2px" }}
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
            </div>
            <div className="container">
                <label htmlFor="count" style={{ "padding": "20px" }}>Total Chracters {text.length}</label>
                <label htmlFor="count">Total Words {text.split(" ").length}</label>
            </div>
        </div>
    );
}

export default MiddleContent;
