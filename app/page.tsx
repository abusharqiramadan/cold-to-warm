'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowDown,
  AlertCircle,
  CheckCircle,
  Database,
  PenTool,
  Users,
  Star,
  Bell,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import NoelPFP from '@/lib/images/noel-pfp.png';
import Link from 'next/link';
import { NavBar } from '@/components/landing-page/navbar';
import { CommonFooter } from '@/components/landing-page/common-footer';
import { GiMapleLeaf } from 'react-icons/gi'

export default function ColdToWarmLanding() {
  const [email, setEmail] = useState('');

  const calculateTimeLeft = () => {
    // Current date is December 18, 2025
    // Target date is Feb 1, 2026
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-[#040b14] text-white font-mulish">
      <NavBar />

      {/* ═══════════════════════════════════════════════════════════════════
        HERO
    ═══════════════════════════════════════════════════════════════════ */}
      <header
        className="pt-32 pb-24 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #06122a 0%, #080d1c 55%, #120a03 100%)",
        }}
      >
        {/* Ambient glows — intentional placement, not scattered */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: "-80px", left: "-80px",
            width: "480px", height: "480px",
            background: "radial-gradient(circle, rgba(30,80,180,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: "-60px", right: "-60px",
            width: "360px", height: "360px",
            background: "radial-gradient(circle, rgba(220,100,30,0.09) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Pilot Rate Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{
              background: "rgba(234,120,40,0.08)",
              borderColor: "rgba(234,120,40,0.35)",
            }}
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-orange-500" />
            </span>
            <span className="text-orange-400 text-[11px] font-sora font-bold uppercase tracking-widest">
              $72/mo Pilot Rate — Edmonton Local
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-sora font-extrabold text-slate-100 mb-6 leading-[1.08] tracking-tight"
          >
            Your past clients <br />
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              are getting cold.
            </span>
          </motion.h1>

          {/* Subheadline — FIXED: was rendering literal ** asterisks */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            You did the work, but they&apos;ve already forgotten your name. We automatically{" "}
            <strong className="text-slate-200 font-semibold">warm them up</strong>{" "}
            with personal check-ins that turn old inspections into new 5-star reviews and referrals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-14"
          >
            <Link href="/apply">
              <button className="cursor-pointer px-9 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-sora font-bold rounded-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 text-base tracking-wide">
                Warm Up My Leads <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#how-it-works">
              <button className="cursor-pointer px-9 py-3.5 border border-white/10 bg-white/[0.03] hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/[0.04] text-slate-400 font-sora font-semibold rounded-lg transition-all text-base">
                How It Works
              </button>
            </Link>
          </motion.div>

          {/* ROI Box — FIXED: tracking-treset typo removed */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block px-10 py-8 rounded-2xl border max-w-lg mx-auto"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-700 text-blue-200 font-sora text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              The Math
            </div>
            <p className="text-slate-200 font-sora text-lg font-medium leading-snug">
              One referral pays for{" "}
              <span className="text-orange-400 font-bold italic underline decoration-blue-500 underline-offset-2">
                ~730 days
              </span>{" "}
              of this service.
            </p>
            <p className="text-sm text-slate-500 mt-3 italic leading-relaxed">
              &ldquo;I&apos;m a local guy, not a tech giant. I just want to help your business stay top-of-mind.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════
        PROBLEM — Why referrals go cold
    ═══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 px-6 bg-[#050c18]">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-14">
            <span className="inline-block font-sora text-[10px] font-bold tracking-[0.15em] uppercase text-blue-400 border border-blue-500/30 bg-blue-500/[0.07] px-3 py-1 rounded-full mb-5">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-100 mb-4 tracking-tight">
              Why good referrals <span className="text-blue-400">go cold</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              You provide an incredible inspection. But once the report is sent, you disappear. By the
              time your client&apos;s friend buys a house, your name is long forgotten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {/* Wrong Way */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border"
              style={{ background: "rgba(30,58,138,0.07)", borderColor: "rgba(59,130,246,0.18)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-sora font-bold text-slate-200 mb-5 tracking-tight">
                The &ldquo;One &amp; Done&rdquo; Way
              </h3>
              <ul className="space-y-3.5">
                {[
                  { marker: "×", color: "text-blue-400", text: "You finish the inspection. The buyer moves in and gets busy." },
                  { marker: "×", color: "text-blue-400", text: "Your contact info sits in a buried email attachment, gathering dust." },
                  { marker: "×", color: "text-blue-400", text: "A year later, their brother-in-law asks for an inspector recommendation." },
                  { marker: "×", color: "text-blue-400", text: "They can't remember your name, so they just Google \"local inspector.\"" },
                  { marker: "!", color: "text-red-400", text: "You lose a $500 job and a potential 5-year referral partner.", bold: true },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className={`${item.color} font-sora font-bold flex-shrink-0 mt-0.5 w-4`}>{item.marker}</span>
                    <span className={item.bold ? "text-slate-200 font-semibold" : "text-slate-400"}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Way */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border"
              style={{ background: "rgba(124,45,18,0.07)", borderColor: "rgba(234,88,12,0.22)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-sora font-bold text-slate-200 mb-5 tracking-tight">
                The &ldquo;Cold To Warm&rdquo; Way
              </h3>
              <ul className="space-y-3.5">
                {[
                  { marker: "✓", color: "text-orange-400", text: "You focus on the home. We handle the long-term relationship." },
                  { marker: "✓", color: "text-orange-400", text: "We send a \"Happy Move-In\" note and a seasonal maintenance checklist." },
                  { marker: "✓", color: "text-orange-400", text: "We secure the 5-star review while they're still in the honeymoon phase." },
                  { marker: "✓", color: "text-orange-400", text: "The buyer (and their Realtor) views you as their permanent home expert." },
                  { marker: "$", color: "text-yellow-400", text: "When their friends buy, YOUR name is the only one they share.", bold: true },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className={`${item.color} font-sora font-bold flex-shrink-0 mt-0.5 w-4`}>{item.marker}</span>
                    <span className={item.bold ? "text-slate-200 font-semibold" : "text-slate-400"}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stat Banner — upgraded from a plain paragraph */}
          <motion.div
            variants={itemVariants}
            className="p-7 rounded-2xl border flex flex-wrap items-center justify-between gap-6"
            style={{ background: "rgba(234,88,12,0.05)", borderColor: "rgba(234,88,12,0.15)" }}
          >
            <div className="flex items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-4xl font-sora font-extrabold text-blue-400 tracking-tight">80%</p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mt-1">
                  Would reuse their inspector
                </p>
              </div>
              <span className="text-2xl font-sora font-bold text-white/10">vs</span>
              <div className="text-center">
                <p className="text-4xl font-sora font-extrabold text-orange-400 tracking-tight">12%</p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mt-1">
                  Actually do
                </p>
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-slate-300 font-semibold text-sm leading-relaxed">
                The only difference is who stays warm in their inbox.
              </p>
              <p className="text-slate-500 text-xs italic mt-1">We close that gap — automatically.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════
        SOLUTION — The Warm-Up Process
    ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#040b14]">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-14">
            <span className="inline-block font-sora text-[10px] font-bold tracking-[0.15em] uppercase text-orange-400 border border-orange-500/30 bg-orange-500/[0.07] px-3 py-1 rounded-full mb-5">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-100 mb-4 tracking-tight">
              The &ldquo;Warm Up&rdquo; Process
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              We bridge the gap between &ldquo;Job Completed&rdquo; and &ldquo;Lifetime Referral.&rdquo;
            </p>
          </div>

          <div className="space-y-5">
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <div className="flex-shrink-0 hidden lg:flex flex-col items-center gap-2 pt-8">
                <div className="w-12 h-12 rounded-full bg-blue-700 border-2 border-blue-400 flex items-center justify-center font-sora font-bold text-lg text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]">
                  1
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-blue-500/30 to-transparent" />
              </div>
              <div
                className="flex-grow p-8 rounded-2xl border"
                style={{ background: "rgba(15,30,70,0.5)", borderColor: "rgba(59,130,246,0.2)" }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <Database className="w-7 h-7 text-blue-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-sora font-bold text-slate-200 tracking-tight">
                    Sync Your Past Reports
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed ml-11">
                  Export your client list from your inspection software. These are your &ldquo;Cold&rdquo; leads —
                  people you&apos;ve already helped who just need a nudge.
                </p>
                <div className="mt-4 ml-11">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[11px] font-semibold uppercase tracking-wider">
                    Works with any software
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center lg:justify-start lg:pl-[54px]">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-slate-700"
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <div className="flex-shrink-0 hidden lg:flex flex-col items-center gap-2 pt-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-sora font-bold text-lg text-white"
                  style={{ background: "linear-gradient(to bottom, #3b82f6, #ea580c)" }}
                >
                  2
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />
              </div>
              <div
                className="flex-grow p-8 rounded-2xl border"
                style={{ background: "rgba(60,20,5,0.4)", borderColor: "rgba(234,88,12,0.2)" }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <PenTool className="w-7 h-7 text-orange-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-sora font-bold text-slate-200 tracking-tight">
                    We Personalize the &ldquo;Warm-Up&rdquo;
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed ml-11">
                  We don&apos;t send generic ads. We send helpful maintenance reminders, 11-month warranty alerts,
                  and &ldquo;New Home&rdquo; tips that make you look like a concierge.
                </p>
                <div className="mt-4 ml-11 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-semibold uppercase tracking-wider">
                    100% Automated
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-semibold uppercase tracking-wider">
                    Sent from your name
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center lg:justify-start lg:pl-[54px]">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="text-slate-700"
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="flex items-start gap-6">
              <div className="flex-shrink-0 hidden lg:flex flex-col items-center pt-8">
                <div className="w-12 h-12 rounded-full bg-orange-700 border-2 border-orange-400 flex items-center justify-center font-sora font-bold text-lg text-white shadow-[0_0_16px_rgba(234,88,12,0.4)]">
                  3
                </div>
              </div>
              <div
                className="flex-grow p-8 rounded-2xl border"
                style={{ background: "rgba(60,20,5,0.55)", borderColor: "rgba(234,88,12,0.35)" }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <Users className="w-7 h-7 text-orange-400 flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-sora font-bold text-slate-200 tracking-tight">
                    Referrals on Autopilot
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed ml-11">
                  When their friends or neighbors need an inspection, your name is at the top of their inbox.
                  You stay warm, the referrals stay consistent, and your business grows.
                </p>
                <div className="mt-4 ml-11">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-semibold uppercase tracking-wider">
                    Dominant Local Presence
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════
        RESULTS — What to expect + About Noel
    ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#050c18]">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-14">
            <span className="inline-block font-sora text-[10px] font-bold tracking-[0.15em] uppercase text-orange-400 border border-orange-500/30 bg-orange-500/[0.07] px-3 py-1 rounded-full mb-5">
              Results
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-100 mb-4 tracking-tight">
              What to expect
            </h2>
          </div>

          {/* Metric Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border text-center flex flex-col items-center justify-center min-h-[240px]"
              style={{ background: "rgba(30,58,138,0.12)", borderColor: "rgba(59,130,246,0.25)" }}
            >
              <p className="text-5xl font-sora font-extrabold text-blue-400 tracking-tight mb-2">3–5</p>
              <p className="text-slate-200 font-sora font-bold text-base mb-2">New Reviews Monthly</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Consistent 5-star feedback that pushes you to the top of Google Maps.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border text-center flex flex-col items-center justify-center min-h-[240px]"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="text-5xl font-sora font-extrabold text-slate-100 tracking-tight mb-2">100%</p>
              <p className="text-slate-200 font-sora font-bold text-base mb-2">Automated Reach-out</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                You never have to remember to &ldquo;follow up&rdquo; again. The system does the heavy lifting.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border text-center flex flex-col items-center justify-center min-h-[240px]"
              style={{ background: "rgba(124,45,18,0.12)", borderColor: "rgba(234,88,12,0.25)" }}
            >
              <p className="text-5xl font-sora font-extrabold text-orange-400 tracking-tight mb-2">24mo</p>
              <p className="text-slate-200 font-sora font-bold text-base mb-2">ROI Guarantee</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                One single referral pays for two full years of this service.
              </p>
              <p className="text-slate-600 text-xs italic border-t border-orange-500/20 pt-3 w-full text-center">
                *Based on consistent monthly inspection volume.
              </p>
            </motion.div>
          </div>

          {/* About Noel */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-28 h-28 border-2 border-orange-500/60 shadow-[0_0_24px_rgba(234,88,12,0.25)]">
                  <AvatarImage src={NoelPFP.src} alt="Noel" />
                  <AvatarFallback className="text-xl font-sora font-bold bg-orange-600 text-white">NR</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-sora font-bold text-slate-100 mb-1 tracking-tight">
                  Hi, I&apos;m Noel 👋🏿
                </h2>
                <p className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  I help local inspectors stay top-of-mind
                </p>
                <p className="text-slate-400 leading-relaxed text-base mb-3">
                  I noticed that home inspectors do the hardest work in the real estate chain, but they usually
                  get forgotten as soon as the move-in truck arrives. I build systems that keep you &ldquo;Warm&rdquo;
                  in your client&apos;s inbox.
                </p>
                <p className="text-slate-400 leading-relaxed text-base">
                  I&apos;m an Edmonton local, not some giant agency. I use simple automation to make sure when your
                  clients (or their Realtors) think of a home inspection, they only think of{" "}
                  <strong className="text-slate-200 font-semibold">YOU</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════
        PRICING
    ═══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 px-6 bg-[#040b14]">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-14">
            <span className="inline-block font-sora text-[10px] font-bold tracking-[0.15em] uppercase text-orange-400 border border-orange-500/30 bg-orange-500/[0.07] px-3 py-1 rounded-full mb-5">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-slate-100 mb-4 tracking-tight">
              Simple Pricing
            </h2>
            <p className="text-lg text-slate-500">
              Just $72 a month to keep every past client warm. No setup fees. Cancel anytime.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-xl mx-auto p-8 rounded-3xl border-2 border-orange-500/70 relative overflow-hidden text-center"
            style={{ background: "rgba(15,10,5,0.9)" }}
          >
            {/* Corner ribbon */}
            <div className="absolute top-0 right-0 bg-orange-600 text-white font-sora text-[10px] font-black px-5 py-1.5 rounded-bl-xl uppercase tracking-widest">
              Edmonton Pilot Rate
            </div>

            <p className="text-slate-500 text-[11px] uppercase tracking-[0.18em] font-bold mb-5">
              Founding Member Deal
            </p>

            {/* Price */}
            <div className="flex justify-center items-baseline gap-4 mb-2">
              <span className="text-2xl font-sora font-bold line-through text-slate-600">$106</span>
              <span className="text-6xl font-sora font-extrabold text-slate-100 tracking-tight">
                $72<span className="text-xl text-slate-500 font-normal">/mo</span>
              </span>
            </div>

            {/* Scarcity */}
            <div className="mb-8 px-4 py-2.5 rounded-lg border inline-block"
              style={{ background: "rgba(234,88,12,0.08)", borderColor: "rgba(234,88,12,0.25)" }}>
              <p className="text-sm font-sora font-semibold text-orange-400">
                Only 5 spots left at this rate
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3.5 mb-8 text-left">
              {[
                { icon: Star, text: "Automated 5-Star Review Requests" },
                { icon: Bell, text: "Seasonal Maintenance Checklists (Sent as YOU)" },
                { icon: Calendar, text: "11-Month Warranty Inspection Reminders" },
                { icon: ShieldCheck, text: "Lifetime Referral \"Warm-up\" Sequence" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <Icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Link href="/apply">
              <button className="cursor-pointer w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-sora font-bold rounded-xl transition-all hover:-translate-y-0.5 text-base tracking-wide shadow-lg shadow-orange-600/20">
                Claim My Pilot Spot
              </button>
            </Link>

            <p className="text-slate-600 text-xs mt-4 italic">
              This discount is locked in for the life of your account.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ═══════════════════════════════════════════════════════════════════
        FINAL CTA
    ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(to bottom, #040b14, #0d0500)" }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-sora font-extrabold text-slate-100 mb-6 leading-[1.08] tracking-tight"
          >
            Stop letting your <br />
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              referrals go cold
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            One inspection pays for the whole year. Start turning your past reports into your future business today.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/apply">
              <button className="cursor-pointer px-10 py-4 bg-white hover:bg-orange-400 text-black hover:text-white font-sora font-extrabold rounded-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg shadow-xl shadow-white/10">
                Warm Up My Business <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-slate-600 mt-6 text-sm">
            No long contracts. Edmonton-owned &amp; operated.
          </motion.p>
        </motion.div>
      </section>

      <CommonFooter />
    </main>
  );
}