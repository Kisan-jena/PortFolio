'use client';

import { useEffect, useRef, useState } from 'react';
import {Search2} from '../icons';

const Search = () => {
  const [pressed, setPressed] = useState(false);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickAudioRef.current = new Audio('/sounds/421581__uberbosser__wkey.wav');
    clickAudioRef.current.volume = 0.5;
  }, []);

  const triggerPress = () => {
    const audio = clickAudioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio.playbackRate = 0.9 + Math.random() * 0.2; // slight random pitch each press
      void audio.play().catch(() => {
        // Ignore transient play interruptions.
      });
    }

    setPressed(true);
    setTimeout(() => setPressed(false), 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        triggerPress();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <button
      onClick={triggerPress}
      className="flex items-center px-2 py-1.5 rounded-2xl border border-neutral-300/80 dark:border-neutral-500/70 dark:bg-neutral-700/15"
    >
      <Search2 size={16} color="currentColor" className="text-neutral-400" />
      <div className="flex items-center gap-1 ml-1">
        <kbd
          className={`text-xs text-neutral-400 dark:text-neutral-50/60 bg-neutral-200/50 dark:bg-neutral-300/70 rounded px-1 transition-all duration-75
            ${
              pressed
                ? 'shadow-none translate-y-px'
                : 'shadow-2xs shadow-neutral-300/80 dark:shadow-neutral-400/35'
            }`}
        >
          Ctrl
        </kbd>
        <kbd
          className={`text-xs text-neutral-400 dark:text-neutral-50/60 bg-neutral-200/50 dark:bg-neutral-300/70 rounded px-1 transition-all duration-75
            ${
              pressed
                ? 'shadow-none translate-y-px'
                : 'shadow-2xs shadow-neutral-300/80 dark:shadow-neutral-400/35'
            }`}
        >
          K
        </kbd>
      </div>
    </button>
  );
};

export default Search;
