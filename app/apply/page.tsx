'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, TriangleAlert } from 'lucide-react';
import { NavBar } from '@/components/landing-page/navbar'; // Assuming this path is correct
import { motion } from 'framer-motion';
import { Widget } from '@typeform/embed-react';
import { CommonFooter } from '@/components/landing-page/common-footer';

// Replace this with your actual Typeform URL
const TYPEFORM_EMBED_URL = "https://your-username.typeform.com/to/your-form-id";

export default function ApplyPage() {
    const [isLoading, setIsLoading] = useState(true);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <NavBar />

            {/* Application Section */}
            <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black" id="apply-form">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Ready to Turn <span className="text-yellow-400">Cold Leads Warm</span>?
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Please complete this brief application so we can understand your specific needs and ensure a perfect fit for our preference-based matching system.
                        </p>
                    </motion.div>

                    {/* Warning/Instruction Box */}
                    <motion.div variants={itemVariants} className="mb-8 p-4 md:p-6 rounded-xl bg-gray-900 border border-yellow-500/50 flex items-start gap-4">
                        <TriangleAlert className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl font-semibold text-white">Important Note:</h2>
                            <p className="text-gray-300 mt-1">
                                We will reach out within 24 hours to confirm your setup and next steps.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        // Reduced the height of the container
                        className="w-full h-[500px] sm:h-[700px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl shadow-yellow-900/50 relative"
                    >
                        {/* The Typeform Widget, styled to take up 100% of the parent's height and width */}
                        <Widget
                            id="BUxvcNmc"
                            style={{ width: '100%', height: '100%' }} // <- Updated to 100% width and height
                            className="my-form"
                        />
                    </motion.div>

                    {/* Footer Call-to-Action
                    <motion.div variants={itemVariants} className="mt-12 text-center">
                        <Link href="#contact">
                            <button className="cursor-pointer px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101 flex items-center justify-center gap-2 mx-auto">
                                Contact Support If You Have Questions <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </motion.div>*/}
                </motion.div>
            </section>

            <CommonFooter />
        </main>
    );
}