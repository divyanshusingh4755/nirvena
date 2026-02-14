import { Quote, Star } from "lucide-react";

const Testimonials = () => {
    const stories = [
        { name: "M. Kapoor", city: "Mumbai", quote: "I was skeptical about online therapy, but matching with a specialist on Nirvena changed my perspective. I finally feel heard.", rating: 5 },
        { name: "S. Iyer", city: "Bangalore", quote: "The 24-hour appointment promise is real. I got help when I needed it most, not three weeks later.", rating: 5 },
        { name: "R. Verma", city: "Delhi", quote: "The grounding techniques in the resource hub are my daily go-to. It feels like a safe haven in my pocket.", rating: 5 },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                        Success Stories
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Real Healing from <span className="text-orange-500">Real Humans</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <div key={i} className="bg-orange-50/50 p-10 rounded-[3rem] relative border border-orange-100 hover:scale-105 transition-transform duration-300">
                            <Quote className="absolute top-8 right-10 text-orange-200 w-12 h-12" />
                            <div className="flex mb-6">
                                {[...Array(story.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-orange-500 fill-orange-500 mr-1" />
                                ))}
                            </div>
                            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-8 italic">
                                "{story.quote}"
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-orange-500 border border-orange-200">
                                    {story.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                                    <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">{story.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;