import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--bg-header);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: var(--shape);
    background-color: var(--bg-button);
    font-size: 1rem;
    height: 3rem;
    
    padding: 0 2rem;
    border: 0;
    border-radius: 0.30rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 400px) {
    img {
      width: 150px;
    }

    button {
      padding: 0 1rem;
    }
  }
`