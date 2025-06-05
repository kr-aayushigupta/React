import Avatar from './Avatar';
import InfoRow from './InfoRow';

type Props = {
  name: string;
  email: string;
  location: string;
  picture: string;
};

const UserCard = ({ name, email, location, picture }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl p-6 shadow-md w-[300px]">
      <div className="flex flex-col items-center">
        <Avatar src={picture} alt={name} />
        <h2 className="mt-4 text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">Random User</p>
      </div>
      
      <div className="mt-4">
        <InfoRow label="Email" value={email} />
        <InfoRow label="Location" value={location} />
      </div>
    </div>
  );
};

export default UserCard;
