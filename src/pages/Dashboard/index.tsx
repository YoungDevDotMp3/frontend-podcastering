import React from 'react';
import './styles'
import ProfileCard from '../../components/ProfileCard'
import logo from './imgs/icon.png'

const Dashboard: React.FC = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="icon" />
        <input type="text"></input>
        <span>
          <button> Log in </button>
          <button> Sing in </button>
        </span>
      </header>
      <nav>
        <h1>Encontre todo tipo de pessoa <br /> para participar de seu podcast.</h1>
      </nav>

      <main>
        <div>
          <ProfileCard
            name={'a'}
          />
          <ProfileCard
            name={'a'}
          />
          <ProfileCard
            name={'a'}
          /><ProfileCard
            name={'a'}
          /><ProfileCard
            name={'a'}
          /><ProfileCard
            name={'a'}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
