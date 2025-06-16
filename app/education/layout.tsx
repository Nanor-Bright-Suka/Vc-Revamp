


import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Education - Dr. Afoakwa",
  description: "Academic qualifications and research publications",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative min-h-screen w-full flex flex-col overflow-hidden'>
      <Navbar variant="dark"/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  
  );
}