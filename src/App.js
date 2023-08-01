import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Shaheryar Tak</h1>
        <p>Software Developer</p>
        <div className="contact-info">
          <p>Email: Shaheryar2020@outlook.com</p>
          <p>Phone: +91 7006982996</p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/shaheryar-tak-225897220">
              Shaheryar Tak
            </a>
          </p>
          <p>
            GitHub: <a href="https://github.com/shaheryar3">shaheryar3</a>
          </p>
        </div>
      </header>
      <section id="education">
        <h2>Education</h2>
        <p>
          <strong>National Institute of Technology Srinagar</strong>
        </p>
        <p>B.Tech Computer Science | July 2019 - July 2023</p>
      </section>
      <section id="skills">
        <h2>Key Skills</h2>
        <ul>
          <li>Programming Languages: C++, Python</li>
          <li>Libraries/Frameworks: Flask, React.js</li>
          <li>Databases: SQL, SQLite</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects / Experience</h2>
        <div className="project">
          <h3>
            Document Verification and Administration System using Blockchain
          </h3>
          <p>
            The Document Verification and Administration System is a
            decentralized application (DApp) that combines blockchain technology
            with IPFS (InterPlanetary File System) to securely verify, store,
            and manage documents. The system is built using Flask, Solidity,
            Hardhat, Ethereum, Ganache, and IPFS. The primary goal of this
            project is to create a transparent and tamper-proof system for
            document verification and administration while leveraging the
            benefits of IPFS for the client and decentralized storage.
          </p>
        </div>
        <div className="project">
          <h3>Employee Task Management App</h3>
          <p>
            The Employee Task Management App is a web application built with
            Flask (Python) as the backend and React as the frontend. It enables
            administrators to manage employees, assign tasks, and delete tasks.
            React provides a responsive user interface, and Flask handles data
            storage using SQLAlchemy with an SQLite database. Key skills used
            include Flask for backend development, React for frontend design,
            SQLAlchemy for database management, and RESTful API implementation
            for communication between frontend and backend.
          </p>
        </div>
        <div className="project">
          <h3>Tic-Tac-Toe Game</h3>
          <p>
            Tic-Tac-Toe Game App with React frontend. Two players take turns
            marking X and O on a 3x3 grid. The game tracks moves, announces the
            winner, and allows players to undo moves. Simple backend handles
            game logic. Responsive design for a smooth gaming experience.
          </p>
        </div>
        <div className="project">
          <h3>Todo App</h3>
          <p>
            Todo App using Flask: A simple and intuitive web-based task
            management application. Create, update, and delete tasks with ease.
            Organize your to-do list, set deadlines, and mark tasks as complete.
            Flask framework provides a lightweight and flexible backend,
            ensuring a seamless user experience.
          </p>
        </div>
      </section>
      <section id="honors-awards">
        <h2>Honors & Awards</h2>
        <ul>
          <li>5 Star at problem solving in Hackerrank</li>
          <li>1200 peak rating at Codeforces</li>
        </ul>
      </section>
      <section id="about-me">
        <h2>About me</h2>
        <p>
          I am a self-motivated perpetual learner looking for an opportunity to
          grow and expand my skills.
        </p>
      </section>
    </div>
  );
};

export default App;
