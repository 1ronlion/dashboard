import React from "react";
import Vader from "../assets/images/darth-vader.jpg"

function NotFound(){
    return(

        <div className="card-body">
            <div className="text-center">
            <h1>404 Not Found</h1>
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={Vader} alt=" Star Wars - Mandalorian "/>
            </div>
        </div>

    )
}

export default NotFound