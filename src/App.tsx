import React from 'react'
import './App.css'
import ProfileCard from './Components/ProfileCard'
import logo from './imgs/icon.png'

function App() {
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
        <ProfileCard 
            name={'a'}
          />
           <ProfileCard 
            name={'a'}
          />
           <ProfileCard 
            name={'a'}
          />
      </main>
    </div>
  );
}

export default App;
