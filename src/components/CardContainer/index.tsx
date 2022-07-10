import React from 'react';
import shoppingBag from '../../assets/shoppingBag.svg'
import apple from '../../assets/apple-watch.png'
import { Button, Container, ContainerTexts, ImageProduct } from './styles';

const CardContainer = () => {
  return (
    <Container>
      <ImageProduct>
        <img src={apple} alt="" />
      </ImageProduct>
      <ContainerTexts>
        <p>Apple Watch Series 4 GPS</p>
        <h3>R$399</h3>
        <span>Redesigned from scratch and completely revised.</span>
      </ContainerTexts>
      <Button>
        <img src={shoppingBag} alt="shopping Bag" />
        <p>COMPRAR</p>
      </Button>
    </Container>
  );
};

export default CardContainer;
