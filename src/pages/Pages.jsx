import Home from "./Home" 
import {Routes , Route} from 'react-router-dom'
import Cuisine from "./Cuisine"
import Search from "../components/Search"
import Searched from "./Searched"


function Pages(){
    return(        
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cuisine/:type" element={<Cuisine />}></Route>
            <Route path="/searched/:search" element={<Searched />} ></Route>
        </Routes>
    )
}
export default Pages