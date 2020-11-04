import React from 'react';
import './Result.css';

function Result(props){

    return(
        <div className="result">
            {  
                (()=>{
                    try {
                        if(props.result.length === 0)
                        return <p>0</p>
                        else
                        return <p>{props.result}</p>
                    } catch (error) {
                        return <p>{error}</p>
                    }
                })()
            }
        </div>
    )
}

export default Result;