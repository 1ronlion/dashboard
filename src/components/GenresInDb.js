import React, {Component} from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
    
	constructor(){
		super()

		this.state = {

			genresList : []

		}
	}

	componentDidMount() {

		fetch("http://localhost:3001/api/genres")

		.then(respuesta => {
				
		return respuesta.json()})
		
		.then(genres =>{

		this.setState({genresList: genres.data})

        console.log("🚀 ~ file: GenresInDb.js ~ line 27 ~ GenresInDb ~ componentDidMount ~ genres.data}", genres.data)

		})



	}

	cambiarBackground(){
		let background = document.querySelector(".genres-background")
		background.classList.add('bg-secondary')
	}

	render(){
	return(

        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 onMouseOver = {()=> this.cambiarBackground()} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body genres-background">
									<div className="row">

										{this.state.genresList.map((genre, i) => {

											return  <Genre {...genre} key={i} />
										})
										}
									</div>
								</div>
							</div>
						</div>
					

    )
}
}
export default GenresInDb