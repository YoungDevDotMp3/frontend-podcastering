import styled, { css } from 'styled-components';
import {
  mainBlue,
  almostBlack,
  almostWhite,
  mainPink,
  alertRed,
} from '../../styles/colors';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${almostWhite};
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  height: 48px;

  color: ${mainBlue};
  border: 1.3px solid ${almostWhite};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${alertRed};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${mainPink};
      border-color: ${mainPink};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${mainPink};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${mainBlue};

    &::placeholder {
      color: ${mainBlue};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  svg {
    margin: 0;
    margin-left: 10px;
  }
  span {
    background: ${alertRed};
    color: ${almostWhite};
    &::before {
      border-color: ${alertRed} transparent;
    }
  }
`;
