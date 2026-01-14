import { getPostBySlug, getPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getPostSlugs();
    return posts.map((post) => ({
        slug: post.replace(/\.md$/, ''),
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto py-12 px-6 max-w-3xl min-h-screen">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors group font-medium">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Base (返回)
            </Link>

            <div className="mb-10 border-b border-slate-100 pb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">{post.meta.title}</h1>
                {post.meta.description && (
                    <p className="text-xl text-slate-500 font-medium">{post.meta.description}</p>
                )}
            </div>

            <div className="prose prose-lg prose-sky max-w-none prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
