import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Header from './styles';

interface Buttons {
  buttons: {
    link: string;
    content: string;
  }[];
}

const TopBar: React.FC<Buttons> = ({ buttons }) => {
  return (
    <Header>
      <img src={logo} alt="icon" />
      <input className="search-box" type="text" />
      <span>
        {
          buttons.map((button) => {
            return (
              <Link to={button.link}> {button.content}</Link>
            )
          })
        }
      </span>
    </Header>
  );
};

export default TopBar;
