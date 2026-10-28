import type { Metadata } from "next";
import SalamPendiri from "./components/SalamPendiri";
import { image } from "@/constants/images";
import Reveal from "@/components/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import PageHero from "@/components/site/PageHero";
import Container from "@/components/site/Container";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBanner from "@/components/site/CtaBanner";
import { waLink } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Tentang Kami | Nada Upacara Bali",
  description:
    "Mengenal lebih dekat Nada Upacara Bali, cultural performance house yang menghadirkan seni pertunjukan tradisional Bali secara sakral, emosional, dan profesional.",
  openGraph: {
    title: "Tentang Kami | Nada Upacara Bali",
    description:
      "Mengenal lebih dekat Nada Upacara Bali, cultural performance house yang menghadirkan seni pertunjukan tradisional Bali.",
  },
};

const values = [
  {
    number: "01",
    title: "Pionir Seni Tradisi Profesional",
    description:
      "Memadukan nilai budaya tradisional Bali yang luhur dengan etika kerja dan manajemen modern yang sistematis.",
  },
  {
    number: "02",
    title: "Standar Layanan Premium",
    description:
      "Kami menjaga kualitas mulai dari kerapian penampilan, tata busana panggung, hingga ketepatan waktu hadir.",
  },
  {
    number: "03",
    title: "Pelestarian Budaya Relevan",
    description:
      "Fokus pelestarian budaya kami sajikan dengan gaya elegan yang tetap relevan dan memukau di acara masa kini.",
  },
];

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <PageHero
        image={image.aboutBg}
        alt='Tim Nada Upacara Bali'
        eyebrow='Mengenal Lebih Dekat'
        title='Tentang Kami'
        description='Cultural performance house yang lahir dari kecintaan pada seni tradisional Bali, menghadirkan pertunjukan yang sakral, penuh rasa, dan profesional.'
        size='full'
        objectPosition='49% 20%'
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tentang Kami" }]}
      />

      <div className='section-spacing'>
        <Container className='flex flex-col gap-20 md:gap-28'>
          <section className='mx-auto max-w-3xl text-center'>
            <Reveal>
              <SectionHeading
                eyebrow='Sejarah & Filosofi'
                title={
                  <>
                    Tradisi Bertemu{" "}
                    <span className='text-primary italic'>Elegansi</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className='mt-8 space-y-6 text-left'>
                <p className='font-body text-lg leading-relaxed font-medium text-foreground md:text-xl'>
                  Nada Upacara Bali adalah kelompok seni pertunjukan yang lahir
                  dari keinginan sederhana: menghadirkan seni tradisional Bali
                  dengan standar profesional.
                </p>
                <p className='prose-brand'>
                  Berawal dari komunitas kecil pecinta musik tradisional, kami
                  berkembang menjadi penyedia pertunjukan seni yang dipercaya di
                  berbagai upacara adat, pernikahan, dan event modern. Kami
                  percaya bahwa seni tidak hanya untuk dilestarikan, tapi juga
                  dihormati.
                </p>
                <blockquote className='rounded-2xl border-l-4 border-primary bg-secondary/70 p-6 md:p-8'>
                  <p className='font-heading text-xl leading-relaxed text-foreground italic md:text-2xl'>
                    &quot;Filosofi kami sederhana: setiap nada dan gerak harus
                    membawa makna, disajikan dengan keindahan, kesakralan, dan
                    disiplin profesional.&quot;
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <SalamPendiri />
          </Reveal>

          <section>
            <Reveal>
              <SectionHeading
                eyebrow='Keunikan Kami'
                title='Nilai Tambah Kami'
                description='Tiga hal yang membuat setiap penampilan Nada Upacara Bali terasa berbeda.'
                className='mb-12'
              />
            </Reveal>

            <StaggerContainer className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {values.map((value) => (
                <StaggerItem key={value.number}>
                  <div className='group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_-45px_rgba(139,94,60,0.55)] md:p-8'>
                    <div className='font-heading text-4xl text-border transition-colors duration-300 group-hover:text-primary'>
                      {value.number}
                    </div>
                    <h3 className='mt-5 font-ui text-sm font-semibold tracking-[0.08em] text-foreground uppercase'>
                      {value.title}
                    </h3>
                    <p className='mt-3 font-body text-sm leading-relaxed text-muted-foreground'>
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </Container>
      </div>

      <CtaBanner
        title='Ingin Berkolaborasi dengan Kami?'
        description='Ceritakan konsep acara Anda, dan tim kami akan membantu menyusun pertunjukan yang paling sesuai.'
        href={waLink()}
        external
      />
    </main>
  );
}
