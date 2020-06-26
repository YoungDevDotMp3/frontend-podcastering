import React from 'react';
import './ProfileCard.css';

type ProfileCardProps = {
    name: string,
}

const ProfileCard = ({ name}: ProfileCardProps) => 

<div className="card">
    <img src="https://pbs.twimg.com/profile_images/1250902405920718850/O6xV6yKo.jpg" alt=""></img>
    <h1>Atila Iamarino</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
</div> 


export default ProfileCard;