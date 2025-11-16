import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    CheckCircle2,
    ClipboardList,
    FileText,
    Mail,
    Users,
    Zap,
} from "lucide-react"
import { NavBar } from "@/components/landing-page/navbar"

const CAL_COM_EMBED_URL =
    "https://cal.com/muslimweb/custom-build-discovery?embed=1&layout=month_view"
const CAL_COM_DIRECT_URL = "https://cal.com/noel-ramadan/discovery-meeting"
const GOOGLE_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/XqARsQC9utMG1nng6/viewform?embedded=true"
const GOOGLE_FORM_DIRECT_URL =
    "https://forms.gle/XqARsQC9utMG1nng6"

const expectations = [
    {
        title: "Discovery workshop scheduled",
        description:
            "We set a longer session with your leaders to learn about each site and goal.",
        icon: ClipboardList,
    },
    {
        title: "Custom plan and timeline created",
        description:
            "You receive clear phases, cost ranges, and tools matched to your network.",
        icon: FileText,
    },
    {
        title: "Dedicated build team introduced",
        description:
            "Meet the crew that will guide, build, and support your launch from day one.",
        icon: Users,
    },
]

export default function CustomPlanPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white">
            <NavBar />
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-600">
                        <Zap className="h-4 w-4" />
                        Enterprise partnership built for scale
                    </span>
                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                        Custom Build for Your Institution
                    </h1>
                    <p className="text-lg text-zinc-600 sm:text-xl">
                        For multi-location networks, large nonprofits, and teams that need tools designed around their daily work.
                    </p>
                </header>

                <div className="grid gap-8 lg:grid-cols-2">
                    <Card className="border-rose-100 bg-white/90 shadow-lg shadow-rose-100">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <CardTitle className="text-2xl text-zinc-900">Instant scheduling</CardTitle>
                                    <CardDescription className="text-base text-zinc-600 mt-2">
                                        Pick a time this week. We'll align on your mission, must-have features, timeline, and investment. You walk away with clarity and next steps in hand.
                                    </CardDescription>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                                    MEETING
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-500">
                                No credit card required. Schedule instantly and receive prep materials right after you book.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <CheckCircle2 className="h-4 w-4 text-rose-500" />
                                Secure, private scheduling
                            </div>
                            <Button asChild>
                                <Link href={CAL_COM_DIRECT_URL} target="_blank" rel="noreferrer">
                                    Schedule now
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="border-rose-100 bg-white/90 shadow-lg shadow-rose-100">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <CardTitle className="text-2xl text-zinc-900">Tell us about your institution</CardTitle>
                                    <CardDescription className="text-base text-zinc-600 mt-2">
                                        Fill out a brief form about your mission, current needs, and ideal timeline. We'll respond within 24 hours with a tailored proposal and next steps, insha'Allah. Most forms take 5-10 minutes. We only ask what matters.
                                    </CardDescription>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
                                    FORM
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-500">
                                Your information stays private. We use it only to craft recommendations rooted in your institution's mission and values.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <Mail className="h-4 w-4 text-rose-500" />
                                Response within 24 hours
                            </div>
                            <Button asChild variant="outline">
                                <Link href={GOOGLE_FORM_DIRECT_URL} target="_blank" rel="noreferrer">
                                    Start form
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <section className="mt-4 rounded-3xl border border-rose-100 bg-white/70 px-6 py-10 shadow-lg shadow-rose-50 sm:px-8">
                    <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">What to expect next</h2>
                    <p className="mt-2 max-w-2xl text-base text-zinc-600">
                        We pair with your leaders, tech staff, and board so every step stays clear. Here is how the journey flows.
                    </p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-3">
                        {expectations.map((item, index) => {
                            const Icon = item.icon
                            const number = index + 1
                            const isPrimary = index === 0
                            return (
                                <div
                                    key={item.title}
                                    className={`flex flex-col gap-3 rounded-2xl border p-5 shadow-sm shadow-rose-50 ${isPrimary
                                        ? "border-rose-200 bg-gradient-to-br from-rose-500 via-rose-400 to-rose-500 text-white"
                                        : "border-rose-100 bg-white/90 text-zinc-900"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold ${isPrimary ? "bg-white/20 text-white" : "bg-rose-100 text-rose-600"
                                                }`}
                                        >
                                            {number}
                                        </span>
                                        {!isPrimary ? (
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                                                <Icon className="h-5 w-5" />
                                            </span>
                                        ) : (
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white">
                                                <Icon className="h-5 w-5" />
                                            </span>
                                        )}
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
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
