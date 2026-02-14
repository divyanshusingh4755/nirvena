const PricingTransparency = () => {
    return (
        <section className="py-12 bg-orange-50/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm border border-orange-100 mb-6">
                    <span className="text-orange-600 font-bold text-sm tracking-wide uppercase">Simple Pricing</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">No Subscriptions. Pay as you heal.</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    We believe mental health shouldn't be a financial burden. Book individual sessions with licensed experts-**no monthly commitments or hidden fees.**
                </p>
                <div className="flex justify-center items-baseline space-x-2">
                    <span className="text-gray-500 text-lg">Starting from</span>
                    <span className="text-5xl font-black text-gray-900">$49</span>
                    <span className="text-gray-500 font-medium">/ session</span>
                </div>
            </div>
        </section>
    )
}

export default PricingTransparency