const categories = [
    { id: 1, title: 'Stress & Anxiety', icon: '🧘', bg: 'bg-[#FFF0E6]', text: 'text-[#FF7D00]' },
    { id: 2, title: 'Sleep & Wake up', icon: '🌙', bg: 'bg-[#EBF3FF]', text: 'text-[#0070F3]' },
    { id: 3, title: 'Focus & Work', icon: '🎯', bg: 'bg-[#F2FCE2]', text: 'text-[#4A7C0B]' },
    { id: 4, title: 'Self-Esteem', icon: '✨', bg: 'bg-[#FDF2F8]', text: 'text-[#BE185D]' },
];

const CategoryGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">How can we help?</h2>
                    <p className="text-gray-500 mt-4 text-lg">Choose a focus area to start your journey</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${cat.bg} p-8 rounded-[3rem] text-left cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between min-h-[220px] w-full`}
                        >
                            <div>
                                <div className="text-5xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                                    {cat.icon}
                                </div>
                                <h3 className={`text-2xl font-black leading-tight ${cat.text}`}>
                                    {cat.title}
                                </h3>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-600 font-bold text-sm uppercase tracking-wider">
                                    Explore
                                </span>
                                <div className={`${cat.text} bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity `}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default CategoryGrid