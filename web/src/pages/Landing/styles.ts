import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 700px;

  > img {
    width: 100%;
  }

  span {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';

    > img {
      grid-area: hero;
      justify-self: end;
    }
  }

  @media (min-width: 1100px) {
    span {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  img {
    height: 10rem;
  }

  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    align-self: center;
    text-align: center;
    margin: 0;
    grid-area: logo;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    &:first-child {
      margin-right: 1.6rem;
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    transition: background 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);
    background: var(--color-secundary);
    &:hover {
      background: var(--color-secundary-dark);
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;
