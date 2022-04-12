import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import classes from './Popular.module.css' 
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

function Veggie(){

    const [veggie,setVeggie]=useState([]) 
    
    useEffect(()=>{
        getVeggie()
    },[])

    function getVeggie(){
        //localStorage.removeItem('veggie')
        const checkInLocalStorage = localStorage.getItem('veggie')

        if(checkInLocalStorage) {
            setVeggie(JSON.parse(checkInLocalStorage))
        }else {
        const api = fetch('https://api.spoonacular.com/recipes/random?apiKey=bdb25cdaa7e446af8f622a11cf0e4900&number=9&tags=vegetarian')
        .then((res)=> res.json())
        .then((data)=>{
            localStorage.setItem('veggie',JSON.stringify(data.recipes))
            setVeggie(data.recipes)
        })
        }
    }
    return(
        <section className={classes.popularsection}>
            <h2>Veggie options</h2>
            <Splide options={{perPage:3, drag:'free'}}>
             {veggie.map((recipe) => {
                    return (
                    <SplideSlide key={recipe.id}>
                    <div className={classes.cardscontainer}>
                    <div className={classes.veggiecard}> 
                    <Link to={`/recipes/${recipe.id}`}>                      
                    <div className={classes.imgveggiescontainer}><img src={recipe.image} alt="recipe" /></div>
                    <div className={classes.text}><p>{recipe.title}</p></div>
                    </Link>
                    </div>
                    </div>
                    </SplideSlide>
                    )
            })}
            </Splide>
        </section>
    )
}

export default Veggie 




