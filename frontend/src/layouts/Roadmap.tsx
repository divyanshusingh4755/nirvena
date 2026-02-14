import { UserCheck, ClipboardCheck, Sparkles } from "lucide-react";

const Roadmap = () => {
    const steps = [
        {
            icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
            title: "Quick Assessment",
            desc: "Answer a few gentle questions about your current focus and goals."
        },
        {
            icon: <UserCheck className="w-8 h-8 text-orange-500" />,
            title: "Find Your Match",
            desc: "We’ll suggest the best-licensed professionals based on your needs."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-orange-500" />,
            title: "Start Healing",
            desc: "Book your first video or audio session within 24 hours."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-gray-900">Your Path to Nirvena</h2>
                    <p className="text-gray-500 mt-4 text-lg">Three simple steps to a better you.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Visual Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white border-4 border-orange-50 rounded-full flex items-center justify-center shadow-xl group-hover:border-orange-200 transition-all duration-500 mb-8 relative">
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                    {i + 1}
                                </div>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap