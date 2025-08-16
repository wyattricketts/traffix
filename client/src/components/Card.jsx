import { useStyle } from "../contexts/StyleContext";

export default function Card({ title, img = "/logo.png", category, link, tags }) {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];
    const isGlass = currentStyle === "glassmorphism";
    const isMinimal = currentStyle === "minimal";

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div 
            className={`
                ${style.card} w-48 h-64 relative flex-shrink-0 
                ${link ? 'cursor-pointer hover:scale-105' : ''} 
                transition-transform duration-200
            `}
            onClick={handleClick}
        >
            <img
                className={`w-full h-3/4 object-cover ${isGlass || isMinimal ? "" : "border-2 border-black"}`}
                src={img}
                alt={title}
            />
            
            {/* Category badge */}
            <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold ${style.cardTitleBg} ${isGlass ? "" : "border border-black"} rounded`}>
                {category}
            </div>
            
            {/* Title */}
            {isMinimal ? (
                <div className="absolute bottom-3 left-3 px-2 py-1">
                    <p className="text-xs font-medium text-black">{title}</p>
                </div>
            ) : (
                <div className={`absolute bottom-3 left-3 ${style.cardTitleBg} ${isGlass ? "" : "border-2 border-black"} px-2 py-1`}>
                    <p className={`text-xs font-medium ${style.textPrimary}`}>{title}</p>
                </div>
            )}
            
            {/* Link indicator */}
            {link && (
                <div className="absolute top-2 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
            )}
        </div>
    );
}