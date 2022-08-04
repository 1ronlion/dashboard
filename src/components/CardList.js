import React from "react"
import Card from "./Card"

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-film'
}

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cardProps = [moviesInDB, totalAwards, actorsQuantity]

function CardList () {

return(

	<div className="row">

	{

		cardProps.map((data, i) => {

		return	<Card data ={data} key= {i} />

		})

	}

	</div>

    
)
}

export default CardList

