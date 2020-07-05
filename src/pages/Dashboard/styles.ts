import styled from 'styled-components';
import { sideBordersLength } from '../../styles/globalVariables';

const Container = styled.div`
  background: linear-gradient(212.14deg, #000a25 4.8%, #1b0f37 78.52%);

  nav {
    padding-left: ${sideBordersLength};
    padding-right: ${sideBordersLength};
  }

  nav h1 {
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 4vw;
    line-height: 5vw;
  }

  .cards {
    padding: ${sideBordersLength};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: ${sideBordersLength};
    justify-content: space-between;
    background: #0d031f;
  }
`;

export default Container;
