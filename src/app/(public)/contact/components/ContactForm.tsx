"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/constants/contact";
import Reveal from "@/components/Reveal";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${formData.name || "..."}\n\n${formData.subject ? `Subjek: ${formData.subject}\n\n` : ""}${formData.message || ""}\n\n${formData.email ? `Email saya: ${formData.email}` : ""}`;
    window.open(
      `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <Reveal>
      <section className='container mx-auto px-6 py-12 max-w-7xl'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='font-libre-baskerville italic text-4xl lg:text-5xl mb-4 text-[#9a3412]'>
              Kirim Pesan
            </h2>
            <div className='flex justify-center mb-6'>
              <div className='w-16 h-px bg-linear-to-r from-transparent via-[#d58058] to-transparent'></div>
            </div>
            <p className='font-cormorant-garamond text-[#6f6055] text-lg'>
              Isi form di bawah dan pesan Anda akan langsung terkirim ke
              WhatsApp kami.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='border border-border bg-card shadow-sm rounded-xl p-8 lg:p-12 space-y-6'
          >
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='font-outfit text-xs tracking-[0.15em] uppercase text-[#6f6055] block mb-2'
                >
                  Nama
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full bg-white border border-[#dccdc0] rounded-lg px-4 py-3 text-[#2b211b] font-cormorant-garamond text-lg placeholder:text-[#a5968a] focus:outline-none focus:border-[#c05621]/60 transition-colors duration-300'
                  placeholder='Masukkan nama Anda'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='font-outfit text-xs tracking-[0.15em] uppercase text-[#6f6055] block mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-white border border-[#dccdc0] rounded-lg px-4 py-3 text-[#2b211b] font-cormorant-garamond text-lg placeholder:text-[#a5968a] focus:outline-none focus:border-[#c05621]/60 transition-colors duration-300'
                  placeholder='Masukkan email Anda'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='subject'
                className='font-outfit text-xs tracking-[0.15em] uppercase text-[#6f6055] block mb-2'
              >
                Subjek
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full bg-white border border-[#dccdc0] rounded-lg px-4 py-3 text-[#2b211b] font-cormorant-garamond text-lg placeholder:text-[#a5968a] focus:outline-none focus:border-[#c05621]/60 transition-colors duration-300'
                placeholder='Masukkan subjek pesan'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='font-outfit text-xs tracking-[0.15em] uppercase text-[#6f6055] block mb-2'
              >
                Pesan
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className='w-full bg-white border border-[#dccdc0] rounded-lg px-4 py-3 text-[#2b211b] font-cormorant-garamond text-lg placeholder:text-[#a5968a] focus:outline-none focus:border-[#c05621]/60 transition-colors duration-300 resize-none'
                placeholder='Tulis pesan Anda di sini...'
              />
            </div>

            <Button
              type='submit'
              className='font-outfit bg-[#b4501f] hover:bg-[#8f3d16] text-white rounded-none px-8 md:px-12 py-7 text-xs lg:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(180,80,31,0.2)] hover:shadow-[0_0_30px_rgba(143,61,22,0.4)] w-full '
            >
              Kirim via WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </Reveal>
  );
}
