"use client"
import React, { useEffect, useState } from 'react';
import UserCards from './UserCards';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

type APIUser = {
  name: { first: string; last: string };
  email: string;
  location: { city: string; country: string };
  picture: { large: string };
};

const UserList = () => {
  const [users, setUsers] = useState<APIUser[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(data => setUsers(data.results));
  }, []);

  

  return (
    <ScrollArea className='h-[800px] w-screen rounded-md border p-4 '>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
      {users.map((user, index) => (
        <UserCards
          key={index}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
          location={`${user.location.city}, ${user.location.country}`}
          picture={user.picture.large}
        />
      ))}
    </div>
    <ScrollBar/>
    </ScrollArea>
  );
};

export default UserList;
