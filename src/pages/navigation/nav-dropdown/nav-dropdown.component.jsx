import { DropDownContainer } from './nav-dropdown.styles';
import { Nav_Link } from '../navigation.styles';

const Nav_Drop_Down = () => {
    return (
        <DropDownContainer>
            <Nav_Link to="quiz" > QUIZ </Nav_Link>
        </DropDownContainer>
    );
}

export default Nav_Drop_Down;