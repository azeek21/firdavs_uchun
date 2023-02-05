import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import Theme from "../styles/themes";


export default function Navbar(props: any) {
    const location = useLocation();
    
    const routes: Array<{route: string, title: string}> = props?.routes



    const links = routes.map((route, index) => (
        <Link key={index}
              to={route.route}
              style={{
                textDecoration: "none",
              }}
              className={location.pathname === route.route ? 'active' : ''}
              >
                {route.title}
        </Link>
    ))

    return (
        <StyledNavbar>
            <ul>
                {links}
            </ul>
        </StyledNavbar>
    )
}


const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: ${({theme}) => theme.text.gray};
    ul {
        display: flex;
        align-content: center;
        justify-content: flex-start;
        gap: 10px;
    }
    .active {
        color: ${({theme}) => theme.text.primary};
    }
    a {
        color: inherit;
    }
`


