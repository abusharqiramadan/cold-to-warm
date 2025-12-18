'use client';

import React, { useState } from 'react';
import { CheckCircle, Zap, TrendingUp, Mail, AlertCircle, ArrowRight, Handshake, Send, MessageSquare, CalendarCheck, User, Bug, ArrowUpWideNarrow, IceCream, TriangleAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import NoelPFP from '@/lib/images/noel-pfp.png';
import Link from 'next/link';
import PricingCard from '@/components/landing-page/pricing-plan';
import { NavBar } from '@/components/landing-page/navbar';
import { CommonFooter } from '@/components/landing-page/common-footer';
import { GiMapleLeaf } from 'react-icons/gi'

export default function ColdToWarmLanding() {
  const [email, setEmail] = useState('');

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
            Turn Cold Leads Into  <br /> <span className="text-yellow-400">Hot Prospects</span>, With Preference-Based Matching
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your cold leads aren't gone—they just want the RIGHT property. We match them to your new listings. You close deals. We celebrate.
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
              <span className="font-bold text-lg">1 extra deal/year</span> lost from cold leads → <span className="text-red-400 font-bold">-$8,750 in commission</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">Every cold lead you don't follow up could cost you thousands in commissions.</p>
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
              The Follow-Up Gap Every Realtor Faces
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              You're great at showing properties and closing deals. But here's the problem: buyers go silent, and you're too busy to follow up with everyone. Those cold leads? They're worth thousands in lost commissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-red-950/20 border border-red-500/50">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">Without Us (The Reality)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You show a property. Buyer says "let me think about it"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You add them to your follow-up list</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>You're busy closing other deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>2 weeks later? They've moved on to another realtor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Buyer calls a different realtor and closes with them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>The cold lead goes to a competitor who stayed in touch</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-green-950/20 border border-green-500/50">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-white mb-3">With Our Partnership</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You show a property. Buyer says "let me think about it"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>We handle the follow-up so you can focus on closing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You focus on active deals. We send monthly targetted market updates your cold leads want to hear</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Buyer stays engaged. Your listing stays top-of-mind and relevant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>When they're ready—we alert you immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>You close the deal and earn the commission</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 p-8 rounded-2xl bg-yellow-500/10 border-2 border-yellow-500/50 text-center">
            <p className="text-lg text-white">
              <span className="font-bold">The research is clear:</span> 80% of sales need 5+ touchpoints. Most realtors give up after 1-2 tries.
            </p>
            <p className="text-gray-300 mt-2">That's where we come in. We handle the patience. You handle the closing.</p>
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
              We've built a simple 4-step partnership that turns your cold leads into real commissions.
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
                      <h3 className="text-2xl font-bold text-white">You Give Us Your Cold Leads</h3>
                    </div>
                    <p className="text-gray-400">You provide us with names and emails of your cold leads—the ones who said "let me think about it" and disappeared. We take it from there.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">CSV or Google Sheet</span>
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
                      <h3 className="text-2xl font-bold text-white">We Match Their Preferences to Listings</h3>
                    </div>
                    <p className="text-gray-400">We handle all the technical setup. We configure your email sequences on your behalf, integrate everything seamlessly, and test it to make sure it works perfectly for your market.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">7-day setup</span>
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
                      <h3 className="text-2xl font-bold text-white">Your Listing Finds Them (At the Right Time)</h3>
                    </div>
                    <p className="text-gray-400">Every month, they hear from you with market updates they actually want to see. It's like you're staying in touch—but we're doing the heavy lifting while you focus on active clients and closings.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Monthly emails</span>
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
                      <h3 className="text-2xl font-bold text-white">You Close the Deal (& We Celebrate)</h3>
                    </div>
                    <p className="text-gray-400">When a lead shows interest—we alert you immediately. You take over, follow up, and close the sale. We handled sending the message. You handle the relationship and the commission.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">Real-time alerts</span>
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
              Estimated Results From Our Service
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">30%</p>
              <p className="text-white font-semibold">Cold Leads Recovered</p>
              <p className="text-gray-400 text-sm mt-2">Average leads that re-engage per month</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col items-center justify-center min-h-[280px]">
              <p className="text-5xl font-bold text-yellow-400 mb-2">8+ hrs</p>
              <p className="text-white font-semibold">Time Saved Monthly</p>
              <p className="text-gray-400 text-sm mt-2">8+ hours saved per month = 96+ hours/year</p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/50 text-center flex flex-col justify-center min-h-[280px]">
              <div className='relative mb-5'>
                <p className="text-5xl font-bold text-yellow-400 mb-2">Up to 1-3</p>
                <p className="text-white font-semibold">Extra Deals/Year</p>
                <p className="text-gray-400 text-sm mt-2">From reactivated cold leads</p>
              </div>
              <p className="text-gray-500 text-xs mt-0 italic border-t border-yellow-500/30 pt-3">
                *Results vary based on lead quality, market conditions, closing ability, and consistent follow-through with interested leads.
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
                <h2 className="text-2xl font-bold text-white mb-2">Hi, I'm Noel 👋🏿l</h2>
                <p className="text-yellow-400 font-semibold mb-4">Founder & Software Engineer</p>
                <p className="text-gray-300 leading-relaxed">
                  I'm a software engineer who found this pain of realtors losing deals to forgotten follow-up. I saw the problem and built a solution. Now, we partner together. I handle the automation with my technical skills, you handle what you do best: closing deals and earning commissions.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  This isn't just a tool. It's a partnership. We win when you win.
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
              Cold to Warm Leads Pricing
            </h2>
            <p className="text-xl text-gray-400">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <PricingCard />
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
            Ready to Stop Losing Deals?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Start turning cold leads into warm sales this week.
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