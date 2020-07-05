import styled from 'styled-components';
import { sideBordersLength } from '../../styles/globalVariables';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  padding-left: ${sideBordersLength};
  padding-right: ${sideBordersLength};

  > * {
    margin-bottom: 12px;
    margin-top: 12px;
    height: 26px;
  }

  .search-box {
    padding: 10px;
    min-width: 150px;
    width: 24%;
    background: linear-gradient(173.93deg, #eef1f5 4.98%, #e6e9ef 94.88%);
    box-shadow: inset 5px 5px 10px rgba(166, 180, 200, 0.75),
      inset -5px -5px 15px rgba(255, 255, 255, 0.75);
    border-radius: 40px;
    border: none;
  }

  span a {
    color: white;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    margin-left: 12px;
  }
`;

export default Header;
