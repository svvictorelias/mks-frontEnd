import React from 'react'
import { Container, Texts,CartButton } from './styles'
import shoppingCart from '../../assets/shoppingCart.svg'

const Navbar = () => {
  return (
    <Container>
      <Texts>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </Texts>
      <CartButton>
        <img src={shoppingCart} alt="Shopping Cart" />
        <span>0</span>
      </CartButton>
    </Container>
  )
}

export default Navbar