import React from 'react';
import { Link } from 'react-router-dom';
import { RUTA_API } from '../constants';
import '../styles/recipe.css'

const Recipe = (props) => {
	const time = (minutes) => {
		return minutes > 59 ? `${(minutes/60).toFixed(0)}:${minutes%60 !== 0 ? minutes%60 < 10 ? '0'+minutes%60 : minutes%60 : "00"}` : minutes;
	}
	return ( <>
		<div class="recipeCard">
			<div class="picture" style={{backgroundImage: `url(${RUTA_API +'/'+ props.recipe._id+'.jpg'})`}}>
				<div class="avatar" style={{backgroundImage: `url(${props.recipe.userPic})`, display: `${props.own ? "none" : "inherit"}`}}>
				</div>
			</div>
			<div class="text">
				<h4 class="title">{props.recipe.title}</h4>
				<div class="data">
					<div class="time">
						<span><i class="far fa-clock"> </i> <span class="number">{time(props.recipe.duration)}</span></span>
						<span>{props.recipe.duration < 59 ? 'minutos' : props.recipe.duration == 60 ? 'hora' : 'horas'}</span>
					</div>
					<div class="likes">
						<span><i class="far fa-heart"> </i> <span class="number">{props.recipe.likes}</span></span>
						<span>likes</span>
					</div>
				</div>
				<div class="descripcion">
					{props.recipe.description}
				</div>
				<Link to={`/recipe/${props.recipe._id}`}><button class="btn">Ver receta</button></Link>
			</div>
		</div>
		
	</> );
}
 
export default Recipe;