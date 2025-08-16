import { createContext, useContext, useState } from 'react';

const StyleContext = createContext();

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};

export const StyleProvider = ({ children }) => {
  const [currentStyle, setCurrentStyle] = useState('japanese'); // Start with Japanese Paper

  const styles = {
    japanese: {
      name: 'Japanese',
      nav: 'bg-white border-b-2 border-stone-900',
      navContainer: 'flex pl-8 pr-8 pt-4 pb-4 items-center justify-between max-w-6xl mx-auto',
      logo: 'w-16 h-16 transition-colors duration-200',
      button: 'px-4 py-2 bg-white border-2 border-stone-900 text-stone-900 font-medium hover:bg-orange-50 hover:border-orange-400 transition-all duration-200',
      toggleButton: 'px-3 py-1 bg-stone-900 text-white font-bold hover:bg-orange-400 hover:text-stone-900 transition-all duration-200',

      // ...existing background...
      background: `
        relative overflow-hidden
        bg-[#f8f1e4]
        bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)]
        [background-size:18px_18px]
        before:content-[''] before:absolute before:inset-0 before:pointer-events-none
        before:bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)]
        before:[background-size:44px_44px] before:opacity-60
        after:content-[''] after:absolute after:pointer-events-none
        after:top-6 after:right-[-4rem] after:w-[42rem] after:h-[18rem]
        after:bg-[radial-gradient(ellipse_at_center,rgba(147,116,106,0.18)_0%,rgba(147,116,106,0.10)_40%,transparent_70%)]
        after:rotate-[-8deg] after:blur-[6px] after:opacity-30
      `,

      // Only top-right rounded
      // ...existing code...
      cardContainer: 'bg-[#fffaf0] border-2 border-stone-900 mx-8 my-8 p-8 rounded-none rounded-tr-lg',
      cardHeader: 'bg-[#f3e6d4] border-2 border-stone-900 px-6 py-3 inline-block mb-8 rounded-none rounded-tr-sm',
      card: 'bg-[#fffdf7] border-2 border-stone-900 p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 rounded-none rounded-tr-sm',

      textPrimary: 'text-stone-900',
      textSecondary: 'text-stone-700',

      // Title chip matches warm paper
      cardTitleBg: 'bg-[#fffdf7] rounded-none rounded-tr-sm'
    },
    minimal: {
      name: 'Minimal',
      nav: 'bg-white border-b border-gray-200',
      navContainer: 'flex pl-8 pr-8 pt-6 pb-6 items-center justify-between max-w-6xl mx-auto',
      logo: 'w-12 h-12 rounded-full transition-colors duration-300',
      button: 'px-6 py-2 text-gray-700 font-normal hover:text-black transition-colors duration-300',
      toggleButton: 'px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200',
      background: 'bg-gray-50',
      cardContainer: 'bg-white rounded-lg shadow-sm mx-8 my-8 p-8',
      cardHeader: 'bg-gray-50 rounded-lg px-6 py-3 inline-block mb-8',
      card: 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4',
      textPrimary: 'text-black',
      textSecondary: 'text-gray-700',
      cardTitleBg: 'bg-white'
    },
    neobrutalist: {
      name: 'Neo-Brutal',
      nav: 'bg-white border-b-8 border-black',
      navContainer: 'flex pl-8 pr-8 pt-4 pb-4 items-center justify-between max-w-6xl mx-auto',
      logo: 'w-16 h-16 transition-colors duration-200',
      button: 'px-6 py-3 bg-white border-4 border-black text-black font-black uppercase hover:bg-lime-400 transition-all duration-200',
      toggleButton: 'px-4 py-2 bg-black text-white font-black uppercase hover:bg-lime-400 hover:text-black transition-all duration-200',
      background: 'bg-white',
      cardContainer: 'bg-white border-8 border-black mx-8 my-8 p-8 shadow-[16px_16px_0px_0px_#000000]',
      cardHeader: 'bg-lime-400 border-4 border-black px-6 py-3 inline-block mb-8',
      card: 'bg-white border-4 border-black p-4 hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-200',
      textPrimary: 'text-black',
      textSecondary: 'text-black',
      cardTitleBg: 'bg-lime-400'
    },
    cyberpunk: {
      name: 'Cyberpunk',
      nav: 'bg-black border-b-2 border-cyan-400',
      navContainer: 'flex pl-8 pr-8 pt-4 pb-4 items-center justify-between max-w-6xl mx-auto',
      logo: 'w-16 h-16 hover:shadow-[0_0_20px_#00ffff] transition-all duration-200',
      button: 'px-4 py-2 bg-black border-2 border-cyan-400 text-cyan-400 font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200',
      toggleButton: 'px-3 py-1 bg-pink-500 text-black font-mono font-bold hover:shadow-[0_0_20px_#ff00ff] transition-all duration-200',
      background: 'bg-black',
      cardContainer: 'bg-black border-2 border-cyan-400 mx-8 my-8 p-8 shadow-[0_0_30px_#00ffff]',
      cardHeader: 'bg-gray-900 border-2 border-green-400 px-6 py-3 inline-block mb-8',
      card: 'bg-black border-2 border-cyan-400 p-4 hover:shadow-[0_0_20px_#00ffff] transition-all duration-200',
      textPrimary: 'text-cyan-300',
      textSecondary: 'text-gray-300',
      cardTitleBg: 'bg-gray-900'
    },
    glassmorphism: {
      name: 'Glass',
      nav: 'backdrop-blur-lg bg-white/20 border-b border-white/30',
      navContainer: 'flex pl-8 pr-8 pt-6 pb-6 items-center justify-between max-w-6xl mx-auto',
      logo: 'w-14 h-14 rounded-2xl backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all duration-300',
      button: 'px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 transition-all duration-300',
      toggleButton: 'px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300',
      background: 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500',
      cardContainer: 'backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl mx-8 my-8 p-8',
      cardHeader: 'backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-3 inline-block mb-8',
      card: 'backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300',
      textPrimary: 'text-white',
      textSecondary: 'text-white/90',
      cardTitleBg: 'backdrop-blur-md bg-white/20'
    }
  };

  const toggleStyle = () => {
    const styleKeys = Object.keys(styles);
    const currentIndex = styleKeys.indexOf(currentStyle);
    const nextIndex = (currentIndex + 1) % styleKeys.length;
    setCurrentStyle(styleKeys[nextIndex]);
  };

  return (
    <StyleContext.Provider value={{ currentStyle, styles, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  );
};