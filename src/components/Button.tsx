import { Link } from "react-router-dom";
import styled from "styled-components";



export function Button({children, clickHandler, style} : any){
    return (
        <StyledButton style={style}  onClick={clickHandler ? clickHandler : null}>
            {children}
        </StyledButton>
    )
}


export function LinkButton({to, children} : any) {
    return (
        <Link to={to} style={{textDecoration: 'none'}}>
            <StyledButton>
                {children}
            </StyledButton>
        </Link>
    )
}


const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    border-radius: 0.4rem;
    padding: 0.5rem 0.5rem;
    height: auto;
    color: ${({theme}) => theme.text.secondary};
    border: 1px solid ${({theme}) => theme.text.secondary};
    font-size: 0.8rem;
    text-decoration: none;
    svg {
        font-size: inherit;
    }
`