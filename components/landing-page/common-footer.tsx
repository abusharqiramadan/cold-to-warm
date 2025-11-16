import Link from "next/link"

export function CommonFooter() {
    return (
        <footer className="border-t border-rose-100 bg-white py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row sm:px-8 lg:px-12">
                <p>© {new Date().getFullYear()} MuslimWeb. Serving the Ummah with care.</p>
                <div className="flex gap-6">
                    <Link href="#pricing" className="transition-colors duration-200 hover:text-rose-500">
                        Pricing
                    </Link>
                    <Link href="#services" className="transition-colors duration-200 hover:text-rose-500">
                        Services
                    </Link>
                    <Link href="mailto:hello@muslimweb.co" className="transition-colors duration-200 hover:text-rose-500">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}