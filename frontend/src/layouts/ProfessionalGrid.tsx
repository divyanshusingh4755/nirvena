import { CheckCircle, Star, Video } from "lucide-react";

const professionals = [
    { name: "Dr. Sarah Jenkins", role: "Clinical Psychologist", exp: "12y Exp", rating: 4.9, tags: ["Anxiety", "Trauma"] },
    { name: "Marcus Thorne", role: "Mindfulness Coach", exp: "8y Exp", rating: 4.8, tags: ["Focus", "Sleep"] },
    { name: "Priya Rao", role: "CBT Specialist", exp: "10y Exp", rating: 5.0, tags: ["Self-Esteem", "Stress"] },
];

const ProfessionalGrid = () => {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl text-left">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Licensed Professionals</h2>
                        <p className="text-gray-500 text-lg">Every healer on Nirvena is strictly vetted and 100% licensed in their field.</p>
                    </div>
                    <button className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1 hover:text-orange-700 transition-colors">
                        View All Professionals →
                    </button>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {professionals.map((pro, i) => (
                        <div key={i} className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="relative w-24 h-24 mb-6">
                                <div className="w-full h-full bg-orange-100 rounded-full flex items-center justify-center text-3xl">👤</div>
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Verified License">
                                    <CheckCircle size={14} fill="currentColor" className="text-blue-500 fill-white" />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-1">
                                <Star size={16} className="text-orange-500 fill-orange-500" />
                                <span className="text-sm font-bold text-gray-900">{pro.rating}</span>
                                <span className="text-gray-400 text-sm">• {pro.exp}</span>
                            </div>
                            <h4 className="text-xl font-black text-gray-900 mb-1">{pro.name}</h4>
                            <p className="text-orange-600 font-bold text-sm mb-6 uppercase tracking-wider">{pro.role}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {pro.tags.map((tag) => (
                                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold" key={tag}>{tag}</span>
                                ))}
                            </div>

                            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 group-hover:bg-orange-500 transition-colors">
                                <Video size={18} />
                                <span>Book Video Session</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfessionalGrid