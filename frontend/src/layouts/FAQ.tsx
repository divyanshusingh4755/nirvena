import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<null | number>(null);

    const questions = [
        { q: "Do you take insurance?", a: "We currently operate on a pay-per-session model to keep costs transparent, but we provide 'superbills' you can submit to your provider for reimbursement." },
        { q: "How long are the sessions?", a: "Standard therapeutic sessions are 45-50 minutes. Mindfulness coaching sessions are typically 30 minutes." },
        { q: "Is it video or audio?", a: "You choose! Our secure platform supports HD video, clear audio-only calls, and encrypted messaging." },
        { q: "What if I don't vibe with my therapist?", a: "Healing is personal. You can switch to a different professional at any time with zero awkwardness or extra fees." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex items-center justify-center space-x-3 mb-12">
                    <HelpCircle className="text-orange-500 w-8 h-8" />
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Common Questions</h2>
                </div>
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="border border-gray-100 rounded-[2rem] overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-orange-50 transition-colors"
                            >
                                <span className="font-bold text-gray-900 text-lg">{item.q}</span>
                                <ChevronDown className={`text-orange-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === i && (
                                <div className="p-6 pt-0 mt-3 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-1">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ