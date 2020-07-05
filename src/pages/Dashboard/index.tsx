import React from 'react';
import Container from './styles';
import ProfileCard from '../../components/ProfileCard';
import TopBar from '../../components/TopBar';

const Dashboard: React.FC = () => {
  const profiles = [
    {
      name: 'Atila Iamarino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor',
      imgLink:
        'https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg',
      id: 1,
    },
    {
      name: 'Atila Iamarino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor',
      imgLink:
        'https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg',
      id: 1,
    },
    {
      name: 'Atila Iamarino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor',
      imgLink:
        'https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg',
      id: 1,
    },
    {
      name: 'Atila Iamarino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor',
      imgLink:
        'https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg',
      id: 1,
    },
    {
      name: 'Atila Iamarino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor',
      imgLink:
        'https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg',
      id: 1,
    },
  ];



    return (
    <Container>
      <header>
        <img src={logo} alt="icon" />
        <input type="text"></input>
        <span>
          <button> Log in </button>
          <button> Sing in </button>
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
          <ProfileCard /> <ProfileCard /> <ProfileCard /> <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
