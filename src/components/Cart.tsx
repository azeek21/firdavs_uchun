import styled from "styled-components"
import { Button } from "./Button";

export default function Cart({items, visible, addToCart, removeFromCart}: any) {


    const is = items.map((item:any, index: number) => {
        return (
            <CartItemStyled key={index}>
                <div className="asdfasdf">
                <img src={item.image} ></img>
                </div>
                <div>
                <h3>{item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}</h3>
                <div style={{
                    display: 'flex',
                    gap: '0.4rem',
                    alignItems: 'center',
                    justifyContent: 'start',
                }}> 
                    <Button children={'+'} clickHandler={() => {addToCart(item)}} />
                    <span>{item.order_amount}</span>
                    <Button children={'-'} clickHandler={() => {removeFromCart(item)}}/>
                </div>
                </div>
            </CartItemStyled>
        )
    })

    return (
        <CartStyled style={{
            transform: visible ? '' : "translateX(150%)",
        }}>
            {items ? '' :<p>Savatcha bo'sh 🤷‍♂️</p>}
            {is}
        </CartStyled>
    )
}


const CartItemStyled = styled.div`
    overflow: hidden;
    width: 100%;
    height: 5rem;
    padding: 0.4rem;
    color: ${({theme}) => theme.text.primary};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 80%;
    border: 1px solid ${({theme}) => theme.bg.secondary};
    border-radius: 1rem;
    gap: 1rem;

    .asdfasdf {
        width: 4rem;
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
    img {
        width: 90%;
        height: 90%;
        object-fit: contain;
        border-radius: 0.5rem;
        overflow: hidden;
        }
    }

`

const CartStyled = styled.div`
    transition: 0.3s linear;
    background-color: ${({theme}) => theme.bg.secondary};
    border-radius: 1rem;
    padding: 1rem;
    position: absolute;
    top: 4rem;
    right: 1rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    gap: 1rem;
`


