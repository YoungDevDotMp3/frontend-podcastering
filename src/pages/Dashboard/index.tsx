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
      <TopBar
        buttons={
          [
            { link: '/login', content: 'Log In' }, 
            { link: '/signin', content: 'Sign In' } 
          ]
        }
      />
      <nav style={{ paddingTop: '18vh', paddingBottom: '18vh' }}>
        <h1>
          Encontre todo tipo de pessoa
          <br />
          para participar de seu podcast.
        </h1>
      </nav>
      <main>
        <section className="cards">
          {profiles.map((profile) => {
            return (
              <ProfileCard
                imgLink={profile.imgLink}
                name={profile.name}
                description={profile.description}
                key={profile.id}
              />
            );
          })}
        </section>
      </main>
    </Container>
  );
};

export default Dashboard;
