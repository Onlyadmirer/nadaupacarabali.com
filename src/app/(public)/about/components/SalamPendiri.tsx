import Image from "next/image";

function SalamPendiri() {
  return (
    <section className='rounded-3xl bg-secondary/70 px-6 py-12 md:px-12 md:py-16'>
      <div className='grid items-center gap-10 md:grid-cols-[1fr_auto]'>
        <div>
          <p className='font-ui text-xs font-semibold tracking-[0.22em] text-primary uppercase'>
            Salam dari Pendiri
          </p>
          <h2 className='mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl'>
            I Made Mahotama Warmasuta
          </h2>

          <div className='mt-6 space-y-4 font-body text-base leading-relaxed text-muted-foreground'>
            <p>
              Selamat datang di Nada Upacara Bali. Kami adalah perusahaan
              penyedia pertunjukan seni tradisional Bali mulai dari Rindik,
              Gender Wayang, Semar Pegulingan, Selonding, Angklung Bali, hingga
              pertunjukan Wayang, Joged Bumbung, dan berbagai tari tradisional
              lainnya.
            </p>
            <p>
              <span className='font-semibold text-foreground'>
                Visi kami sederhana:
              </span>{" "}
              menjaga seni Bali tetap hidup dengan rasa yang sakral, penuh rasa,
              dan profesional.
            </p>
            <p>
              Saya percaya seni Bali pantas dihormati, tidak hanya lewat karya,
              tapi juga lewat sikap. Kami berkomitmen menjaga standar berpakaian
              rapi, hadir tepat waktu, dan tampil dengan penuh tanggung jawab.
              Nada Upacara Bali hadir untuk menjembatani tradisi dengan
              kebutuhan masa kini.
            </p>
          </div>
        </div>

        <div className='flex justify-center md:justify-end'>
          <Image
            src='/images/mahotama.png'
            alt='I Made Mahotama Warmasuta, pendiri Nada Upacara Bali'
            width={288}
            height={288}
            className='size-64 rounded-full border-4 border-card object-cover shadow-[0_24px_70px_-40px_rgba(139,94,60,0.55)] md:size-72'
          />
        </div>
      </div>
    </section>
  );
}

export default SalamPendiri;
