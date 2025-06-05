import React from 'react';

type UserCardProps = {
  name?: string;
  age?: number;
  skills?: string[];
  onClick: () => void;
};

const UserCard: React.FC<UserCardProps> = ({
  name = 'Guest',
  age,
  skills = [],
  onClick,
}) => {
  return (
    <div className="border p-4 my-2 rounded" onClick={onClick}>
      <h2 className="font-semibold">{name}</h2>
      {age && <p>Age: {age}</p>}
      {skills.length > 0 && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCard;
