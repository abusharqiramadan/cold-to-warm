'use client';

import React from 'react';
import { ArrowRight, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CommonFooter } from '@/components/landing-page/common-footer';
import { NavBar } from '@/components/landing-page/navbar';

export default function TermsOfService() {
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

            {/* Terms Section */}
            <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <Paperclip className="w-12 h-12 text-yellow-400" />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Terms of <span className="text-yellow-400">Service</span>
                        </h1>
                        <p className="text-gray-400">Last updated: April 2026</p>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={itemVariants} className="space-y-12 text-gray-300 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                By subscribing to Cold→Warm Leads, you agree to these terms. This service is designed specifically for auto repair and service professionals in the Edmonton area.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                            <p className="mb-3">
                                We provide automated outreach to your *existing* customer database. As your provider, I will:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li>Clean and organize your "old files" or customer lists</li>
                                <li>Deploy automated reminders for oil changes, seasonal tires, and maintenance</li>
                                <li>Alert you the moment a customer expresses intent to book a service</li>
                                <li>Provide a dashboard or reports on re-engagement rates</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Results Disclaimer</h2>
                            <p>
                                While we aim for a "1 in 4" return rate, results depend entirely on the quality of your shop's records. If your list contains incorrect emails or disconnected numbers, performance will vary. We do not guarantee a specific number of new bookings, but we guarantee the outreach is performed.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Pricing and Billing</h2>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li><span className="font-semibold text-yellow-400">Subscription:</span> $72/month.</li>
                                <li><span className="font-semibold text-yellow-400">No Long Contracts:</span> You can cancel at any time.</li>
                                <li><span className="font-semibold text-yellow-400">Billing:</span> You are billed every 30 days from your signup date.</li>
                            </ul>
                            <p>
                                If you cancel, service continues until the end of your current paid month. No partial refunds are provided.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of Alberta, Canada. Any disputes will be handled within the jurisdiction of Edmonton.
                            </p>
                        </div>
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <Link href="/">
                            <button className="cursor-pointer px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101 flex items-center justify-center gap-2 mx-auto">
                                Back to Home <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer */}
            <CommonFooter />
        </main>
    );
}