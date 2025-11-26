import { useState, useRef, useEffect } from 'react';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((error) => {
                    console.log('Auto-play was prevented:', error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                loop
                src="/music/Sugar.mp3"
            />

            {/* Background square */}
            <div className="fixed top-4 right-4 z-50 w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
                <button
                    onClick={toggleMusic}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={isPlaying ? 'Tắt nhạc' : 'Phát nhạc'}
                >
                    {isPlaying ? (
                        // Vinyl record spinning
                        <div className="relative w-full h-full">
                            {/* Outer circle - vinyl */}
                            <div className={`absolute inset-0 bg-gray-800 rounded-full shadow-xl ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
                                {/* Center yellow circle */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>

                                {/* Grooves */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-gray-700 rounded-full"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 border border-gray-700 rounded-full"></div>
                            </div>

                            {/* Music note icon - rotating around center */}
                            <div
                                className="absolute top-1/2 left-1/2 text-rose-500 text-xl md:text-2xl"
                                style={{
                                    animation: isPlaying ? 'orbit 3s linear infinite' : 'none',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                ♪
                            </div>
                        </div>
                    ) : (
                        // Muted/Off icon
                        <div className="relative w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                            {/* Speaker with X */}
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8 text-gray-600"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                <path d="M16 2l-2 2 2 2 2-2-2-2zm0 16l-2 2 2 2 2-2-2-2z" opacity="0.5" />
                            </svg>
                            {/* X mark */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                        </div>
                    )}
                </button>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
      `}</style>
        </>
    );
}

export default MusicPlayer;
