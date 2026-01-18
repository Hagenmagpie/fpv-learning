'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file, if not I will check or create a simple class merger

export type Heading = {
    id: string;
    text: string;
    level: number;
};

interface TableOfContentsProps {
    headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0% 0% -80% 0%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [headings]);

    if (!headings.length) {
        return null;
    }

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto hidden xl:block">
            <h4 className="text-sm font-semibold mb-4 text-slate-900">On this page</h4>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                'block transition-colors duration-200 border-l-2 pl-4 -ml-px',
                                activeId === heading.id
                                    ? 'border-slate-900 text-slate-900 font-medium'
                                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                            )}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                                setActiveId(heading.id);
                                window.history.pushState(null, '', `#${heading.id}`);
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
