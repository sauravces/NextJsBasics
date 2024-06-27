import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
