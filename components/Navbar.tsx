import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo & Title */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-transform group-hover:rotate-12">
                            <Image
                                src="/logo.png"
                                alt="ASBIRD Logo"
                                fill
                                className="object-contain"
                                sizes="40px"
                            />
                        </div>
                        <span className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                            ASBIRD
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
                        <Link href="/docs/simulator" className="hover:text-primary transition-colors">
                            手册 (Docs)
                        </Link>
                        <a
                            href="https://github.com/hagenmagpie/fpv-learning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black transition-colors"
                        >
                            <Github size={24} />
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
