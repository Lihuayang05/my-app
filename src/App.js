import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [counts, setCounts] = useState(() => {
    const savedCounts = localStorage.getItem('counts');
    return savedCounts ? JSON.parse(savedCounts) : [0, 0, 0, 0];
  });

  useEffect(() => {
    localStorage.setItem('counts', JSON.stringify(counts));
  }, [counts]);

  const handleClick = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  const groups = [
    { name: '天鹰', animal: 'tianying.png', color: 'darkred', spirit: '天高地广，无畏飞翔。' },
    { name: '凌鹰', animal: 'lingying.png', color: 'green', spirit: '凌空飞翔，勇攀高峰。' },
    { name: '群鹰', animal: 'qunying.jpeg', color: 'blue', spirit: '群策群力，飞向未来。' },
    { name: '锐鹰', animal: 'ruiying.png', color: 'gold', spirit: '锐不可当，势不可挡。' }
  ];

  return (
    <div className="app">
      <header className="header">
        <img src="logo.png" alt="Logo" className="logo" />
      </header>

      <div className="grid">
        {groups.map((group, index) => (
          <div key={index} className="box" style={{ borderColor: group.color }}>
            <img src={group.animal} alt={group.name} className="animal-image" />
            <p>{group.name}</p>
            <p>助力: {counts[index]}</p>
            <p className="spirit">{group.spirit}</p>
            <button onClick={() => handleClick(index)}>Click Me</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
