import React from "react";
import "./App.css";
import Section from "./Section";
import Project from "./Project";

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
        <Project
          title="Habit Tracker"
          description="A weekly dot chart which the user can use to keep track of habits. Users can create and mark off habits."
          image="images/habit-tracker.png"
          codeLink="https://github.com/Blizzcane/Habit-Tracker-Frontend"
          liveLink="https://habit-tracker-one.vercel.app"
          technologies={[
            "HTML",
            "CSS",
            "JavaScript",
            "NextJS",
            "React",
            "Node",
            "Postgres",
            "Bootstrap",
            "Heroku",
            "Vercel",
          ]}
        />

        <Project
          title="Another Project"
          description="This is anothe r project."
          image="https://example.com/another-image.jpg"
          codeLink="https://github.com/another-project"
          liveLink="https://another-project.com"
          technologies={["JavaScript", "Express", "PostgreSQL"]}
        />
      </Section>
      <Section title="Contact">
        <p>Get in touch with me.</p>
      </Section>
    </div>
  );
}

export default App;
