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
      <div className='flex-1'>{children}</div>
      <Footer />
    </>
  );
}
