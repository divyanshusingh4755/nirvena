import { ShieldAlert } from "lucide-react"

const QuickExit = () => {
    const handleQuickExit = () => {
        window.location.href = "https://www.google.com"
    }
    return (
        <button
            onClick={handleQuickExit}
            className="fixed bottom-24 right-6 z-[110] bg-gray-800 text-white px-4 py-2 rounded-full shadow-2xl flex items-center space-x-2 hover:bg-black transition-all group scale-90 sm:scale-100"
            title="Quickly exit this site"
        >
            <ShieldAlert className="w-4 h-4 text-red-400 group-hover:animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">Quick Exit (ESC)</span>
        </button>
    )
}

export default QuickExit