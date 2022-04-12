import classes from './HomeIcon.module.css'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function HomeIcon(){
    return (
        <Link to={"/"} className={classes.a}>
           <div className={classes.iconcontainer}>
            <AiOutlineHome />
            <div className={classes.hometext}><h3 className={classes.home}>HomePage</h3></div> 
           </div>

        
        </Link>
    )
}

export default HomeIcon