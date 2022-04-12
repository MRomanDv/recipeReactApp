import classes from './recipe.module.css'
import { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'



function Recipe(){
    const [details,setDetails] = useState({}) 
    const [active,setActive] = useState('instructions')
    let params = useParams()

    const fetchDetails = ()=> {

        const getItem = localStorage.getItem('recipe')
        if(getItem){
            setDetails(JSON.parse(getItem))
        }else {
            const api = fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=bdb25cdaa7e446af8f622a11cf0e4900&number=9`)
        .then((res)=> res.json())
        .then((data)=>{
            setDetails(data)
            localStorage.setItem('instructions',JSON.stringify(data))
            console.log(data)
        })
        }
        
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])



    return (
        <section className={classes.recipecontainer}>
            <div className={classes.box1}>
                <div className={classes.title}><h3>{details.title}</h3></div>
                <div className={classes.imgcontainer}><img src={details.image} alt={details.title} /></div>
            </div>
            <div className={classes.box2}>
                <div className={classes.btnbox}>
                    <button className={active === 'instructions' ? classes.active : classes.button} onClick={()=> setActive('instructions')}>instructions</button>
                    <button className={active === 'summary' ? classes.active : classes.button} onClick={()=> setActive('summary')}>summary</button>
                </div>
                <div className={classes.textinfo}>
                    {active == 'summary' && (
                        <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
                    )}
                    {active == 'instructions' && (
                        <p dangerouslySetInnerHTML={{__html:details.instructions}}></p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Recipe