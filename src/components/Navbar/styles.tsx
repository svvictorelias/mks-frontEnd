import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary-blue);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  padding-left: 6.5rem;
  padding-right: 8.8rem;
  align-items: center;
`;
export const Texts = styled.div`
  display: flex;
  align-items: baseline;
  gap:1rem;
  h1 {
    font-size: 4rem;
    font-weight: 600;
  }
  span {
    font-weight: 300;
    font-size: 2rem;
  }
`;
export const CartButton = styled.button`
  width: 9rem;
  height: 4.5rem;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  span{
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
