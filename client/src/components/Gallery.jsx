import { useState, useEffect } from 'react';
import Card from "./Card";
import FilterButton from "./FilterButton";
import portfolio from "./portfolio.json";
import { useStyle } from "../contexts/StyleContext";

export default function Gallery({ showFilters = false, header, detail }) {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    const [activeFilter, setActiveFilter] = useState('All');
    const [maxCards, setMaxCards] = useState(2);

    // Get unique categories
    const categories = ['All', ...new Set(portfolio.map(item => item.category))];

    // Filter portfolio items
    const filteredPortfolio = activeFilter === 'All'
        ? portfolio
        : portfolio.filter(item => item.category === activeFilter);

    // Limit cards based on screen size
    const displayedPortfolio = filteredPortfolio.slice(0, maxCards);

    // Update max cards based on screen size
    useEffect(() => {
        const updateMaxCards = () => {
            if (window.innerWidth >= 640) { // sm breakpoint
                setMaxCards(3);
            } else {
                setMaxCards(2);
            }
        };

        updateMaxCards();
        window.addEventListener('resize', updateMaxCards);
        return () => window.removeEventListener('resize', updateMaxCards);
    }, []);

    return (
        <div className={style.cardContainer}>
            {header && (
                <div className={style.cardHeader}>
                    <h1 className={`text-2xl font-bold ${style.textPrimary}`}>
                        {header}
                    </h1>
                </div>
            )}

            {showFilters && (
                <div className="mb-6">
                    <h3 className={`text-lg font-semibold ${style.textPrimary} mb-3`}>
                        Filter by Category:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <FilterButton
                                key={category}
                                category={category}
                                isActive={activeFilter === category}
                                onClick={setActiveFilter}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                {displayedPortfolio.map(item => (
                    <Card
                        key={item._id}
                        title={item.title}
                        img={item.img}
                        category={item.category}
                        link={item.link}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}