import React from "react";
import { Link } from "react-router-dom";

function Genre (props){
return(

            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                    <Link to={`/categories/${props.id}`}> {props.name} </Link>
                    </div>
                </div>
            </div>

)
}

export default Genre