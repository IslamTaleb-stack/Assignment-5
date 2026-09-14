import TechnologyCard from './TechnologyCard';
import { useEffect, useState } from 'react';
import type { Technology } from "../types";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TechnologyList = () => {

    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

    const [technologies, setTechnologies] = useState<Technology[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/technologies.json')
            .then((response) => response.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    const handleAddToStack = (technology: Technology) => {
        const alreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id
        );
        if (alreadySelected) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }
        setSelectedTechnologies([...selectedTechnologies, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const isTechnologySelected = (id: number) => {
        return selectedTechnologies.some(
            (technology) => technology.id === id
        );
    };

    const handleRemoveFromStack = (id: number) => {
        const technology = selectedTechnologies.find(
            (technology) => technology.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter(
                (technology) => technology.id !== id
            )
        );

        toast.info(`${technology?.name} removed from your stack!`);
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack!");
    };

    return (
        <section id="technologies" className="container mx-auto px-4 py-16">
            
             <ToastContainer />
           
            {loading ? (
                <p className="text-center text-gray-500">
                    Loading technologies...
                </p>
            ) : (
                <>
                    <h2 className="mb-8 text-3xl font-bold">Explore Technologies</h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    onAdd={handleAddToStack}
                                    isSelected={isTechnologySelected(technology.id)} />
                            ))}</div>

                        <div className="rounded-xl border border-gray-200 p-6">

                            <h3 className="text-xl font-bold">
                                Your Stack ({selectedTechnologies.length})
                            </h3>

                            {selectedTechnologies.length === 0 ? (
                                <p className="mt-4 text-gray-500">
                                    No technologies selected yet
                                </p>
                            ) : (
                                <div className="mt-4 space-y-3">
                                    {selectedTechnologies.map((technology) => (
                                        <div
                                            key={technology.id}
                                            className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">

                                                <img src={technology.icon} alt={technology.name} className="h-10 w-10" />

                                                <div>
                                                    <p className="font-semibold">{technology.name}</p>
                                                    <p className="text-sm text-gray-500">{technology.category}</p>
                                                </div>

                                            </div>

                                            <button
                                                onClick={() => handleRemoveFromStack(technology.id)}
                                                className="text-gray-500 hover:text-red-500">
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={handleRemoveAll}
                                className="mt-6 w-full rounded-lg border border-gray-300 px-4 py-2">
                                Remove All
                            </button>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default TechnologyList;