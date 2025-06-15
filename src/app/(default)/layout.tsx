import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
