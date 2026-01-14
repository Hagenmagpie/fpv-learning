import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type Post = {
    slug: string;
    meta: {
        title: string;
        description?: string;
        order?: number;
        [key: string]: any;
    };
    content: string;
}

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug: string): Post | null {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data as Post['meta'], content };
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is Post => post !== null)
        .sort((post1, post2) => ((post1.meta.order || 99) > (post2.meta.order || 99) ? 1 : -1));
    return posts;
}
