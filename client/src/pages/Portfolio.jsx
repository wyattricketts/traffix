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
                <div className="flex justify-center mb-8">
                    <div className={style.cardHeader}>
                        <h1 className="text-4xl font-bold text-black text-center">
                            My Portfolio
                        </h1>
                        <p className="text-lg text-gray-600 text-center mt-2">
                            Explore my work across different projects and experiences
                        </p>
                    </div>
                </div>
                <Gallery header="All Projects" type="project" detail="true" />
                <Gallery header="Work Experience" type="job" detail="true" />
            </div>
        </div>
    );
}

