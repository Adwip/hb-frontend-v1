import TopRibbon from "./TopRibbon"
import BottomRibbon from "./BottomRibbon"
import { Container } from "react-bootstrap"

function Header (props){
    return (
        <Container fluid={true}>
            <TopRibbon/>
            <BottomRibbon/>
        </Container>
    )
}

export default Header