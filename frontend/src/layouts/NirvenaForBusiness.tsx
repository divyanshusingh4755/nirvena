import { Building2 } from "lucide-react";

const NirvenaForBusiness = () => {
    return (
        <section className="py-20 bg-gray-900 mx-6 mb-24 rounded-[4rem] text-center overflow-hideen relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Support your team's <span>well-being.</span></h2>
                <p className="text-gray-400 text-xl mb-10">Bring Nirvena to your workplace with custom plans for teams of all sizes.</p>
                <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-black hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 ">
                    Nirvena for Business
                </button>
            </div>
        </section>
    )
}

export default NirvenaForBusiness;