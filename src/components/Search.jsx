import {useNavigate} from 'react-router-dom'
import classes from './Search.module.css'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

function Search() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e)=> {
        e.preventDefault()
        navigate("/searched/" + input)
    }

    return (
        <div className={classes.searchcontainer}>
            <form onSubmit={submitHandler}>
            <FaSearch className={classes.icon} />
           <input type="text" placeholder='search for your fav food' onChange={(event)=>{setInput(event.target.value)}} /> 
           </form>
         </div>
    )
}

export default Search 