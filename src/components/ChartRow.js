import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.title}</td>
        <td>{props.length ? props.length : "-"}</td>
        <td>{props.rating}</td>
        <td>{props.genre ? props.genre.name : "-"}</td>
        <td>{props.awards}</td>
        </tr>


    </React.Fragment>


)
}

export default ChartRow