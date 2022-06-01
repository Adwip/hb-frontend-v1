import TopRibbon from "./header/TopRibbon"
import BottomRibbon from "./header/BottomRibbon"
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