import React from 'react';
import { Container, ContainerTexts, ImageProduct } from './styles';

const CardContainer = () => {
  return (
    <Container>
      <ImageProduct />
      <ContainerTexts>
        <p>Apple Watch Series 4 GPS</p>
        <h3>R$399</h3>
        <span>Redesigned from scratch and completely revised.</span>
      </ContainerTexts>
    </Container>
  );
};

export default CardContainer;
