import { Link } from "react-router-dom";
import { Club } from "../types/club";

interface ClubCardProps {
  club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Link
      to={`/clubs/${club.id}`}
      className="block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden"
    >
      <img
        src={club.logo}
        alt={club.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{club.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {club.description}
        </p>
      </div>
    </Link>
  );
};

export default ClubCard;
