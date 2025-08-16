import Navbar from "../components/nav";
import { useStyle } from "../contexts/StyleContext";

export default function Contact() {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    return (
        <div className={`min-h-screen ${style.background}`}>
            <Navbar position="top" />
            <div className="flex justify-center items-center pt-20 px-8">
                <div className={`${style.cardContainer} max-w-2xl`}>
                    <div className={style.cardHeader}>
                        <h1 className="text-4xl font-bold text-black text-center">
                            Contact Me
                        </h1>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 text-center">
                            Ready to work together? Let's create something amazing!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className={style.card}>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-gray-600">hello@yourname.com</p>
                            </div>
                            <div className={style.card}>
                                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                                <p className="text-gray-600">linkedin.com/in/yourname</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}