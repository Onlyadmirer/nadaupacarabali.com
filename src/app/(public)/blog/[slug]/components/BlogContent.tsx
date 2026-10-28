import type { BlogPost } from "@/constants/blog";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article>
      <time className='font-ui text-xs tracking-[0.16em] text-muted-foreground uppercase'>
        {post.date}
      </time>

      <div className='mt-5 space-y-5'>
        {post.content.map((paragraph, index) => {
          const isFirst = index === 0;
          return (
            <p
              key={index}
              className={
                isFirst
                  ? "font-body text-lg leading-relaxed font-medium text-foreground md:text-xl"
                  : "font-body text-base leading-relaxed text-muted-foreground md:text-lg"
              }
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
}
