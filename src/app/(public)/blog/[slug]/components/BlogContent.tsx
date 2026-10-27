import type { BlogPost } from "@/constants/blog";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className='max-w-3xl mx-auto'>
      <header className='text-center mb-16'>
        <div className='mb-4'>
          <span className='font-outfit uppercase tracking-[0.2em] text-sm text-[#c05621] font-semibold'>
            {post.category}
          </span>
        </div>
        <h1 className='font-libre-baskerville italic text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#9a3412] tracking-tight leading-tight'>
          {post.title}
        </h1>
        <div className='flex justify-center mb-6'>
          <div className='w-24 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
        </div>
        <time className='font-outfit text-sm tracking-wide uppercase text-[#6f6055]'>
          {post.date}
        </time>
      </header>

      <div className='space-y-6'>
        {post.content.map((paragraph, index) => {
          const isFirst = index === 0;
          return (
            <p
              key={index}
              className={`font-outfit text-[#4e4239] leading-relaxed ${
                isFirst
                  ? "text-xl lg:text-2xl text-foreground font-semibold"
                  : "text-lg lg:text-xl"
              }`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
}
