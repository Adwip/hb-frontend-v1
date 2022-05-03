import { Router} from './router'
import {Route} from 'react-router-dom'

function RouteDefined(){
    let routes = []
    let routeDef = null
    for(let i in Router){
        routeDef = <Route path={Router[i].path} element={Router[i].page} />
        routes.push(routeDef)
    }
    return routes
}

export default RouteDefined