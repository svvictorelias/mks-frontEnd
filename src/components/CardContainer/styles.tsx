import styled from 'styled-components';

export const Container = styled.div`
  height: 28.5rem;
  width: 100%;
  color: var(--base-gray);
  box-shadow: 0px 2px 8px rgba(0, 0, 0);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 17rem auto 3.191rem;
  overflow: hidden;
`;
export const ImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 100%;
`;
export const ContainerTexts = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 0rem 1.4rem;
  grid-template-areas:
  'textContent priceContent'
  'descContent descContent';
  p {
    grid-area: textContent;
    line-height: 1.9rem;
    font-size: 1.6rem;
    
  }
  h3 {
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    grid-area: priceContent;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: var(--white);
    height: 60%;
    background-color: var(--primary-gray);
  }
  span {
    grid-area: descContent;
  }
`;
export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 0rem;
  gap: 1.4rem;
  color: var(--white);
  background-color: var(--primary-blue);
  border: none;
  cursor: pointer;
  img{
    width: 1.3rem;
  }
  p{
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
