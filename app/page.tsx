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
      <header className="pt-32 pb-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/50 mb-6">
            <GiMapleLeaf className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-semibold">Canadian Founded</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Never Lose a Deal to <br /> <span className="text-yellow-400">Forgotten Follow-Up</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We send personalized emails from YOUR company to your old customers. Not spam. Real check-ins that keep you top-of-mind. You focus on the jobs. We handle the follow-up.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
            <Link href='/apply'>
              <button className="cursor-pointer px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="#how-it-works">
              <button className="cursor-pointer px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500/10 transition">
                See How It Works
              </button>
            </Link>
          </motion.div>

          {/* ROI Statement */}
          <motion.div variants={itemVariants} className="inline-block p-6 rounded-2xl bg-gray-900 border border-red-500/50 shadow-2xl shadow-red-500/20">
            <p className="text-gray-100">
              <span className="font-bold text-lg">1 maintenance contract missed</span> = <span className="text-red-400 font-bold">-$500+ in revenue</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">Every cold lead you don't follow up is money left on the table.</p>
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
            <h2 className="text-5xl font-bold text-white mb-4">
              The Follow-Up Gap Every HVAC Contractor Faces
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              You're great at doing jobs and fixing systems. But here's the problem: old customers go silent, and you're too busy to stay in touch. Those maintenance contracts and seasonal upsells? They're worth hundreds in lost revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-red-950/20 border border-red-500/50">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">Without Us (The Reality)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You finish a job. Customer says "thanks, I'll call if I need anything"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You add them to your customer list</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You're busy with new service calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>6 months later? They've forgotten about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Their AC breaks. They call the first HVAC company that comes to mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>That maintenance contract goes to a competitor</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-green-950/20 border border-green-500/50">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">With Our Partnership</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You finish a job. Customer is satisfied</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>We handle personalized follow-ups so you can focus on new jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>We send targeted emails from YOUR company (not spam, personal check-ins)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Seasonal reminders ("Time for spring AC prep", "Winter heating check")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Customer remembers you. They call YOU when they need service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You close the job and earn the revenue</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 p-8 rounded-2xl bg-yellow-500/10 border-2 border-yellow-500/50 text-center">
            <p className="text-lg text-white">
              <span className="font-bold">The reality:</span> Most HVAC contractors get zero follow-up emails from their customers. Your competitors aren't staying in touch either.
            </p>
            <p className="text-gray-300 mt-2">That's your opportunity. We handle the follow-ups. You get the calls.</p>
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
            <h2 className="text-5xl font-bold text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Personal emails from your company. Not marketing. Real follow-up that works.
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
                      <h3 className="text-2xl font-bold text-white">You Give Us Your Customer List</h3>
                    </div>
                    <p className="text-gray-400">Provide us with names and emails of your past customers—people who had service with you but haven't called back. We take it from there.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">CSV, Excel, or Google Sheet</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-yellow-400"
                  aria-hidden="true"
                >
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
                      <h3 className="text-2xl font-bold text-white">We Set Up Personalized Follow-Ups</h3>
                    </div>
                    <p className="text-gray-400">We create personalized email templates and set up your follow-up schedule. Seasonal reminders ("Spring AC service time", "Winter heating check"), maintenance upsells, and personal check-ins—all sent from YOUR company email.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">7-day setup</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Fully personalized</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="text-yellow-400"
                  aria-hidden="true"
                >
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
                      <h3 className="text-2xl font-bold text-white">They Get Personal Emails From You</h3>
                    </div>
                    <p className="text-gray-400">Customers receive personalized emails from your company—checking in on them, suggesting seasonal service, offering maintenance packages. It feels like you're reaching out personally (because you are—we're just making sure it happens consistently).</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Monthly emails</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">High inbox placement</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="text-yellow-400"
                  aria-hidden="true"
                >
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
                      <h3 className="text-2xl font-bold text-white">They Call You (& You Do the Work)</h3>
                    </div>
                    <p className="text-gray-400">Customer remembers you. AC needs service. They call YOU. You handle the job, collect the revenue, and earn the full profit. We handled the follow-up. You handle the relationship and the payday.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Warm leads</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">You earn 100%</span>
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
            <h2 className="text-5xl font-bold text-white mb-4">
              Expected Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">20-30%</p>
              <p className="text-white font-semibold">Customer Re-engagement Rate</p>
              <p className="text-gray-400 text-sm mt-2">Old customers reconnecting and booking service</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">5+ hrs</p>
              <p className="text-white font-semibold">Time Saved Monthly</p>
              <p className="text-gray-400 text-sm mt-2">Not manually calling or emailing past customers</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col justify-center min-h-[280px]">
              <div className='relative mb-5'>
                <p className="text-5xl font-bold text-yellow-400 mb-2">2-4</p>
                <p className="text-white font-semibold">Extra Service Calls/Month</p>
                <p className="text-gray-400 text-sm mt-2">From customers who remember you</p>
              </div>
              <p className="text-gray-500 text-xs mt-0 italic border-t border-yellow-500/30 pt-3">
                *Results vary based on customer list size, service quality, and follow-up consistency.
              </p>
            </motion.div>
          </div>

          {/* About Me Section */}
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gray-900 border border-yellow-500/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={NoelPFP.src} alt="Noel Ramadan, Founder & Software Engineer" />
                  <AvatarFallback className="text-2xl font-bold bg-yellow-400 text-black">NR</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-white mb-2">Hi, I'm Noel 👋🏿</h2>
                <p className="text-yellow-400 font-semibold mb-4">Founder & Software Engineer</p>
                <p className="text-gray-300 leading-relaxed">
                  I'm a software engineer who realized HVAC contractors were losing thousands in revenue because they weren't following up with past customers. I built a solution that sends personalized follow-ups automatically so you don't have to do it manually.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  This isn't just a tool. It's your follow-up team. You do the work. We handle the reminders.
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
            <h2 className="text-5xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-400">
              $50/month. Personalized follow-ups from your company. Cancel anytime.
            </p>
          </div>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-gray-900 border-2 border-yellow-400 shadow-2xl shadow-yellow-400/30 text-center"
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-4">LAUNCH SPECIAL - 50% OFF EARLY ADOPTERS</p>

            {/* Monthly Price Update */}
            <div className="flex justify-center items-baseline mb-2">
              <span className="text-3xl font-bold line-through text-gray-500 mr-4">$100</span>
              <p className="text-6xl font-bold text-yellow-400">$50<span className="text-2xl text-gray-400">/month</span></p>
            </div>

            {/* No setup fee during launch 
            <p className="text-gray-400 mb-8">No setup fee during launch</p>*/}

            {/* Countdown Timer Section */}
            <div className="mb-8 p-3 bg-gray-800 rounded-lg border border-yellow-500/50">
              <p className="text-sm font-semibold text-yellow-400 mb-1">Launch Pricing Ends February 2026</p>
              <div className={`text-xl font-mono text-white ${timeLeft.expired ? 'text-red-500' : ''}`}>
                {timeLeft.text}
              </div>
            </div>

            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Personalized emails sent from YOUR company to past customers</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Monthly follow-ups and seasonal service reminders</span>
              </li>
              <li className="flex items-center gap-3">
                <TriangleAlert className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Real-time alerts when customers engage</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowUpWideNarrow className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span className="text-gray-300">Easy customer list updates anytime</span>
              </li>
            </ul>
            <Link href="/apply">
              <button className="cursor-pointer w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101">
                Get Started Now
              </button>
            </Link>
            <p className="text-gray-400 text-sm mt-4">First month: Just $100 (launch pricing + $50 setup fee)</p>
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
          <h2 className="text-5xl font-bold text-white mb-6">
            Stop Letting Revenue Walk Out The Door
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Start turning old customers into repeat business this week. $50 /month. Personal follow-ups. Real results.
          </p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <button className="cursor-pointer px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition transform hover:scale-101 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <CommonFooter />
    </main>
  );
}