
// reusing avatar, info row and ThemeToggle Components
import Avatar from './Avatar';
import InfoRow from './InfoRow';
import ThemeToggle from './ThemeToggle';

const UserCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl p-6 shadow-md">
      <div className="flex flex-col items-center">
        <Avatar src="https://i.pravatar.cc/100" alt="User avatar" /> 
        <h2 className="mt-4 text-xl font-bold">Jane Doe</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">Frontend Developer</p>
      </div>

      <div className="mt-4">
        <InfoRow label="Email" value="jane@example.com" />
        <InfoRow label="Location" value="Bangalore, India" />
      </div>

      <ThemeToggle />
    </div>
  );
};

export default UserCard;
