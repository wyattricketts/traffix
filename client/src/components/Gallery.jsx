import { useStyle } from "../contexts/StyleContext";

export default function Card({ title, img = "/logo.png" }) {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    return (
        <div className={`${style.card} w-48 h-64 relative flex-shrink-0`}>
            <img
                className="w-full h-3/4 object-cover border-2 border-black"
                src={img}
                alt={title}
            />
            <div className="absolute bottom-3 left-3 bg-white border-2 border-black px-2 py-1">
                <p className="text-xs font-medium text-black">{title}</p>
            </div>
        </div>
    );
}