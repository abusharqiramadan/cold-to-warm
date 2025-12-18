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
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <Paperclip className="w-12 h-12 text-yellow-400" />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Terms of <span className="text-yellow-400">Service</span>
                        </h1>
                        <p className="text-gray-400">Last updated: December 2025</p>
                    </motion.div>

                    {/* Disclaimer */}
                    <motion.div variants={itemVariants} className="mb-12 p-6 rounded-xl bg-yellow-950/30 border border-yellow-500/50">
                        <p className="text-yellow-200 text-sm">
                            <strong>Disclaimer:</strong> These terms are provided for informational purposes. This is not legal advice. We recommend consulting with a legal professional to ensure compliance with your jurisdiction's laws.
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={itemVariants} className="space-y-12 text-gray-300 leading-relaxed">
                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                By subscribing to Cold→Warm Leads ("Service"), you agree to be bound by these Terms of Service. If you do not agree to abide by these terms, please do not use this service.
                            </p>
                        </div>

                        {/* Section 2 - SERVICE DESCRIPTION */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                            <p className="mb-3">
                                Cold→Warm Leads provides personalized email outreach and lead follow-up services for real estate professionals. As your service provider, I will:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li>Set up and organize your cold lead list</li>
                                <li>Send personalized monthly market update emails to your cold leads on your behalf using your email domain</li>
                                <li>Monitor lead engagement and track which leads show interest</li>
                                <li>Alert you in real-time when leads demonstrate buying intent</li>
                                <li>Provide monthly performance reports with engagement statistics</li>
                            </ul>
                            <p>
                                You remain responsible for follow-up conversations, closing deals, and maintaining compliance with all email regulations and consumer protection laws.
                            </p>
                        </div>

                        {/* Section 3 - YOUR RESPONSIBILITIES */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Your Responsibilities</h2>
                            <p className="mb-3">
                                You agree to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Provide accurate information about your cold leads (names, emails, property preferences)</li>
                                <li>Ensure all leads have either consented to receive communications or you have a legitimate business relationship with them</li>
                                <li>Comply with Canadian Anti-Spam Legislation (CASL) and all applicable email marketing regulations</li>
                                <li>Respond to leads promptly when I alert you of their interest</li>
                                <li>Not use this service for unlawful purposes or spam</li>
                                <li>Maintain the confidentiality of your account login information</li>
                            </ul>
                        </div>

                        {/* Section 4 - RESULTS DISCLAIMER */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Results Disclaimer</h2>
                            <p className="mb-3">
                                Results from Cold→Warm Leads vary significantly based on:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li>Quality and accuracy of your cold lead list</li>
                                <li>Your local market conditions and demand</li>
                                <li>Your ability to close deals when leads show interest</li>
                                <li>How quickly you follow up with engaged leads</li>
                                <li>The accuracy of buyer preference data you provide</li>
                            </ul>
                            <p>
                                We estimate approximately 30% of cold leads will re-engage per month, with potential for 1-3 additional deals per year. However, we make no guarantee of specific results. Past performance does not guarantee future results. Real estate transactions depend on many factors beyond our control.
                            </p>
                        </div>

                        {/* Section 5 - PAYMENT AND BILLING */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Payment and Billing</h2>
                            <p className="mb-3">
                                By subscribing to Cold→Warm Leads, you agree to the following payment terms:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li><span className="font-semibold">Setup Fee:</span> $100 (one-time, due upon signup)</li>
                                <li><span className="font-semibold">Monthly Subscription:</span> $50/month (recurring, due upfront)</li>
                                <li><span className="font-semibold">Launch Special:</span> 50% off monthly rate ($50/month instead of $100) through February 2026</li>
                                <li>Payment is due upfront before services begin</li>
                                <li>Billing occurs on the same date each month</li>
                            </ul>
                            <p className="mb-3">
                                <span className="font-semibold">Cancellation:</span> You may cancel your subscription at any time with written notice. Cancellation takes effect at the end of your current billing cycle. No refunds are issued for partial months or unused portions of your subscription.
                            </p>
                            <p>
                                <span className="font-semibold">Price Changes:</span> I reserve the right to adjust pricing after February 2026. You will receive 30 days' notice of any price increase. Your current subscription rate will not change during your active billing cycle.
                            </p>
                        </div>

                        {/* Section 6 - DATA AND PRIVACY */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Data Ownership and Privacy</h2>
                            <p className="mb-3">
                                <span className="font-semibold">Your Data:</span> You retain full ownership of all cold lead data you provide. You may request export or deletion of your data at any time.
                            </p>
                            <p className="mb-3">
                                <span className="font-semibold">CASL Compliance:</span> All emails sent through this service include unsubscribe options. If a lead requests removal from your communications, they will be immediately unsubscribed and will not receive further emails from you through Cold→Warm Leads.
                            </p>
                            <p>
                                <span className="font-semibold">Data Retention:</span> Upon subscription cancellation, I will delete all your cold lead data within 30 days unless legally required to retain it.
                            </p>
                        </div>

                        {/* Section 7 - LIMITATION OF LIABILITY */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                            <p className="mb-3">
                                I am not liable for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                                <li>Loss of deals or commissions due to market conditions or your closing ability</li>
                                <li>Quality or accuracy of leads you provide</li>
                                <li>Your compliance with email laws or regulations</li>
                                <li>Technical delays in email delivery (though I will make reasonable efforts to send timely)</li>
                                <li>Actions taken by email providers or ISPs that affect deliverability</li>
                            </ul>
                            <p>
                                My total liability for any claim shall not exceed the amount you paid in the 12 months preceding the claim. I am not liable for indirect, incidental, or consequential damages.
                            </p>
                        </div>

                        {/* Section 8 - TERMINATION */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                            <p>
                                I may terminate or suspend your account immediately, without prior notice, if you: (1) breach any of these Terms of Service, (2) provide inaccurate or fraudulent lead data, (3) violate email marketing laws, or (4) use the service for unlawful purposes. Upon termination, your data will be deleted within 30 days.
                            </p>
                        </div>

                        {/* Section 9 - CHANGES TO TERMS */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                            <p>
                                I may revise these Terms of Service at any time. Significant changes will be communicated via email at least 14 days in advance. Your continued use of the service following notification of changes constitutes your acceptance of the updated Terms.
                            </p>
                        </div>

                        {/* Section 10 - GOVERNING LAW */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                            <p>
                                These Terms of Service are governed by and construed in accordance with the laws of Alberta, Canada, and you agree to submit to the exclusive jurisdiction of the courts in Alberta for any disputes.
                            </p>
                        </div>

                        {/* Section 11 - CONTACT INFORMATION */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                            <div className="mt-4 p-4 rounded-lg bg-gray-900 border border-yellow-500/30">
                                <p className="text-yellow-400 font-semibold">Cold→Warm Leads</p>
                                <p className="text-gray-300">Founder: Noel Ramadan</p>
                                <p className="text-gray-300">Email: noelramadan06@gmail.com</p>
                                <p className="text-gray-300">Location: Edmonton, Alberta, Canada</p>
                            </div>
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