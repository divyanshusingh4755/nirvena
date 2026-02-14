import { ArrowRight, BookOpen } from "lucide-react";

const ResourceHub = () => {
    const articles = [
        { title: "5 Ways to Stop a Panic Attack in 60 Seconds", tag: "Techniques", readTime: "4 min read" },
        { title: "The Science of Sleep: Why You Wake Up Tired", tag: "Sleep", readTime: "6 min read" },
        { title: "Understanding High-Functioning Anxiety", tag: "Education", readTime: "5 min read" },
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Healing Resources</h2>
                        <p className="text-gray-500 text-lg">Jargon-free guides to help you understand your mind.</p>
                    </div>
                    <button className="hidden md:flex items-center text-orange-600 font-bold hover:underline">
                        Explore Full Library <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((post, i) => (
                        <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                <BookOpen size={48} className="text-orange-400" />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-widest text-orange-600">
                                    <span>{post.tag}</span>
                                    <span className="text-gray-400">{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-6 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                                <div className="flex items-center text-gray-900 font-bold text-sm">
                                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResourceHub;