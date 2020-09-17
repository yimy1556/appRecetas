import React, {useState} from 'react';
import Header from "../components/Header"
import {connect} from 'react-redux'
import "../styles/Home.css"
import homeTitle from "../images/homeTitle.png"
import DietBubble from "../components/DietBubble"
import homeBackgroundOne from "../images/homeBackgroundOne.png"
import homeBackgroundTwo from "../images/homeBackgroundTwo.png"
import Footer from '../components/Footer';

const Home = (props) => {
  
  const [categories,setCategories] = useState({
    categories:["dietaketo", "vegetariana", "vegana","pecetariana", "paleo", "otros"]
  })
    
  
    return (
        <>
			<Header />
       <div id="space" style={{ height:"27vh"}}></div>
          <img id="homeBackgroundOne" src={homeBackgroundOne}/>
          <img id="homeBackgroundTwo" src={homeBackgroundTwo}/>
            <div id="homeTitle" >
              <img src={homeTitle}></img>
            </div>
            <div id="AllCategories">
              {categories.categories.map(conjunto => {
				  return (
					<div id="categorie" key={conjunto} >
                      <DietBubble bubble={conjunto}/>
                  	</div>
                  )
				})}
            </div>
			<Footer/>
          </>
    )
}

const mapStateToProps = state => {
  return{

  }
}

export default connect(mapStateToProps) (Home)
