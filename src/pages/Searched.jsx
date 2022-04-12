import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import classes from './Cuisine.module.css'
import { Link } from 'react-router-dom'

function Searched(){
    const [searchedRecipies, setSearchedRecipies] = useState([])
    let params = useParams()
    const getSearched = (name)=>{
        const api = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bdb25cdaa7e446af8f622a11cf0e4900&number=9&query=${name}`)
        .then((res)=> res.json())
        .then((data)=> {
            setSearchedRecipies(data.results) 
        })
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

    return (
        <section className={classes.grid}>
            {searchedRecipies.map((item)=>{
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

export default Searched