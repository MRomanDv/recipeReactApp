import Search from '../Search'
import classes from './Layout.module.css'

function Layout(props){
    
    return <section className={classes.layout}>
        {props.children}
        </section>
      
}

export default Layout