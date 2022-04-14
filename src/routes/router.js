import Chat from "../pages/Chat";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Customer from "../pages/profile/CustomerProfile";
import Group from "../pages/profile/GroupProfile";
import NoRoute from "../pages/profile/NoRoute";
import Account from "../pages/profile/SelfProfile";
import User from "../pages/profile/UserProfile";
import Search from "../pages/SearchResult";

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
        'path':'search',
        'page': <Search/> ,
        'authRequired':false
    },
    {
        'path':'chat',
        'page': <Chat/> ,
        'authRequired':true
    },
    {
        'path':'/user',
        'page': <User/> ,
        'authRequired':false
    },
    {
        'path':'/customer',
        'page': <Customer/> ,
        'authRequired':false
    },
    {
        'path':'/group',
        'page': <Group/> ,
        'authRequired':false
    },
    {
        'path':'account',
        'page': <Account/> ,
        'authRequired':true
    }
]

const NoPage = {
    'path':'*',
    'page': <NoRoute/>
}
export default {router, NoPage}