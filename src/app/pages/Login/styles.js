import styled from 'styled-components';
import { Logo } from '~/assets/images';

export const Container = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    &:before {
      background-image: url(${Logo});
      content: '';
      display: block;
      width: 120px;
      margin: 0 auto;
      height: 120px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .input-single {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    .link-cad {
      display: block;
      width: fit-content;
      margin: 0 auto;
      margin-top: 20px;
      color: var(--black);
    }
  }
`;
