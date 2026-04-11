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

            {/* ═══════════════════════════════════════════════════════════════════
    APPLICATION SECTION
═══════════════════════════════════════════════════════════════════ */}
            <section
                className="pt-32 pb-24 px-6"
                id="apply-form"
                style={{ background: "linear-gradient(160deg, #06122a 0%, #080d1c 55%, #120a03 100%)" }}
            >
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <span className="inline-block font-sora text-[10px] font-bold tracking-[0.15em] uppercase text-orange-400 border border-orange-500/30 bg-orange-500/[0.07] px-3 py-1 rounded-full mb-5">
                            Apply Now
                        </span>
                        <h1 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-100 mb-4 tracking-tight">
                            Ready to Turn{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                                Cold Leads Warm
                            </span>
                            ?
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Complete this brief application so we can understand your specific needs and
                            ensure a perfect fit.
                        </p>
                    </motion.div>

                    {/* Notice Box */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 p-5 rounded-2xl border flex items-start gap-4"
                        style={{ background: "rgba(234,88,12,0.06)", borderColor: "rgba(234,88,12,0.25)" }}
                    >
                        <TriangleAlert className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-sora font-bold text-slate-200 text-base mb-0.5">
                                Important Note
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We will reach out within 24 hours to confirm your setup and next steps.
                            </p>
                        </div>
                    </motion.div>

                    {/* Typeform Embed */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full h-[500px] sm:h-[700px] rounded-2xl overflow-hidden border"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            borderColor: "rgba(255,255,255,0.07)",
                            boxShadow: "0 24px 64px rgba(234,88,12,0.08)",
                        }}
                    >
                        <Widget
                            id="OGJY9FIT"
                            style={{ width: "100%", height: "100%" }}
                            className="my-form"
                        />
                    </motion.div>
                </motion.div>
            </section>

            <CommonFooter />
        </main>
    );
}