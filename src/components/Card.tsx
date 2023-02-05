import { title } from 'process'
import styled from 'styled-components'
import { Button } from './Button'

export default function Card({item, addToCart, removeFromCart, isInCart, getAmount} : any) {

    

    return (
        <StyledCard>
            <StyledImg src={item.image} alt="Image" loading='lazy' />
            <h4 style={{margin: 'auto'}}>{item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}</h4>
            <span style={{margin: 'auto'}}>${item.price}</span>
            <Buttons>
            <Button style={{marginTop: 'auto'}} children={isInCart ? "+" : 'Hoziroq sotib olish'} clickHandler={addToCart ? addToCart : ''}/>
            {isInCart ? <span>{getAmount()}</span>: ''}
            {isInCart ? <Button children={'-'} clickHandler={removeFromCart ? removeFromCart : ""}  /> : null}
            </Buttons>
        </StyledCard>
    )
}

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`


const StyledCard = styled.div`
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid ${({theme}) => theme.bg.secondary};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 12rem;
    height: 17rem;
`
const StyledImg = styled.img`
    width: 100%;
    height: 10rem;
    object-fit: contain;
`



export {}