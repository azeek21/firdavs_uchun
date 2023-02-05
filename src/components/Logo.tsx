import styled from "styled-components";
import { Link } from "react-router-dom";
import Theme from "../styles/themes";

export default function Logo({active}: any) {
    return (
        <Link to={''} style={{textDecoration: 'none', marginRight: 'auto'}}>
        <StyledLogo>
            Venturis
        </StyledLogo>
        </Link>
    )
}

const StyledLogo = styled.span`
    text-transform: capitalize;
    text-decoration: none;
    color: ${({theme}) => theme.text.secondary};
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: -3px;

`

