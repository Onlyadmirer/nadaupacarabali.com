import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { blogData } from "@/constants/blog";
import BlogContent from "./components/BlogContent";
import { notFound } from "next/navigation";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import CtaBanner from "@/components/site/CtaBanner";
import Reveal from "@/components/Reveal";
import { waLink } from "@/constants/contact";

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
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={post.image}
        alt={post.title}
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        objectPosition='50% 30%'
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className='section-spacing'>
        <Container className='max-w-3xl'>
          <Link
            href='/blog'
            className='inline-flex min-h-11 items-center gap-2 font-ui text-xs font-semibold tracking-[0.16em] text-primary uppercase transition-colors hover:text-primary-hover'
          >
            <ChevronLeft className='size-4' aria-hidden='true' />
            Kembali ke Blog
          </Link>

          <Reveal className='mt-8'>
            <BlogContent post={post} />
          </Reveal>
        </Container>
      </section>

      <CtaBanner
        title='Terinspirasi dengan Artikel Ini?'
        description='Kami siap membantu mewujudkan acara Anda dengan pertunjukan seni tradisional Bali yang autentik dan profesional.'
        href={waLink()}
        external
      />
    </main>
  );
}
