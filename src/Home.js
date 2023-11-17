import React from 'react';
import logo from './logo.svg';

export default function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome To My Website</h1>
      </header>
      <main id='home'>
        <section>
          <h2>How I build this website</h2>
          <div style={{
          display: "grid",
          alignItems: "center", 
          gridTemplateColumns: "1fr 1fr",
          columnGap: "5px",
          backgroundColor: "rgb(0, 52, 70)",
          color: "white"
        }}>
          <p>I build this website using react to make it more responsive and interactive.</p>
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        </section>
      </main>
    </div>
  );
}
