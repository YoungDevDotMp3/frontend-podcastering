import styled from 'styled-components';

const Card = styled.article`
  position: relative;
  background: #b60e0e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  /* width: fit-content; */
  height: 300px;
  text-align: center;
  background: linear-gradient(153.2deg, #455fcc 24.19%, #d92050 71.16%);

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0 0px;
  }

  p {
    position: absolute;
    color: ivory;
    font-size: 12px;
    padding: 10px;
  }
`;

export default Card;
