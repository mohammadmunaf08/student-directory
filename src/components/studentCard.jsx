import React from 'react';

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`badge ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
      
      <div className="info">
        <p><strong>Roll No:</strong> {rollNumber}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>

      <div className="skills">
        <strong>Skills:</strong>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}