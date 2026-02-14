import { Award, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const TrustRibbon = () => {
    const benefits = [
        {
            icon: <Zap className="w-15 h-15 text-orange-500" />,
            title: "Speed",
            desc: "Help within 24 hours"
        },
        {
            icon: <ShieldCheck className="w-15 h-15 text-orange-500" />,
            title: "Privacy",
            desc: "100% HIPAA-compliant"
        },
        {
            icon: <RefreshCw className="w-15 h-15 text-orange-500" />,
            title: "Flexibility",
            desc: "Cancel or switch anytime"
        },
        {
            icon: <Award className="w-15 h-15 text-orange-500" />,
            title: "Verified",
            desc: "Licensed Professionals"
        }
    ];

    return (
        <div className="bg-white border-y border-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center md:text-left space-y-2 group">
                            <div className="h-15 w-15 p-3 flex items-center text-center bg-orange-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <div className="flex flex-col items-center py-1">
                                <h4 className="font-bold text-gray-900 text-xl">{benefit.title}</h4>
                                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustRibbon