import React from 'react';
import Container from './styles';
import ProfileCard from '../../components/ProfileCard';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Podcastering" />
        <input type="text" />
        <span>
          <button type="button"> Log in </button>
          <button type="button"> Sing in </button>
        </span>
      </header>
      <nav>
        <h1>
          Encontre todo tipo de pessoa
          <br />
          para participar de seu podcast.
        </h1>
      </nav>

      <main>
        <div>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
