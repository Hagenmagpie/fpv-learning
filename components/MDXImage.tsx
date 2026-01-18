import Image, { ImageProps } from 'next/image';

type MDXImageProps = ImageProps & {
    alt: string;
    caption?: string;
};

export function MDXImage({ src, alt, caption, ...props }: MDXImageProps) {
    return (
        <figure className="my-8">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
                <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                    {...props}
                />
            </div>
            {caption && (
                <figcaption className="text-center text-sm text-slate-500 mt-2 font-medium">
                    {caption}
                </figcaption>
            )}
            {!caption && alt && (
                <figcaption className="text-center text-sm text-slate-500 mt-2 font-medium">
                    {alt}
                </figcaption>
            )}
        </figure>
    );
}
