import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component{
    constructor(){
        super()
        this.state = {

            moviesList: null

        }
    }

componentDidMount(){

    fetch("http://localhost:3001/api/movies")
    .then( res => res.json())
    .then(movies => {

        this.setState ({ moviesList: movies.data})

    console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", movies )

   
    })

    .catch(error => console.log(error))

}


render(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tbody>


                    { this.state.moviesList ? this.state.moviesList.map ((row, i) =>

                        <ChartRow {...row} key={i}  />) : <div> Loading... </div>
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Chart