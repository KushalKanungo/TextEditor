import React from 'react'

function Welcome(props) {
    return (
        <div>
            <h1 className="pt-4" style={{'color': props.mode==='dark'? 'white' : 'black'}}>Hello, {props.name}</h1>
        </div>
    )
}

export default Welcome
