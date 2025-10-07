"use client";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import Footer from "@components/organisms/Footer";
import Navbar from "@components/organisms/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
  const params = useParams<{ locale: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;


