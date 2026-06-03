import Image from "next/image";

function SalamPendiri() {
  return (
    <div className='flex flex-col md:flex-row p-8 pt-18 md:pt-26 bg-[#e2ccb6]'>
      <div className='flex-1 flex text-neutral-900 flex-col justify-center md:pl-24'>
        <h1 className='text-3xl font-libre-baskerville uppercase'>
          Salam dari <span className='text-[#d58058]'>Pendiri</span>
        </h1>
        <h2 className='font-outfit'>I Made Mahotama Warmasuta</h2>
        <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
          Selamat datang di Nada Upacara Bali. Kami adalah perusahaan penyedia
          pertunjukan seni tradisional Bali mulai dari Rindik, Gender Wayang,
          Semar Pegulingan, Selonding, Angklung Bali, hingga pertunjukan Wayang,
          Joged Bumbung, dan berbagai tari tradisional lainnya.{" "}
        </p>
        <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
          <span className='text-[#d58058]'>Visi kami sederhana:</span> <br />
          menjaga seni Bali tetap hidup dengan rasa yang sakral, penuh rasa, dan
          profesional.{" "}
        </p>
        <p className='mt-4 font-cormorant-garamond text-xl tracking-tight'>
          Saya percaya seni Bali pantas dihormati, tidak hanya lewat karya, tapi
          juga lewat sikap. Kami berkomitmen menjaga standar berpakaian rapi,
          hadir tepat waktu, tampil dengan penuh tanggung jawab. Nada Upacara
          Bali hadir untuk menjembatani tradisi dengan kebutuhan masa kini.
          Untuk upacara adat, pernikahan, acara perusahaan, hingga pertunjukan
          berskala internasional kami siap menghadirkan seni pertunjukan
          terbaik.
        </p>
      </div>
      <div className='flex-1 flex py-6 items-center justify-center'>
        <Image
          src={"/images/mahotama.png"}
          alt='mahotama-warmasuta'
          width={300}
          height={300}
          className='rounded-full'
        ></Image>
      </div>
    </div>
  );
}

export default SalamPendiri;
