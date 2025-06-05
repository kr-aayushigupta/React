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

      {/* Basic props : component has props where it is defined - and when using such component we pass props values from it */}
      <UserCard name={user.name} age={user.age} onClick={handleClick} />

      {/* Children as props */}

      {/* Layot inside layout - child - as prop */}
      <Layout1>
        <p>This is inside a nested layout.</p>
      </Layout1>

      {/* Props with arrays and callbacks : skills property of usercasrd is an array and onclick is a function */}
     
      <UserCard
        name="Bob"
        skills={user.skills}
        onClick={() => console.log('Bob clicked')}
      />

      {/* Render props : datafetcher has the data - but the parent component decides how to display it using "render" */}
     
      <DataFetcher
        render={(data) => (
          <div className="border p-2 mt-4 ">
            <h2>Fetched Info : </h2>
            <p>{data.info}</p>
          </div>
        )}
      />
    </Layout1>
  );
};

export default App;



