
import {Row, Col} from 'react-bootstrap'
import "./top-ribbon.scss";

function TopRibbon(){
    return (
        <Row className='top-ribbon'>
            <Col className='top-ribbon-left'>
                Welcome to Hubing.com
            </Col>
            <Col className='top-ribbon-right'>
                About Hubing.com
            </Col>
        </Row>
    )

}

export default TopRibbon