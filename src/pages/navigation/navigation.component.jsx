import { Outlet } from 'react-router-dom';
import Search_Bar from '../../components/search-bar/search-bar.component';
import Nav_Drop_Down from './nav-dropdown/nav-dropdown.component';
import { Navigation_Container, Nav_Links, Nav_Box, Nav_Link,  Nav_Link_Extended } from './navigation.styles';

const Navigation = () => {
    return (
        <>
            <Navigation_Container>
                <Nav_Links>
                    <Nav_Link_Extended to="/" > Home </Nav_Link_Extended>
                    <Search_Bar 
                            placeholder="type your subject: "
                            type="search"
                        />
                    <Nav_Box> More </Nav_Box>
                </Nav_Links>
            </Navigation_Container>
            <Nav_Drop_Down />
            <Outlet />
        </>
    )
}

export default Navigation;