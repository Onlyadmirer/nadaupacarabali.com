import MenuBar from "@/components/layouts/menubar/MenuBar";
import Footer from "@/components/layouts/footer/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuBar />
      <div id='main-content' tabIndex={-1} className='flex-1 outline-none'>
        {children}
      </div>
      <Footer />
    </>
  );
}
