"use client"

import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useMemo, type CSSProperties } from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { NavBar } from "@/components/landing-page/navbar"
import { DEFAULT_EASE, DEFAULT_VIEWPORT, createSectionVariants, createStaggerContainer, createStaggerItem } from "@/lib/motion-presets"
import {
    CheckCircle2,
    ClipboardList,
    FileText,
    Mail,
    PhoneCall,
    Rocket,
    Zap,
} from "lucide-react"

const CAL_COM_EMBED_URL =
    "https://cal.com/muslimweb/excellence-consult?embed=1&layout=month_view"
const CAL_COM_DIRECT_URL = "https://cal.com/noel-ramadan/discovery-meeting"
const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/kstf4aY19Uz2uRwAA/viewform?embedded=true"
const GOOGLE_FORM_DIRECT_URL =
    "https://forms.gle/kstf4aY19Uz2uRwAA"

const expectations = [
    {
        title: "We Receive Your Information",
        description:
            "Everything you shared is already stored safely and being reviewed by a real team member who understands your mission.",
        icon: FileText,
    },
    {
        title: "We’ll Reach Out Within 24 Hours",
        description:
            "Expect a friendly message or call—whichever you picked—with prep notes, gentle reminders, and final details for our chat.",
        icon: PhoneCall,
    },
    {
        title: "You’re On Track, Insha’Allah",
        description:
            "Celebrate this step. You’ve started building the professional online presence your institution and families deserve.",
        icon: Rocket,
    },
]

export default function ConsultationPage() {
    const shouldReduceMotion = useReducedMotion()
    const reduceMotion = shouldReduceMotion ?? false

    const sectionVariants = useMemo(
        () => createSectionVariants(reduceMotion),
        [reduceMotion],
    )
    const staggerContainerVariants = useMemo(
        () => createStaggerContainer(reduceMotion),
        [reduceMotion],
    )
    const staggerItemVariants = useMemo(
        () => createStaggerItem(reduceMotion),
        [reduceMotion],
    )
    const motionStyle = useMemo<CSSProperties>(
        () => ({ willChange: "opacity, transform" }),
        [],
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
            <NavBar />
            <AnimatePresence mode="wait">
                <motion.div
                    key="base-plan"
                    layout
                    className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                    variants={sectionVariants}
                    initial={reduceMotion ? undefined : "hidden"}
                    whileInView={reduceMotion ? undefined : "show"}
                    viewport={DEFAULT_VIEWPORT}
                    exit={reduceMotion ? undefined : "exit"}
                    transition={{ duration: 0.45, ease: DEFAULT_EASE }}
                    style={motionStyle}
                >
                    {/* Hero block introduces pathways with staggered CTA cards. */}
                    <motion.header
                        layout
                        variants={staggerContainerVariants}
                        className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
                        style={motionStyle}
                    >
                        <motion.span
                            layout
                            variants={staggerItemVariants}
                            className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-600"
                            style={motionStyle}
                        >
                            <Zap className="h-4 w-4" />
                            Consultation paths built for your institution
                        </motion.span>
                        <motion.h1
                            layout
                            variants={staggerItemVariants}
                            className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
                            style={motionStyle}
                        >
                            Schedule your excellence consult
                        </motion.h1>
                        <motion.p
                            layout
                            variants={staggerItemVariants}
                            className="text-lg text-zinc-600 sm:text-xl"
                            style={motionStyle}
                        >
                            Choose what works for you. Quick live meeting to lock everything in, or send your details and we'll follow up with a tailored plan—within 24 hours, insha'Allah.
                        </motion.p>
                    </motion.header>

                    {/* CTA cards stagger to highlight meeting vs form options. */}
                    <motion.div
                        layout
                        variants={staggerContainerVariants}
                        className="grid gap-8 lg:grid-cols-2"
                        style={motionStyle}
                    >
                        {[{
                            title: "Instant scheduling",
                            description:
                                "Pick a time this week. We'll align on your mission, must-have features, timeline, and investment. You walk away with clarity and next steps in hand.",
                            badge: "MEETING",
                            footerIcon: CheckCircle2,
                            footerCopy: "Secure, private scheduling",
                            cta: (
                                <Button asChild>
                                    <Link href={CAL_COM_DIRECT_URL} target="_blank" rel="noreferrer">
                                        Schedule now
                                    </Link>
                                </Button>
                            ),
                        }, {
                            title: "Tell us about your institution",
                            description:
                                "Fill out a brief form about your mission, current needs, and ideal timeline. We'll respond within 24 hours with a tailored proposal and next steps, insha'Allah. Most forms take 5-10 minutes. We only ask what matters.",
                            badge: "FORM",
                            footerIcon: Mail,
                            footerCopy: "Response within 24 hours",
                            cta: (
                                <Button asChild variant="outline">
                                    <Link href={GOOGLE_FORM_DIRECT_URL} target="_blank" rel="noreferrer">
                                        Start form
                                    </Link>
                                </Button>
                            ),
                        }].map((card) => {
                            const FooterIcon = card.footerIcon
                            return (
                                <motion.article
                                    key={card.title}
                                    layout
                                    variants={staggerItemVariants}
                                    className="h-full"
                                    style={motionStyle}
                                >
                                    <Card className="h-full border-rose-100 bg-white/90 shadow-lg shadow-rose-100">
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <CardTitle className="text-2xl text-zinc-900">{card.title}</CardTitle>
                                                    <CardDescription className="text-base text-zinc-600 mt-2">
                                                        {card.description}
                                                    </CardDescription>
                                                </div>
                                                <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                                                    {card.badge}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-zinc-500">
                                                {card.badge === "MEETING"
                                                    ? "No credit card required. Schedule instantly and receive prep materials right after you book."
                                                    : "Your information stays private. We use it only to craft recommendations rooted in your institution's mission and values."}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                                <FooterIcon className="h-4 w-4 text-rose-500" />
                                                {card.footerCopy}
                                            </div>
                                            {card.cta}
                                        </CardFooter>
                                    </Card>
                                </motion.article>
                            )
                        })}
                    </motion.div>

                    {/* Expectation steps animate sequentially for clarity. */}
                    <motion.section
                        layout
                        variants={sectionVariants}
                        className="mt-4 rounded-3xl border border-rose-100 bg-white/70 px-6 py-10 shadow-lg shadow-rose-50 sm:px-8"
                        style={motionStyle}
                    >
                        <motion.h2
                            layout
                            variants={staggerItemVariants}
                            className="text-2xl font-semibold text-zinc-900 sm:text-3xl"
                            style={motionStyle}
                        >
                            Here’s what comes next
                        </motion.h2>
                        <motion.p
                            layout
                            variants={staggerItemVariants}
                            className="mt-2 max-w-2xl text-base text-zinc-600"
                            style={motionStyle}
                        >
                            You’re in good hands. We’ve made this process easy and simple for you to follow. Here’s what happens now.
                        </motion.p>
                        <motion.div
                            layout
                            variants={staggerContainerVariants}
                            className="mt-8 grid gap-6 sm:grid-cols-3"
                            style={motionStyle}
                        >
                            {expectations.map((item, index) => {
                                const Icon = item.icon
                                const number = index + 1
                                const isPrimary = index === 0
                                return (
                                    <motion.article
                                        key={item.title}
                                        layout
                                        variants={staggerItemVariants}
                                        className={`flex flex-col gap-3 rounded-2xl border p-5 shadow-sm shadow-rose-50 ${isPrimary
                                                ? "border-rose-200 bg-gradient-to-br from-rose-500 via-rose-400 to-rose-500 text-white"
                                                : "border-rose-100 bg-white/90 text-zinc-900"
                                            }`}
                                        style={motionStyle}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold ${isPrimary ? "bg-white/20 text-white" : "bg-rose-100 text-rose-600"
                                                    }`}
                                            >
                                                {number}
                                            </span>
                                            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${isPrimary ? "bg-white/30 text-white" : "bg-rose-50 text-rose-500"}`}>
                                                <Icon className="h-5 w-5" />
                                            </span>
                                        </div>
                                        <h3
                                            className={`text-lg font-semibold ${isPrimary ? "text-white" : "text-zinc-900"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`text-sm ${isPrimary ? "text-white/90" : "text-zinc-600"
                                                }`}
                                        >
                                            {item.description}
                                        </p>
                                    </motion.article>
                                )
                            })}
                        </motion.div>
                    </motion.section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
