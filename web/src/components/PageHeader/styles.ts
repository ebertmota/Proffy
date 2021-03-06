import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  > div:first-child {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    > img {
      height: 1.6rem;
    }

    a {
      height: 3.2rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media (min-width: 700px) {
    height: 340px;

    > div:first-child {
      max-width: 1100px;
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 3.2rem auto;
  position: relative;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-top: 2.4rem;
    color: var(--color-text-in-primary);
    margin-bottom: 5.4rem;
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 350px;
    }
  }
`;
