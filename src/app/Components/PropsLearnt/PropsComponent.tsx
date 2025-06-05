"use client"

import React from 'react';
import UserCard from '@/app/Components/PropsLearnt/UserCard';
import Layout1 from '@/app/Components/PropsLearnt/Layout1';
import DataFetcher from '@/app/Components/PropsLearnt/DatFetcher';


const App: React.FC = () => {
  const handleClick = () => alert('Card clicked!');

  const user = {
    name: 'Alice',
    age: 24,
    skills: ['React', 'Node.js'],
  };

  return (
    <Layout1>
      <h1 className="text-xl font-bold">User Dashboard</h1>

      {/* Basic props */}
      <UserCard name={user.name} age={user.age} onClick={handleClick} />

      {/* Children as props */}
      <Layout1>
        <p>This is inside a nested layout.</p>
      </Layout1>

      {/* Props with arrays and callbacks */}
      <UserCard
        name="Bob"
        skills={user.skills}
        onClick={() => console.log('Bob clicked')}
      />

      {/* Render props */}
      <DataFetcher
        render={(data) => (
          <div className="border p-2 mt-4">
            <h2>Fetched Info:</h2>
            <p>{data.info}</p>
          </div>
        )}
      />
    </Layout1>
  );
};

export default App;
