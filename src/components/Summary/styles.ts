import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: -7rem;


  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 2rem;

  div {
    width: 100%;
    max-width: 22rem;
    background: var(--shape);

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong { 
      display: block;
      font-size: 2rem;
      margin-top: 2rem;
      font-weight: 500;
      color: var(--text-title);
    }
    &:last-child {
      background: var(--green);
      color: #fff;

      strong {
        color: #fff;

      }

    }
  }

`