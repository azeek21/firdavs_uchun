import { useQuery } from "react-query"
import styled from "styled-components"
import { Button } from "../components/Button"
import { getProducts ,getAllCategories, getFromCategory} from "../libs/apiWrapper"
import Card from "../components/Card"
import { useState } from "react"
import Cart from "../components/Cart"
import { useOutletContext } from "react-router"

function isItemInCart(item: any, cart: any) {
    return [...cart.filter((x: any) => x.id == item.id)].length;
}

function getItemAmout(item: any, cart: any) {
    return [...cart.filter((x: any) => x.id == item.id)][0].order_amount;
}


export default function Home() {
    const {removeFromCart, addToCart, cart, setCart}: any= useOutletContext()
    const [filter, setFilter]: any = useState('')
    const [showCart, setShowCart] = useState(false)
    const toggleCart = () => {
        setShowCart(old => !old);
    }



    const {isLoading, error, data} = useQuery('get_all_products', async () => {
        return getProducts(20)
    }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    let cards;
    if (data) {
        const them: Array<any> = data;

        cards = them.map((item, index) => {
            if (filter && item.category != filter) {
                return '';
            }
            return (
            <Card 
            key={index} 
            item={item} 
            addToCart={() => {
            console.log(`${item.title} add to cart`);
            addToCart(item);
            }} 
            removeFromCart={() => {
                console.log(`REMOVE: ${item.title}`)
                removeFromCart(item);
            }}
            isInCart={isItemInCart(item, cart)}
            getAmount={() => {
                return getItemAmout(item, cart);
            }}/>
            )
        })
    }

    const filterCart = (category: string) => {
        setCart((old: any) => ([...old.filter((x: any) => x.category == category)]))
    }

    return (
        <StyledHome>
            <h1>Oxirgi Mahsulotlar</h1>
            <Line></Line>
            <CategoriesStyled>
                <Button children={'Hammasi'} clickHandler={() => {setFilter('')}}/>
                <Button children={'Erkaklar Kiyimi'} clickHandler={() => setFilter("men's clothing")}/>
                <Button children={'Ayollar Kiyimi'} clickHandler={() => setFilter("women's clothing")}/>
                <Button children={'Taqinchoqlar'} clickHandler={() => setFilter('jewelery')}/>
                <Button children={'Elektronika'} clickHandler={() => setFilter('electronics')}/>
            </CategoriesStyled>
            <CardsStyled>
            {isLoading && !data ? 'Loading...' : data ? cards : 'Error occoured, And I don\'t kow why 🤷‍♂️'}
            </CardsStyled>
            <h4>Hozircha faqat shular 🤷‍♂️</h4>
        </StyledHome> 
    )
}


const StyledHome = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    width: 95%;
    color: ${({theme}) => theme.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    gap: 1rem;
`

const Line = styled.span`
    height: 2px;
    background-color: ${({theme}) => theme.bg.secondary};
    width: 100%;
    border-radius: 5px;
`

const CategoriesStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    margin-top: 2rem;
    gap: 1rem;
`

const CardsStyled = styled.div`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

