import styled from 'styled-components';

const sideBordersLength = 3;

const Container = styled.div`
  header {
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
  }

  header input,
  header span button,
  header img {
    height: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  header input {
    min-width: 150px;
  }

  header img {
    margin-left: ${sideBordersLength}vw;
  }

  header span {
    margin-right: ${sideBordersLength}vw;
  }

  header input {
    padding: 10px;
    width: 24%;
    left: 25px;
    top: 17px;
    background: linear-gradient(173.93deg, #eef1f5 4.98%, #e6e9ef 94.88%);
    box-shadow: inset 5px 5px 10px rgba(166, 180, 200, 0.75),
      inset -5px -5px 15px rgba(255, 255, 255, 0.75);
    border-radius: 40px;
    border: none;
  }

  header span button {
    left: calc(50% - 120px / 2 + 483px);
    top: calc(50% - 50px / 2 - 475px);
    color: white;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-family: Lato, Arial;
    font-style: normal;
    background-color: rgba(29, 38, 52, 0);
    border: none;
    margin-right: 2vw;
  }

  nav {
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: ${sideBordersLength}vw;
    padding-right: 8%;
  }

  nav h1 {
    color: var(--light-grey);
    font-style: normal;
    font-weight: bold;
    font-size: 4vw;
    line-height: 5vw;
    display: flex;
  }

  main {
    background: #0d031f;
    padding: ${sideBordersLength}vw;
  }

  main div {
    justify-content: center;
  }
`;

export default Container;
