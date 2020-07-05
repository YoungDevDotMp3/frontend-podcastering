import React from 'react';
import Card from './styles';

interface ProfileInfo {
  name: string;
  description: string;
  imgLink: string;
}

const ProfileCard: React.FC<ProfileInfo> = ({ name, description, imgLink }) => (
  <Card>
    <img src={imgLink} alt="" />
    <h1>{name}</h1>
    <p>{`${description.substring(0, 100)}...`}</p>
  </Card>
);

export default ProfileCard;
