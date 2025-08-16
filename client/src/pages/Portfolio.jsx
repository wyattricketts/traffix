import Navbar from "../components/nav";
import Gallery from "../components/Gallery";
import { useStyle } from "../contexts/StyleContext";

export default function Portfolio() {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    return (
        <div className={`min-h-screen ${style.background}`}>
            <Navbar position="top" />
            <div className="pt-8 pb-8">
                <Gallery showFilters={true} />
            </div>
        </div>
    );
}

