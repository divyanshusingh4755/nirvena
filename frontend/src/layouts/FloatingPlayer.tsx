import { Pause, Play, RotateCcw, Volume2, X } from "lucide-react";
import { useRef, useState } from "react"

const FloatingPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setIsProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const audioRef = useRef<HTMLAudioElement>(null);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (isPlaying) audioRef?.current?.pause()
        else audioRef?.current?.play();
        setIsPlaying(!isPlaying)
    }

    // Update progress bar
    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (!audio) return;

        const current = audio.currentTime;
        const duration = audio.duration;

        if (duration && !isNaN(duration) && isFinite(duration)) {
            setIsProgress((current / duration) * 100);
        } else {
            setIsProgress(0);
        }
    }

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl">
            <div className="bg-white/90 backdrop-blur-xl border border-orange-100 shadow-2xl rounded-[3rem] p-4 flex items-center justify-between">
                {/* Track Info */}
                <div className="flex items-center space-x-4 ml-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">
                        🧡
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight">Morning Clam</h4>
                        <p className="text-gray-500 text-xs font-medium">with Andy Puddicombe</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-6">
                    <button className="text-gray-400 hover:text-orange-500 transition-colors">
                        <RotateCcw size={20} />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-14 h-14 bg-[#FF7D00] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                    >
                        {isPlaying ? <Pause fill="currentColor" /> : <Play className="ml-1" fill="currentColor" />}
                    </button>
                    <div className="hidden sm:flex items-center space-x-2 text-gray-400">
                        <Volume2 size={20} />
                        <div className="w-20 h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-orange-300 h-full w-2/3" />
                        </div>
                    </div>
                </div>

                {/* close/minimize */}
                <button onClick={() => setIsVisible(false)}
                    className="mr-2 p-2 text-gray-300 hover:text-red-400 transition-colors">
                    <X size={20} />
                </button>

                {/* Hidden audio element */}
                <audio
                    ref={audioRef}
                    src=""
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                />

                {/* Absolute Progress line at very bottom of pill */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-transparent">
                    <div
                        className="h-full bg-orange-500/30 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div >
    )
}

export default FloatingPlayer