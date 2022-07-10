import styled from 'styled-components';

export const Container = styled.div`
  height: 28.5rem;
  width: 21.76rem;
  color: var(--base-gray);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
`;
export const ImageProduct = styled.img``;
export const ContainerTexts = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'textContent priceContent'
    'descContent descContent';
  p {
    grid-area: textContent;
  }
  h3 {
    grid-area: priceContent;
  }
  span {
    grid-area: descContent;
  }
`;
export const Button = styled.button``;
