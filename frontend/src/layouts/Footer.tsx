const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-3xl font-bold text-orange-500 tracking-tighter">nirvena<span className="text-yellow-500">.</span></span>
                        <p className="mt-4 text-gray-500 font-medium leading-relaxed">Making professional mental health support accessible, private, and human</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Services</h5>
                        <ul className="space-y-4 text-gray-600 font-medium">
                            <li><a href="#" className="hover:text-orange-500">Individual Therapy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Mindfulness Coaching</a></li>
                            <li><a href="#" className="hover:text-orange-500">Sleep Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Resources</h5>
                        <ul className="space-y-4 text-gray-600 font-medium">
                            <li><a href="#" className="hover:text-orange-500">Articles</a></li>
                            <li><a href="#" className="hover:text-orange-500">Grounding Tools</a></li>
                            <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Immediate Help</h5>
                        <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                            {/* <p className="text-red-700 font-bold text-sm mb-2">Crisis Hotline</p>
                            <p className="text-red-600 text-lg font-black tracking-widest">Contact a suicide and crisis hotline</p> */}
                            <p className="text-red-700 text-xs">Available 24/7. 100% Free.</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-50 pt-10 flex flex-col md:flex justify-between items-center text-gray-400 text-sm font-medium">
                    <p>© 2026 Nirvena Health. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-1">
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-900">Terms of Services</a>
                        <a href="#" className="hover:text-gray-900">HIPAA Notice</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer