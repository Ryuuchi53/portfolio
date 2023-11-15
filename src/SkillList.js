import React from 'react';

const data = [
  { id: 1, name: 'Programming Language', list: 'HTML&CSS, PHP, C++, C#, JAVA, JAVASCRIPT, DART, SQL' },
  { id: 2, name: 'Technologies / Framework', list: 'Eclipse, Android Studio, Visual Studio, GitHub, Flutter, MS Office, React' },
  { id: 3, name: 'Soft Skill', list: 'Critical Thinking, Time Management, Problem Solving, teamwork' },
  // Add more items as needed
];

function App() {
  return (
    <div className="App">
      <ul className="list">
        {data.map(item => (
          <li key={item.id} className="list-item">
            <span className="item-name">{item.name}</span>
            <br/><br/>
            <span className="item-list">{item.list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
