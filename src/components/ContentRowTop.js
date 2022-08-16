import React from "react"
import CardList from "./CardList"
import LastMovie from "./LastMovie"
import GenresInDb from "./GenresInDb"
import SearchMovies from "./SearchMovies"
			
function ContentRowTop (){
    
    return(
            
            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
			        <CardList />
					<div className="row">
					<SearchMovies />
					<LastMovie />
					<GenresInDb />
					</div>
			</div>


    )
}

export default ContentRowTop