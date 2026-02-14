import { Calendar, Clock, ShieldCheck, Star } from "lucide-react"
import smilingFace from '../assets/images/smiling-face.jpg'

const HeroSection = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center bg-primary-main overflow-hidden pt-20">
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary-20 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-10 rounded-full blur-3xl -ml-10 -mb-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content column */}
                    <div className="text-left space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-secondary shadow-sm">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-primary-text">100% Private & Licensed Professionals</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-primary-text leading-tight">
                            Start Your <span className="text-primary">Healing</span> Journey
                        </h1>
                        <p className="text-xl text-primary-text/80 max-w-lg leading-relaxed">
                            Connect with licensed therapist. Your path to mental well being begins here, with **confirmed appointments available within 24 hours**
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="w-full bg-[#FF7D00] hover:bg-[#e67000] sm:w-auto text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                                Book My First Session
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-bold text-primary border-2 border-primary/20 hover:bg-primary/5 transition-colors">
                                <Calendar className="mr-2 h-5 w-5" /> View Availability
                            </button>
                        </div>
                        {/* Trust Signals */}
                        <div className="pt-4 flex items-center space-x-6 text-primary-text/60">
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-primary" />
                                <span className="text-sm font-medium">Help in 24h</span>
                            </div>
                            <div className="flex items-center border-l border-secondary pl-6">
                                <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-primary fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium">4.9/5 TrustScore</span>
                            </div>
                        </div>
                    </div>
                    {/* Visual Column */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-in-out">
                            <img
                                src={smilingFace}
                                alt="supportive environment"
                                className="w-full h-[550px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                        </div>
                        {/* Float card: Stats */}
                        <div className="absolute -bottom-6 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 z-20 transition-all hover:scale-105">
                            <div className="flex items-center space-x-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <Star className="text-orange-500 fill-current h-5 w-5" />
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-900 font-extrabold text-2xl">5,000+</p>
                                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Happy Humans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection