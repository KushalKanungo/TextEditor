import React from 'react'



function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
    const mystyle={
        position: "absolute",
        width: "100vw"
}
    
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style={mystyle}>
       <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
}

export default Alert
