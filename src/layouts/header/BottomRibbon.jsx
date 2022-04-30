import Logo from './sub-header/Logo'
import SearchForm from './sub-header/SearchForm'
import Buttons from './sub-header/Buttons'
import {Row} from 'react-bootstrap'

function BottomRibbon(){
    return (
        <Row>
            <Logo/>
            <SearchForm/>
            <Buttons/>
        </Row>
    )

}

export default BottomRibbon