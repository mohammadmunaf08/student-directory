import React from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

// Active Students
const activeStudents = [
  { id: 1, name: "Aisha Khan", rollNumber: "FS001", course: "Full Stack Web Dev", email: "aisha@yenepoya.edu", skills: ["React", "Node.js", "MongoDB"], isActive: true },
  { id: 2, name: "Rahul Sharma", rollNumber: "FS002", course: "Full Stack Web Dev", email: "rahul@yenepoya.edu", skills: ["JavaScript", "Express", "Tailwind"], isActive: true },
  { id: 3, name: "Priya Nair", rollNumber: "FS003", course: "Full Stack Web Dev", email: "priya@yenepoya.edu", skills: ["React", "TypeScript", "Firebase"], isActive: true },
  { id: 4, name: "Mohammed Ali", rollNumber: "FS004", course: "Full Stack Web Dev", email: "ali@yenepoya.edu", skills: ["Next.js", "GraphQL", "Docker"], isActive: true }
];

// Alumni
const alumni = [
  { id: 5, name: "Sneha Reddy", rollNumber: "FS101", course: "Full Stack Web Dev", email: "sneha.alum@yenepoya.edu", skills: ["Vue.js", "Python", "AWS"], isActive: false },
  { id: 6, name: "Vikram Singh", rollNumber: "FS102", course: "Full Stack Web Dev", email: "vikram.alum@yenepoya.edu", skills: ["Angular", "Java", "Spring Boot"], isActive: false },
  { id: 7, name: "Ananya Menon", rollNumber: "FS103", course: "Full Stack Web Dev", email: "ananya.alum@yenepoya.edu", skills: ["React Native", "Flutter", "Kotlin"], isActive: false }
];

const allStudents = [...activeStudents, ...alumni];

function App() {
  // Count most common skill
  const skillCount = {};
  allStudents.forEach(s => s.skills.forEach(skill => skillCount[skill] = (skillCount[skill] || 0) + 1));
  const mostCommonSkill = Object.entries(skillCount).sort((a,b) => b[1] - a[1])[0]?.[0] || "N/A";

  return (
    <>
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Yenepoya University – Full Stack Development Batch</p>
      </header>

      <main className="container">
        {/* Active Students */}
        <section className="section">
          <h2>Active Students ({activeStudents.length})</h2>
          <div className="grid">
            {activeStudents.map(student => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section className="section">
          <h2>Alumni ({alumni.length})</h2>
          <div className="grid">
            {alumni.map(student => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">
          <h2>Directory Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Students</h3>
              <p className="number">{allStudents.length}</p>
            </div>
            <div className="stat-card">
              <h3>Active</h3>
              <p className="number active">{activeStudents.length}</p>
            </div>
            <div className="stat-card">
              <h3>Alumni</h3>
              <p className="number alumni">{alumni.length}</p>
            </div>
            <div className="stat-card">
              <h3>Most Common Skill</h3>
              <p className="skill">{mostCommonSkill}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Yenepoya University Student Portal</p>
        <p>Contact: directory@yenepoya.edu</p>
      </footer>
    </>
  );
}

export default App;