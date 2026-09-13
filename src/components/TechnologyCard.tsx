import type { Technology } from "../types"

interface TechnologyCardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isSelected: boolean;
};

const TechnologyCard = ({ technology, onAdd, isSelected }: TechnologyCardProps) => {
    return (
        <div className="rounded-x1 border border-gray-200 p-6 shadow-sm">

            <img src={technology.icon} alt={technology.name} className="h-12 w-12" />
            
            <span className="mt-4 inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">{technology.badge}</span>

            <h2 className="mt-3 text-xl font-bold">{technology.name}</h2>

            <p className="mt-2 text-gray-600">{technology.description}</p>

            <p className="mt-3 text-sm text-gray-500">{technology.category}</p>

            <p className="mt-2 text-sm">{technology.difficulty}</p>

            <p className="mt-2">⭐ {technology.rating}</p>
        
            <button onClick={() => onAdd(technology)}
            disabled={isSelected} 
            className="mt-4 w-full rounded-lg bg-[#D91B7E] px-4 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">{isSelected ? "✓ Added to Stack" : "Add to Stack"}</button>
        </div>
    );
};

export default TechnologyCard;