import { useState } from "react";
import styled from "styled-components";
import { LinkButton } from "./Button";
import Logo from "./Logo";
import Navbar from "./Naviagation";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import { Button } from "./Button";
import Cart from "./Cart";


export default function Header({toggleCart, itemlen, switchTheme}:any) {
    const [routes, setRoutes] = useState([
        {
            route: '/',
            title: "Bosh Sahifa"
        },
        {
            route: '/products',
            title: "Mahsulotlar"
        },
        {
            route: '/aboutus',
            title: "Biz Haqimizda"
        },
        {
            route: 'contact',
            title: "Contact"
        }
    ]);


    return (
        <StyledHeader>
            <Logo />
            <Navbar routes={routes}/>
            <LinkButton to={''} children={<><LoginRoundedIcon /> Kirish</>} clickHandler={''}/>
            <LinkButton to={''} children={<><PersonAddAlt1RoundedIcon /> Registratsiya</>} clickHandler={''}/>
            <Button children={<><ShoppingCartSharpIcon /> Savat({itemlen})</>} clickHandler={toggleCart} />
            <ThemeSwitcherStyled onClick={switchTheme}><Brightness6RoundedIcon/></ThemeSwitcherStyled>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    box-shadow: 0 0 2rem 0.3rem gray;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    position: relative;
`

const ThemeSwitcherStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.text.primary};
`
