import Header from '../components/Header';
import {Outlet} from 'react-router-dom'
import { useState } from 'react';
import Cart from '../components/Cart';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/themes';
import { GlobalStyle } from '../styles/globalStyle';

function Root() {
  const [theme, setTheme]: ['light'|'dark', any] = useState('light')
  const [cart, setCart]: any = useState([]);
  const [showCart, setShowCart] = useState(false)
  const toggleCart = () => {
      setShowCart(old => !old);
  }


  const addToCart = (item: any) => {
    if (!cart.length) {
        setCart([{...item, order_amount: 1}]);
        return;
    };
    let push_this: any;
    let old_item = cart.filter((x:any) => x.id === item.id);
    old_item = old_item.length ? old_item[0] : false;
    if (old_item) {
        old_item.order_amount = old_item.order_amount + 1;
        push_this = old_item;
    } else {
        push_this = {...item, order_amount: 1};
    }
    setCart((old : any) => ([...old.filter((x: any) => x.id != push_this.id), push_this]))
}



const removeFromCart = (item: any) => {
  let this_item: any = [...cart.filter((x: any) => x.id == item.id)];
  this_item = this_item[0];
  if (this_item.order_amount == 1) {
      setCart((old: any) => ([...old.filter((x:any) => x.id != item.id)]))
  } else if (this_item.order_amount > 1) {
      this_item.order_amount -= 1;
      setCart((old: any) => ([...cart.filter((x: any) => x.id != item.id), this_item]))
  }
}

  const swithchTheme = () => {
    setTheme((old:string) => {return old === 'light' ? "dark" : 'light'})
  }
  const getTheme = () => {
    return Theme[theme];
  }
  return (
    <ThemeProvider theme={getTheme}>
    <GlobalStyle />
    <div className="myroot">
      <Header toggleCart={toggleCart} itemlen={cart.length} switchTheme={swithchTheme} />
      <Outlet context={{removeFromCart, addToCart, cart, setCart}}/>
      <Cart items={cart} visible={showCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </div>
    </ThemeProvider>
  );
}

export default Root;

