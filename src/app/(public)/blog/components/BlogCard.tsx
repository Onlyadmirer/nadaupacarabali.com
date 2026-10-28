import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className='group block h-full'>
      <article className='flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_-45px_rgba(139,94,60,0.55)]'>
        <div className='relative aspect-16/10 w-full overflow-hidden'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
          <div className='absolute inset-0 bg-linear-to-t from-neutral-950/80 via-neutral-950/15 to-transparent' />
          <div className='absolute top-4 left-4'>
            <span className='rounded-full border border-white/20 bg-neutral-950/50 px-3 py-1.5 font-ui text-[10px] tracking-[0.16em] text-white uppercase backdrop-blur'>
              {post.category}
            </span>
          </div>
        </div>

        <div className='flex flex-1 flex-col p-6 lg:p-7'>
          <time className='font-ui text-[11px] tracking-[0.14em] text-muted-foreground uppercase'>
            {post.date}
          </time>

          <h3 className='mt-3 font-heading text-xl leading-tight font-semibold text-foreground transition-colors duration-200 group-hover:text-primary lg:text-2xl'>
            {post.title}
          </h3>

          <p className='mt-3 line-clamp-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground'>
            {post.excerpt}
          </p>

          <div className='mt-6 border-t border-border pt-4'>
            <span className='inline-flex items-center gap-2 font-ui text-xs font-semibold tracking-[0.14em] text-primary uppercase'>
              Baca Selengkapnya
              <span aria-hidden='true' className='transition-transform duration-200 group-hover:translate-x-0.5'>
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
