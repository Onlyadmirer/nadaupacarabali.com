import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className='group block'>
      <div className='bg-card border border-border rounded-sm overflow-hidden shadow-sm hover:border-[#c05621]/40 transition-all duration-500 h-128 md:h-146 flex flex-col'>
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
          <span className='font-outfit text-[11px] tracking-wide uppercase text-[#6f6055] mb-3'>
            {post.date}
          </span>

          <h3 className='font-libre-baskerville italic text-xl lg:text-2xl text-[#9a3412] mb-3 leading-tight group-hover:underline decoration-[#c05621]/40 underline-offset-4 transition-all duration-300'>
            {post.title}
          </h3>

          <p className='font-outfit text-[#6f6055] text-sm leading-relaxed line-clamp-3 flex-1'>
            {post.excerpt}
          </p>

          <div className='mt-6 pt-4 border-t border-border'>
            <span className='font-outfit text-xs tracking-[0.15em] uppercase text-[#c05621] group-hover:text-[#9a3412] transition-colors duration-300'>
              Baca Selengkapnya
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
