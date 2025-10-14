"use client";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";
import Footer from "@components/organisms/Footer";
import Navbar from "@components/organisms/Navbar";

type LayoutProps = PropsWithChildren<{ hideFooter?: boolean }>;

const Layout = ({ children, hideFooter = false }: LayoutProps) => {
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;


