import { Link } from 'react-router-dom';
import { useStyle } from '../contexts/StyleContext';

export default function Navbar({ position = 'top' }) {
    const { currentStyle, styles, toggleStyle } = useStyle();
    const style = styles[currentStyle];

    return (
        <nav className={style.nav}>
            <ul className={style.navContainer}>
                <li>
                    <Link to="/home">
                        <img 
                            src="/logo.png" 
                            alt="Logo" 
                            className={style.logo}
                        />
                    </Link>
                </li>
                
                {/* Navigation Links */}
                <div className="flex gap-6 items-center">
                    <li>
                        <Link 
                            className={style.button}
                            to="/portfolio"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.button}
                            to="/whoiam"
                        >
                            Who I am
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.button}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    
                    {/* Style Toggle Button - only show on top nav */}
                    {position === 'top' && (
                        <li>
                            <button 
                                onClick={toggleStyle}
                                className={style.toggleButton}
                                title={`Switch to next style (Current: ${style.name})`}
                            >
                                {style.name} ⚡
                            </button>
                        </li>
                    )}
                </div>
            </ul>
        </nav>
    );
}