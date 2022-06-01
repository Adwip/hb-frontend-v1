import { Col, Form, Row , Button} from "react-bootstrap"
import './search.scss'

function SearchBox(props){
    return(
        <Form>
            <Row>
                <Col md={10}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="search here" name="search" autoComplete="off"/>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Button className='submit-search' variant="primary" type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox