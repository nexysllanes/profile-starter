import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="avatar/avatar_pic.png"
        alt="avatar_pic"
      ></img>
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Nikko Llanes</h1>
      <p>Web developer who's learning React right now.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

/* function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="😂 " color="red" />
      <Skill skill="JavaScript" emoji="😛" color="yellow" />
      <Skill skill="Web Design" emoji="😊" color="#a2f658" />
      <Skill skill="Git and GitHub" emoji="😉" color="#f6c158" />
      <Skill skill="React" emoji="❤️" color="#5897f6" />
      <Skill skill="Svelte" emoji="🐉" color="#f65887" />
    </div>
  );
} */

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😛"}
        {level === "intermediate" && "😉"}
        {level === "advanced" && "🤖"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
