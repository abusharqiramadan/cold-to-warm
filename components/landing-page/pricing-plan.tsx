import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion'
import { CheckCircle, Mail, TriangleAlert, User, Bug, ArrowUpWideNarrow } from 'lucide-react';

// Define the component props for Framer Motion, if applicable
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
};

const PricingCard: React.FC = () => {
    const calculateTimeLeft = () => {
        // Current date is December 13, 2025, 3:03:40 PM MST.
        // Target date is Jan 1, 2026.
        const countDownDate = new Date('Feb 1, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            return { expired: true, text: 'EXPIRED' };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return {
            expired: false,
            text: `${days}d ${hours}:${minutes}:${seconds}`,
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(timer);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-gray-900 border-2 border-yellow-400 shadow-2xl shadow-yellow-400/30 text-center"
        >
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">50% OFF LIFETIME MEMBERSHIP</p>

            {/* Monthly Price Update */}
            <div className="flex justify-center items-baseline mb-2">
                <span className="text-3xl font-bold line-through text-gray-500 mr-4">$100</span>
                <p className="text-6xl font-bold text-yellow-400">$50<span className="text-2xl text-gray-400">/month</span></p>
            </div>

            {/* Setup Fee remains $100 */}
            <p className="text-gray-400 mb-8">$100 setup fee (one-time)</p>

            {/* Countdown Timer Section */}
            <div className="mb-8 p-3 bg-gray-800 rounded-lg border border-yellow-500/50">
                <p className="text-sm font-semibold text-yellow-400 mb-1">Offer Ends Feburary 2026</p>
                <div className={`text-xl font-mono text-white ${timeLeft.expired ? 'text-red-500' : ''}`}>
                    {timeLeft.text}
                </div>
            </div>

            <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    <span className="text-gray-300">Monthly reports with lead recovery data and engagement insights</span>
                </li>
                <li className="flex items-center gap-3">
                    <TriangleAlert className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    <span className="text-gray-300">Real-time engagement alerts</span>
                </li>
                <li className="flex items-center gap-3">
                    <Bug className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    <span className="text-gray-300">24/7 Free Debugging & Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                    <ArrowUpWideNarrow className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    <span className="text-gray-300">Easy List Updates Anytime</span>
                </li>
            </ul>
            <Link href="/apply">
                <button className="cursor-pointer w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101">
                    Get Started Now
                </button>
            </Link>
            <p className="text-gray-400 text-sm mt-4">First month: $150 total ($100 setup + $50 first month)</p>
        </motion.div>
    );
};

export default PricingCard;