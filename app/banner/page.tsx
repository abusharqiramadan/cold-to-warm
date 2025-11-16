import { Globe2 } from "lucide-react"

export default function Banner() {
    return (
        <div className="min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white font-sans text-zinc-900">
            <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
                <span className="flex size-96 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500 text-white shadow-lg shadow-rose-100">
                    <Globe2 className="size-72" />
                </span>
            </section>
        </div>
    )
}