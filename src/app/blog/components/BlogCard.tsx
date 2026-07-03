import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <div className='bg-neutral-900/40 border border-neutral-800/60 rounded-xl overflow-hidden hover:border-[#d58058]/30 transition-all duration-500 h-full flex flex-col'>
        <div className='relative aspect-16/10 w-full overflow-hidden'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105'
            sizes='(max-width: 640px) 100vw 80vw'
          />
          <div className='absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent' />
          <div className='absolute top-4 left-4'>
            <span className='font-outfit text-[10px] tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10'>
              {post.category}
            </span>
          </div>
        </div>

        <div className='p-6 lg:p-8 flex flex-col flex-1'>
          <span className='font-outfit text-[11px] tracking-wide uppercase text-neutral-500 mb-3'>
            {post.date}
          </span>

          <h3 className='font-libre-baskerville italic text-xl lg:text-2xl text-[#f09a73] mb-3 leading-tight group-hover:underline decoration-[#d58058]/50 underline-offset-4 transition-all duration-300'>
            {post.title}
          </h3>

          <p className='font-outfit text-neutral-400 text-sm leading-relaxed line-clamp-3 flex-1'>
            {post.excerpt}
          </p>

          <div className='mt-6 pt-4 border-t border-neutral-800/60'>
            <span className='font-outfit text-xs tracking-[0.15em] uppercase text-[#d58058] group-hover:text-[#f09a73] transition-colors duration-300'>
              Baca Selengkapnya
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
