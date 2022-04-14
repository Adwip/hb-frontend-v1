import Home from "../pages/Home";
import Login from "../pages/Login";

const router = [
    {
        'path':'/',
        'page': <Home/> ,
        'authRequired':true
    },
    {
        'path':'login',
        'page': <Login/> ,
        'authRequired':true
    },
    {
        'path':'/',
        'page': '' ,
        'authRequired':true
    },
    {
        'path':'/',
        'page': '' ,
        'authRequired':true
    },
    {
        'path':'/',
        'page': '' ,
        'authRequired':true
    },
    {
        'path':'/',
        'page': '' ,
        'authRequired':true
    },
    {
        'path':'/',
        'page': '' ,
        'authRequired':true
    }
]

const NoPage = {

}
export default {router, NoPage}