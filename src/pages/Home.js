import React from "react";
import {useNavigate} from "react-router-dom"

function Home( {logIn} ){

    let navigate = useNavigate()

    return(
        <div>
            <p>This is the Home Page</p>
            <button onClick={()=>{
                logIn()
                navigate('/dashboard')
            }}>Login</button>
            {/* {location.state} */}
        </div>
    )
}
export default Home