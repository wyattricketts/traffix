import Navbar from "../components/nav";
import { useStyle } from "../contexts/StyleContext";

export default function WhoIam() {
    const { currentStyle, styles } = useStyle();
    const style = styles[currentStyle];

    return (
        <div className={`min-h-screen ${style.background}`}>
            <Navbar position="top" />
            <div className="flex justify-center items-center pt-20 px-8">
                <div className={`${style.cardContainer} max-w-3xl`}>
                    <div className={style.cardHeader}>
                        <h1 className={`text-5xl font-bold ${style.textPrimary} text-center`}>
                            Who I Am
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <div className={style.card}>
                            <h2 className={`text-2xl font-bold mb-4 ${style.textPrimary}`}>UX Designer & Problem Solver</h2>
                            <p className={`text-lg ${style.textSecondary} leading-relaxed`}>
                                I'm passionate about creating intuitive, beautiful digital experiences
                                that solve real problems for real people. Through thoughtful research,
                                iterative design, and user testing, I craft interfaces that feel
                                natural and delightful to use.
                            </p>
                        </div>

                        <div className={style.card}>
                            <h2 className={`text-2xl font-bold mb-4 ${style.textPrimary}`}>My Approach</h2>
                            <p className={`text-lg ${style.textSecondary} leading-relaxed`}>
                                Every great design starts with understanding. I believe in putting
                                users at the center of every decision, using data and empathy to
                                guide the creative process. Whether it's a mobile app, website,
                                or complex system, I focus on making technology feel human.
                            </p>
                        </div>

                        <div className={style.card}>
                            <h2 className={`text-2xl font-bold mb-4 ${style.textPrimary}`}>Design Philosophy</h2>
                            <p className={`text-lg ${style.textSecondary} leading-relaxed`}>
                                Good design is invisible. It works so seamlessly that users don't
                                have to think about it. I strive to create experiences that are
                                accessible, inclusive, and genuinely useful in people's daily lives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}