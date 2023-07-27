import React from "react";
import {useLocation} from "react-router-dom"

function Home( {login} ){

    let location = useLocation()

    return(
        <div>
            <p>This is the Home Page</p>
            <button onClick={login}>Login</button>
            {/* {location.state} */}
        </div>
    )
}
export default Home