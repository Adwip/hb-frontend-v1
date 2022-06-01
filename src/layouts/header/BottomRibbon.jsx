import Logo from './sub-header/Logo'
import SearchForm from './sub-header/SearchForm'
import Buttons from './sub-header/Buttons'
import {Row} from 'react-bootstrap'

import './bottom-ribbon.scss'

function BottomRibbon(){
    return (
        <Row className='bottom-ribbon'>
            <Logo className='logo-bar'/>
            <SearchForm className='search-bar'/>
            <Buttons className='login-bar'/>
        </Row>
    )

}

export default BottomRibbon