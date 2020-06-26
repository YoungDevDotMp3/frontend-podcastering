import styled from 'styled-components';


export const Card = styled.div`
  background: #b60e0e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-align: center;
  width: 16vw;
  background: linear-gradient(153.2deg, #455FCC 24.19%, #D92050 71.16%);
  display: inline-block;
  margin: auto;

  img {
    width: 100%;
    height: 17vw;
    object-fit: cover;
    box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0 0px;
  }

  p {
    color: ivory;
    font-size: 12px ;
    padding: 10px;
  }

  h1 {
    color: ivory;
    font-size: 17px;
  }
`
