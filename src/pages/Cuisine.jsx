import classes from './Cuisine.module.css'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GiClawSlashes } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom'

function Cuisine(){

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

   const getCuisine = (name)=>{
       const api = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bdb25cdaa7e446af8f622a11cf0e4900&number=9&cuisine=${name}`)
       .then((res)=> res.json())
       .then((data)=> {
           setCuisine(data.results) 
           console.log(data)
       })
   }
   useEffect(()=>{
       getCuisine(params.type)
   },[params.type])


   //JSX
    return (
        <section className={classes.grid}>
            {cuisine.map((item)=>{
                return <div key={item.id}>
                    <div className={classes.card}>
                        <Link to={`/recipes/${item.id}`}>
                        <div className={classes.imgcontainer}><img src={item.image} /></div>
                        <div className={classes.title}>{item.title}</div>
                        </Link>
                    </div>
                </div>
            })}
        </section>
    )
}

export default Cuisine