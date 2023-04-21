import React from 'react';
import './App.css';
import Section from './Section';

function App() {
  return (
    <div className="container">
      <Section title="Home">
        <p>Welcome to my website!</p>
      </Section>
      <Section title="About">
        <p>Learn more about me and my background.</p>
      </Section>
      <Section title="Skills">
        <p>Here are some of the skills I have.</p>
      </Section>
      <Section title="Projects">
        <p>Check out some of my recent projects.</p>
      </Section>
      <Section title="Contact">
        <p>Get in touch with me.</p>
      </Section>
    </div>
  );
}

export default App;
