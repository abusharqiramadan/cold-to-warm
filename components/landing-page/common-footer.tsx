import Link from "next/link"

export function CommonFooter() {
    return (
        < footer className="py-12 px-6 bg-black border-t border-yellow-500/30" >
            <div className="max-w-6xl mx-auto">
                {/* Footer Content Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="text-xl font-bold mb-3">
                            <span className="text-yellow-400">Cold</span>
                            <span className="text-white">→</span>
                            <span className="text-yellow-400">Warm</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Turning cold leads into commissions for realtors.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#how-it-works" className="hover:text-yellow-400 transition">How It Works</a></li>
                            <li><a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="privacy-policy" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-yellow-400 transition">Terms of Service</a></li>
                            <li><a href="/apply" className="hover:text-yellow-400 transition">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-yellow-500/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs">
                            © 2025 Cold→Warm Leads. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built for realtors who don't want to lose deals to forgotten follow-up.
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}