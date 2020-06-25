import styled from 'styled-components';
import { shade } from 'polished';

import { mainPink, almostWhite } from '../../styles/colors';

export const Container = styled.button`
  background: ${mainPink};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 48px;
  margin-top: 16px;
  color: ${almostWhite};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, mainPink)};
  }
`;
