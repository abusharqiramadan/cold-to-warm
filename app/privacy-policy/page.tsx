'use client';

import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CommonFooter } from '@/components/landing-page/common-footer';
import { NavBar } from '@/components/landing-page/navbar';

export default function PrivacyPolicy() {
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

      {/* Privacy Section */}
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
              <Lock className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-gray-400">Last updated: December 2025</p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={itemVariants} className="mb-12 p-6 rounded-xl bg-yellow-950/30 border border-yellow-500/50">
            <p className="text-yellow-200 text-sm">
              <strong>Disclaimer:</strong> This privacy policy is provided for informational purposes. This is not legal advice. We recommend consulting with a legal professional to ensure full compliance with applicable privacy laws in your jurisdiction.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-12 text-gray-300 leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Cold→Warm Leads ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <div className="ml-4 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Personal Data:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>Real estate license information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Lead Information:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Cold lead names and contact information (provided by you)</li>
                    <li>Buyer preferences (property type, price range, location, etc.)</li>
                    <li>Engagement metrics (email opens, clicks)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Usage Data:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Browser type and version</li>
                    <li>IP address</li>
                    <li>Pages visited</li>
                    <li>Time and date of visits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for purposes including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing and maintaining our Service</li>
                <li>Matching buyer preferences to property listings</li>
                <li>Sending emails on your behalf</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Improving and optimizing our Service</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Third Parties</h2>
              <p className="mb-3 font-semibold text-yellow-300">
                We DO NOT share your personal information or your cold leads' data with third parties. Your data is confidential and used solely for the purpose of providing our Service to you.
              </p>
              <p>
                The only exception is when required by law, court order, or government request. We will never sell, rent, or otherwise disclose your information to marketing companies or other third parties without your explicit consent.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us. Cold lead data will be retained as long as your subscription is active.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect functionality of the Service.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. CASL Compliance (Canada)</h2>
              <p className="mb-3">
                We comply with the Canadian Anti-Spam Legislation (CASL). All emails include an unsubscribe option, and we only send promotional content to those who have consented to receive it.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p>
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete such information promptly.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 rounded-lg bg-gray-900 border border-yellow-500/30">
                <p className="text-yellow-400 font-semibold">Cold→Warm Leads</p>
                <p className="text-gray-300">Email: noelramadan06@gmail.com</p>
                <p className="text-gray-300">Address: Edmonton, Alberta, Canada</p>
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