import {NavLink} from 'react-router-dom'
import classes from './Category.module.css'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'

function Category() {
    return (
        
        <div className={classes.linkscontainer}>
           <NavLink  to={"/cuisine/italian"} className={({isActive})=> isActive ? classes.active : classes.iconescontainer}>
            <div>
                <FaPizzaSlice className={classes.icon} />
                <h3 className={classes.icontitle}>italian</h3>
            </div> 
            </NavLink>
            <NavLink to={"/cuisine/American"} className={({isActive})=> isActive ? classes.active : classes.iconescontainer}>
            <div>
                <FaHamburger className={classes.icon} />
                <h3 className={classes.icontitle}>American</h3>
            </div>
            </NavLink>
            <NavLink to={"/cuisine/Thai"} className={({isActive})=> isActive ? classes.active : classes.iconescontainer}>
                <div>
                <GiNoodles className={classes.icon} />
                <h3 className={classes.icontitle}>Thai</h3>
            </div>
            </NavLink>
            <NavLink to={"/cuisine/japanese"} className={({isActive})=> isActive ? classes.active : classes.iconescontainer}>
            <div>
                <GiChopsticks className={classes.icon} />
                <h3 className={classes.icontitle}>japanese</h3>
            </div> 
            </NavLink>
        </div> 
        
    )
}



export default Category