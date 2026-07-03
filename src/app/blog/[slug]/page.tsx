import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogData } from "@/constants/blog";
import { ChevronLeft } from "lucide-react";
import BlogContent from "./components/BlogContent";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Nada Upacara Bali`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Nada Upacara Bali`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden'>
      {/* Hero Section */}
      <section className='relative h-[70vh] min-h-100 flex flex-col justify-center items-center text-center px-6'>
        <div className='absolute inset-0 z-0'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes='100vw'
            className='object-cover'
            priority
            fetchPriority='high'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/90' />
        </div>
      </section>

      {/* Blog Content */}
      <section className='container mx-auto px-6 py-16 max-w-7xl'>
        <div className='mb-12'>
          <Link
            href='/blog'
            className='font-outfit text-xs tracking-[0.2em] uppercase text-[#d58058] hover:text-[#f09a73] transition-colors duration-300 inline-flex items-center gap-2'
          >
            <ChevronLeft className='w-4 h-4' />
            Kembali ke Blog
          </Link>
        </div>

        <BlogContent post={post} />
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-6 py-32 text-center max-w-7xl relative'>
        <div
          className='absolute inset-0 -z-10 pointer-events-none'
          style={{
            background:
              "radial-gradient(circle at center, rgba(178,116,87,0.08) 0%, transparent 70%)",
          }}
        ></div>
        <div className='max-w-4xl mx-auto border border-[#b27457]/20 bg-neutral-900/60 p-12 md:p-20 rounded-2xl backdrop-blur-md relative overflow-hidden group'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-[#f09a73]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-[#d58058]/10 blur-3xl -z-10 rounded-full transition-transform duration-1000 group-hover:scale-150'></div>

          <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl mb-6 text-[#f09a73]'>
            Terinspirasi dengan Artikel Ini?
          </h2>
          <p className='font-cormorant-garamond text-neutral-300 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto'>
            Kami siap membantu mewujudkan acara Anda dengan pertunjukan seni
            tradisional Bali yang autentik dan profesional.
          </p>
          <Link
            href='https://wa.me/6285119309088'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='font-outfit bg-[#a05530] hover:bg-[#7a3f20] text-white rounded-none px-6 md:px-12 py-7 text-xs lg:text-base tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(160,85,48,0.2)] hover:shadow-[0_0_30px_rgba(122,63,32,0.4)]'>
              Hubungi Kami Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
