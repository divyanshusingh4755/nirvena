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
                    <div className="relative hidden lg:block h-[580px]">
                        <div className="grid grid-cols-4 grid-row-4 gap-4 h-full">
                            {/* Large Main Image */}
                            <div className="col-span-3 row-span-4 relative rounded-[3rem] overflow-hidden group shadow-2xl border border-white/20">
                                <img
                                    src={smilingFace}
                                    alt="supportive environment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
                            </div>

                            {/* Top Right - Accent Color/Icon */}
                            <div className="col-span-1 row-span-2 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 p-6 flex flex-col items-center justify-center text-center shadow-sm">
                                <div className="bg-primary/10 p-4 rounded-full mb-3">
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-primary-text/60">Verified</p>
                            </div>

                            {/* Middle Right - Secondary Image */}
                            <div className="col-span-1 row-span-2 bg-primary p-6 rounded-[2.5rem] flex flex-col justify-end text-white shadow-xl">
                                <div>
                                    <p className="text-3xl font-black leading-none">5k+</p>
                                    <p className="text-xs font-medium opacity-80 mt-1 leading-tight">Lives Transformed</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white py-3 px-5 rounded-2xl shadow-xl border border-secondary flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-bold text-primary-text">Next session: Today at 4 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection