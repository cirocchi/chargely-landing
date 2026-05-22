"use client";

import { useRef } from "react";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import ChiPuo from "@/components/ChiPuo";
import ComeFunziona from "@/components/ComeFunziona";
import Guadagno from "@/components/Guadagno";
import PercheOra from "@/components/PercheOra";
import HostForm from "@/components/HostForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <TopNav onCtaClick={scrollToForm} />
      <Hero onCtaClick={scrollToForm} />
      <ChiPuo />
      <ComeFunziona />
      <Guadagno />
      <PercheOra />
      <HostForm ref={formRef} />
      <Faq />
      <Footer onCtaClick={scrollToForm} />
    </>
  );
}
