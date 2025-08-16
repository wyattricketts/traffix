import { useStyle } from "../contexts/StyleContext";

export default function FilterButton({ category, isActive, onClick }) {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    return (
        <button
            onClick={() => onClick(category)}
            className={`
                ${isActive ? style.toggleButton : style.button}
                transition-all duration-200
            `}
        >
            {category}
        </button>
    );
}