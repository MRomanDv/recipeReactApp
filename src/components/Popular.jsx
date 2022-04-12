import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import classes from './Popular.module.css' 
import {Splide,SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
//@splidejs/splide/dist/css/splide.min.css


function Popular(){
   const [popular, setPopular] = useState([])
    
    useEffect(()=>{
       getPopular()

    },[])

    const getPopular = ()=>{
        //const deleteItem = localStorage.removeItem('popular') 
        const check = localStorage.getItem('popular')
       
        if(check){
            setPopular(JSON.parse(check))
        }else {
        const api = fetch(`https://api.spoonacular.com/recipes/random?apiKey=bdb25cdaa7e446af8f622a11cf0e4900&number=9`)
        .then((res)=> res.json())
        .then((data)=>{
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data)
        })
        } 
        
    }


    return ( 
        <section className={classes.popularsection}>
            <h2>Popular picks</h2>
            <Splide options={{perPage:4, drag:'free'}}>
             {popular.map((recipe) => {
                    return (
                    <SplideSlide key={recipe.id}>
                    <div className={classes.cardscontainer}>                  
                    <div className={classes.card}> 
                    <Link to={`/recipes/${recipe.id}`}>                      
                    <div className={classes.imgcontainer}><img src={recipe.image} alt="recipe" /></div>
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

export default Popular