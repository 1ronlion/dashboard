import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.Title}</td>
        <td>{props.Length}</td>
        <td>{props.Rating}</td>
        <td>{props.Categories}</td>
        <td>{props.Awards}</td>
        </tr>


    </React.Fragment>


)
}

export default ChartRow