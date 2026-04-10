'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, TrendingUp, Mail, AlertCircle, ArrowRight, Handshake, Send, MessageSquare, CalendarCheck, User, Bug, ArrowUpWideNarrow, IceCream, TriangleAlert } from 'lucide-react';
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
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <header className="pt-32 pb-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
        >
          {/* Local Trust Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/50 mb-6">
            <GiMapleLeaf className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Local Edmonton Support</span>
          </motion.div>

          {/* Main Headline - Simple & Callous */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Remember those customers <br />
            <span className="text-yellow-400">you saw last year?</span>
          </motion.h1>

          {/* Subheadline - The "Honest Neighbor" Pitch */}
          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            They aren’t gone—they just forgot you exist. We send honest, personal check-ins to your old clients so they come back to **your** shop instead of a big chain.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
            <Link href='/apply'>
              <button className="cursor-pointer px-10 py-4 bg-yellow-400 text-black font-extrabold rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20 text-lg">
                Get My Customers Back <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="#how-it-works">
              <button className="cursor-pointer px-10 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition text-lg">
                See How It Works
              </button>
            </Link>
          </motion.div>

          {/* ROI Statement - The "Found Money" Logic */}
          <motion.div variants={itemVariants} className="relative inline-block p-8 rounded-2xl bg-gray-900/50 border border-red-500/30 backdrop-blur-sm">
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">The Reality</div>
            <p className="text-gray-100 text-lg">
              Most shops have <span className="bold">$20,000+</span> sitting in old files.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              We help you pull that money back into your bays without you lifting a finger.
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Problem Section */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-950">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why good customers <span className="text-red-500">stop coming back</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              You are great at fixing cars. But you are busy. When a customer leaves your shop, they usually don't hear from you again. By the time they need more work, they've forgotten your name.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Wrong Way */}
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-red-950/10 border border-red-500/30">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">The "Silent" Way</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You finish a job. The customer is happy and drives away.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Their name and number sit in your files, gathering dust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>A few months later, their brakes start making a noise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>They can't remember your shop's name.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg">!</span>
                  <span className="text-white font-semibold">They go to a big chain shop instead. You lose a $1,000 job.</span>
                </li>
              </ul>
            </motion.div>

            {/* The Right Way */}
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-green-950/10 border border-green-500/30">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">The "Cold To Warm" Way</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You focus on the cars. We handle the talking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>We send them a "Thank You" and a helpful car guide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>We remind them when it is time for winter tires or AC checks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>The customer feels like you are a friend they can trust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold text-lg">$</span>
                  <span className="text-white font-semibold">When their car breaks, they call YOU first. Every time.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 text-center">
            <p className="text-lg text-white">
              <span className="font-bold">The Fact:</span> It is much cheaper to keep an old customer than to find a new one.
            </p>
            <p className="text-gray-400 mt-2">Stop chasing new strangers. Start talking to the people who already know you.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We send friendly emails from your shop. It’s not annoying ads. It’s just staying in touch so you stay busy.
            </p>
          </div>

          {/* Visual Workflow */}
          <div className="mb-16">
            <div className="space-y-8">

              {/* Step 1 */}
              <motion.div variants={itemVariants} className="flex items-center gap-8">
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black font-bold text-2xl">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="rounded-2xl p-8 bg-gray-900 border border-yellow-500/30">
                    <div className="flex items-start gap-4 mb-3">
                      <MessageSquare className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">Send us your customer list</h3>
                    </div>
                    <p className="text-gray-400">Send us the names and emails of people who have been to your shop before. These are the people who already know and trust you.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Easy to upload</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-yellow-400">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </motion.div>
              </div>

              {/* Step 2 */}
              <motion.div variants={itemVariants} className="flex items-center gap-8">
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black font-bold text-2xl">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="rounded-2xl p-8 bg-gray-900 border border-yellow-500/30">
                    <div className="flex items-start gap-4 mb-3">
                      <CalendarCheck className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">We write the friendly notes</h3>
                    </div>
                    <p className="text-gray-400">We write "thank you" notes and reminders for things like winter tires or oil changes. Everything is sent from YOUR shop’s email address so it looks personal.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">No spam</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Ready in 7 days</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="text-yellow-400">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </motion.div>
              </div>

              {/* Step 3 */}
              <motion.div variants={itemVariants} className="flex items-center gap-8">
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black font-bold text-2xl">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="rounded-2xl p-8 bg-gray-900 border border-yellow-500/30">
                    <div className="flex items-start gap-4 mb-3">
                      <Send className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">They see your name again</h3>
                    </div>
                    <p className="text-gray-400">Your customers get an email that feels like a real person sent it. They remember that you are the expert who helped them last time.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Sent every month</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center">
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="text-yellow-400">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </motion.div>
              </div>

              {/* Step 4 */}
              <motion.div variants={itemVariants} className="flex items-center gap-8">
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black font-bold text-2xl">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="rounded-2xl p-8 bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 border border-yellow-400">
                    <div className="flex items-start gap-4 mb-3">
                      <Handshake className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-white">They call you for more work</h3>
                    </div>
                    <p className="text-gray-400">The customer calls you when they need a repair. You do the job, you get paid, and you keep the profit. We handled the talk, you handled the car.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Get more repeat business</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-gray-950">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What to expect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">1 in 4</p>
              <p className="text-white font-semibold text-lg">Customers Come Back</p>
              <p className="text-gray-400 text-sm mt-2">Old customers who see your email and book a new service.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">10+ hrs</p>
              <p className="text-white font-semibold text-lg">Saved Every Month</p>
              <p className="text-gray-400 text-sm mt-2">You don't have to spend time calling or texting old clients yourself.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col justify-center min-h-[280px]">
              <div className='relative mb-5'>
                <p className="text-5xl font-bold text-yellow-400 mb-2">2-5</p>
                <p className="text-white font-semibold text-lg">Extra Cars Per Week</p>
                <p className="text-gray-400 text-sm mt-2">More cars in your bays because people finally remember you.</p>
              </div>
              <p className="text-gray-500 text-xs mt-0 italic border-t border-yellow-500/30 pt-3 text-center">
                *Results depend on how many people are in your old files.
              </p>
            </motion.div>
          </div>

          {/* About Me Section */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gray-900 border border-yellow-500/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={NoelPFP.src} alt="Noel" />
                  <AvatarFallback className="text-2xl font-bold bg-yellow-400 text-black">NR</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-white mb-2">Hi, I'm Noel 👋🏿</h2>
                <p className="text-yellow-400 font-semibold mb-4 text-lg">I help local auto shops get busy</p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I saw that many local mechanics lose money because they are too busy to talk to old customers. I build simple systems that do the talking for you.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3 text-lg">
                  I’m not a big marketing company. I’m just a guy who knows how to use software to help honest shop owners make more money. You fix the cars. I’ll make sure they keep coming back.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Just $72 a month. We talk to your old customers for you. Cancel anytime.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-gray-900 border-2 border-yellow-400 shadow-2xl shadow-yellow-400/30 text-center"
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">EARLY BIRD DEAL — 32% OFF</p>

            {/* Monthly Price */}
            <div className="flex justify-center items-baseline mb-2">
              <span className="text-3xl font-bold line-through text-gray-500 mr-4">$106</span>
              <p className="text-6xl font-bold text-yellow-400">$72<span className="text-2xl text-gray-400">/month</span></p>
            </div>

            {/* Countdown Timer Section */}
            <div className="mb-8 p-3 bg-gray-800 rounded-lg border border-yellow-500/50">
              <p className="text-sm font-semibold text-yellow-400 mb-1">Low Price Ends June 2026</p>
              <div className={`text-xl font-mono text-white ${timeLeft.expired ? 'text-red-500' : ''}`}>
                {timeLeft.text}
              </div>
            </div>

            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Notes sent to your old customers from YOUR shop</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Reminders for winter tires, oil changes, and more</span>
              </li>
              <li className="flex items-center gap-3">
                <TriangleAlert className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">We tell you the second a customer wants to book</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowUpWideNarrow className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Add new customers to the list anytime</span>
              </li>
            </ul>

            <Link href="/apply">
              <button className="cursor-pointer w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 text-lg">
                Start Getting Customers Back
              </button>
            </Link>

            <p className="text-gray-400 text-sm mt-4">:)</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-black via-gray-900 to-black">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stop letting your <br /> <span className="text-red-500">old customers forget you</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Start getting your regulars back into your shop this week. For just $72 a month, we make sure they call YOU when they need work.
          </p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <button className="cursor-pointer px-10 py-5 bg-yellow-400 text-black font-extrabold rounded-lg hover:bg-yellow-300 transition transform hover:scale-105 flex items-center justify-center gap-2 text-xl shadow-xl shadow-yellow-400/20">
                Get My Customers Back <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </motion.div>
          <p className="text-gray-500 mt-6 text-sm">No long contracts. Cancel whenever you want.</p>
        </motion.div>
      </section>

      <CommonFooter />
    </main>
  );
}